import { motion } from "framer-motion";
import { trustProofCta } from "../../data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function TrustSocialProofSection({ content, cards, expectations }) {
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
          <span className="section-kicker">Trust &amp; Social Proof</span>
          <h2 className="section-title mt-5">Trust &amp; Social Proof</h2>
          <p className="section-copy mx-auto mt-5">
            Trust is earned through quality work, clear communication, and a commitment
            to delivering professional websites that support business growth.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {content.introduction}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {cards.map((card) => (
            <TrustCard key={card.title} card={card} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">What You Can Expect</span>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                A professional working experience built on quality, transparency, and support.
              </h3>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expectations.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="glass-panel flex h-full flex-col rounded-[1.75rem] p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                  Client Experience
                </span>
                <h4 className="mt-5 text-xl font-semibold text-white">{item.title}</h4>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="glass-panel mt-12 flex flex-col gap-6 rounded-[2rem] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
              {trustProofCta.eyebrow}
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              {trustProofCta.description}
            </p>
          </div>
          <a
            href={trustProofCta.button.href}
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            {trustProofCta.button.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TrustCard({ card }) {
  const Icon = card.icon;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="glass-panel flex h-full flex-col rounded-[1.75rem] p-6"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
    </motion.article>
  );
}
