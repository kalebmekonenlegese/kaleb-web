import { motion } from "framer-motion";
import { processCta } from "../../data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ProcessSection({ steps }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker">My Process</span>
          <h2 className="section-title mt-5">My Process</h2>
          <p className="section-copy mx-auto mt-5">
            A simple, transparent process designed to deliver high-quality websites
            with clear communication from our first conversation to launch.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="hidden xl:grid xl:grid-cols-6 xl:gap-4">
            {steps.map((step, index) => (
              <ProcessTimelineCard
                key={step.number}
                step={step}
                showConnector={index < steps.length - 1}
              />
            ))}
          </div>

          <div className="space-y-5 xl:hidden">
            {steps.map((step) => (
              <ProcessStackCard key={step.number} step={step} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="glass-panel mt-12 flex flex-col gap-6 rounded-[2rem] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
              {processCta.eyebrow}
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              {processCta.description}
            </p>
          </div>
          <a
            href={processCta.button.href}
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            {processCta.button.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessTimelineCard({ step, showConnector }) {
  const Icon = step.icon;

  return (
    <div className="relative flex h-full flex-col">
      <div className="mb-6 flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-200">
          <Icon className="h-6 w-6" />
        </div>
        {showConnector ? <div className="h-px flex-1 bg-white/10" /> : null}
      </div>

      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="glass-panel flex h-full flex-col rounded-[1.75rem] p-5"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/80">
          Step {step.number}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
      </motion.article>
    </div>
  );
}

function ProcessStackCard({ step }) {
  const Icon = step.icon;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="glass-panel flex gap-4 rounded-[1.75rem] p-5"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-200">
          <Icon className="h-6 w-6" />
        </div>
        <div className="mt-3 w-px flex-1 bg-white/10" />
      </div>

      <div className="min-w-0 flex-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/80">
          Step {step.number}
        </span>
        <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
      </div>
    </motion.article>
  );
}
