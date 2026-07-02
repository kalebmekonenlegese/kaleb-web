import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection({ content, trustIndicators, socialProof }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_28%)]" />
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="section-kicker">{content.eyebrow}</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {content.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={content.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                {content.primaryCta.label}
              </a>
              <a
                href={content.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/10"
              >
                {content.secondaryCta.label}
              </a>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {trustIndicators.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  <span className="mr-2 text-sky-300">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {socialProof.map((item) => (
                <div key={item.label} className="glass-panel p-4">
                  <p className="text-base font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-panel overflow-hidden rounded-[2rem]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-slate-500/60" />
                <span className="h-3 w-3 rounded-full bg-slate-500/60" />
                <span className="h-3 w-3 rounded-full bg-slate-500/60" />
              </div>
              <div className="space-y-6 p-5 sm:p-6">
                <div className="space-y-3">
                  <span className="section-kicker">{content.showcaseTitle}</span>
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    Premium hotel website preview
                  </h2>
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">
                    {content.showcaseCopy}
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sky-400/20 via-slate-900 to-slate-900 p-5">
                    <span className="inline-flex rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      Luxury stay
                    </span>
                    <div className="mt-16 space-y-3">
                      <div className="h-3 w-2/3 rounded-full bg-white/70" />
                      <div className="h-3 w-full rounded-full bg-white/25" />
                      <div className="h-3 w-1/2 rounded-full bg-white/25" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                      <div className="h-20 rounded-2xl bg-gradient-to-br from-sky-400/20 to-slate-800" />
                      <div className="mt-4 h-3 w-3/4 rounded-full bg-white/25" />
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                      <div className="h-20 rounded-2xl bg-gradient-to-br from-fuchsia-400/15 to-slate-800" />
                      <div className="mt-4 h-3 w-1/2 rounded-full bg-white/25" />
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-400">{content.showcaseNote}</p>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-2 top-8 hidden rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 text-sm font-semibold text-white shadow-xl shadow-slate-950/30 md:block md:-left-6">
              {content.badges[0]}
            </div>
            <div className="pointer-events-none absolute -right-2 top-1/3 hidden rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 text-sm font-semibold text-white shadow-xl shadow-slate-950/30 md:block md:-right-8">
              {content.badges[1]}
            </div>
            <div className="pointer-events-none absolute bottom-6 left-8 hidden rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 text-sm font-semibold text-white shadow-xl shadow-slate-950/30 md:block">
              {content.badges[3]}
            </div>
            <div className="pointer-events-none absolute bottom-10 right-6 hidden rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 text-sm font-semibold text-white shadow-xl shadow-slate-950/30 md:block">
              {content.badges[2]}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
