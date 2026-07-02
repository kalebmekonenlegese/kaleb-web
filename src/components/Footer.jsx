export function Footer({ items, contactMethods, content }) {
  const footerContacts = contactMethods.filter((method) =>
    ["Email", "WhatsApp", "Country", "GitHub"].includes(method.label)
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10 sm:py-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.8fr_1fr] lg:items-start">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/70">
            Kaleb Mekonen
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            {content.summary}
          </p>
          <p className="mt-6 text-sm text-slate-500">
            &copy; {currentYear} Kaleb Mekonen. All rights reserved.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/70">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {items.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="transition hover:text-white">
              Hire Me
            </a>
          </div>
        </div>

        <div className="glass-panel rounded-[1.75rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/70">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            {footerContacts.map((method) =>
              method.href ? (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block transition hover:text-white"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {method.label}
                  </span>
                  <span className="mt-1 block">{method.value}</span>
                </a>
              ) : (
                <div key={method.label}>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {method.label}
                  </span>
                  <span className="mt-1 block">{method.value}</span>
                </div>
              )
            )}
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="text-base font-semibold text-white">{content.ctaTitle}</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">{content.ctaDescription}</p>
            <a
              href={content.ctaButton.href}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              {content.ctaButton.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
