import { motion } from "framer-motion";
import { aboutCta } from "../../data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection({ content, values, skills }) {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
        >
          <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sky-400/15 via-slate-900 to-slate-950 p-6">
              <div className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-white/10 bg-slate-950/50">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-3xl font-semibold text-sky-200">
                    KM
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                    Professional Portrait
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">
                    A polished portrait placeholder for a professional profile image that
                    reinforces trust and credibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-kicker">About Me</span>
            <h2 className="section-title mt-5">About Me</h2>
            <p className="section-copy mt-5 max-w-2xl">{content.introduction}</p>

            <div className="glass-panel mt-8 rounded-[1.75rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                My Mission
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                {content.mission}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">Core Values</span>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                The standards that guide every project.
              </h3>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <ValueCard key={value.title} value={value} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]"
        >
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <span className="section-kicker">Skills Overview</span>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              A focused skill set for building modern business websites.
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 px-5 py-4"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <span className="section-kicker">Personal Philosophy</span>
            <p className="mt-5 text-lg leading-8 text-slate-300">{content.philosophy}</p>

            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                {aboutCta.eyebrow}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {aboutCta.description}
              </p>
              <a
                href={aboutCta.button.href}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                {aboutCta.button.label}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ValueCard({ value }) {
  const Icon = value.icon;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="glass-panel flex h-full flex-col rounded-[1.75rem] p-6"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
        <Icon className="h-7 w-7" />
      </div>
      <h4 className="mt-6 text-xl font-semibold text-white">{value.title}</h4>
      <p className="mt-4 text-sm leading-7 text-slate-300">{value.description}</p>
    </motion.article>
  );
}
