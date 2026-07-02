import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

export function Header({ items }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const headerClass = scrolled
    ? "border-white/10 bg-slate-950/90 shadow-[0_10px_40px_rgba(2,12,27,0.55)] backdrop-blur-xl"
    : "border-transparent bg-transparent";

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${headerClass}`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#top" className="min-w-0">
            <span className="block text-sm font-medium uppercase tracking-[0.25em] text-sky-200/70">
              Kaleb Mekonen
            </span>
            <span className="block text-base font-semibold text-white sm:text-lg">
              Websites for Growing Businesses
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Hire Me
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="glass-panel mb-4 grid gap-2 p-4 lg:hidden"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-2xl bg-sky-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
