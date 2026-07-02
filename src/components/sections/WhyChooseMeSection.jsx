import { motion } from "framer-motion";
import { whyChooseCta } from "../../data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function WhyChooseMeSection({ items }) {
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
          <span className="section-kicker">Why Choose Me</span>
          <h2 className="section-title mt-5">Why Businesses Choose Me</h2>
          <p className="section-copy mx-auto mt-5">
            I create modern, reliable websites designed to help businesses build trust,
            improve their online presence, and make it easier for customers to take action.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((item) => (
            <WhyChooseCard key={item.title} item={item} />
          ))}
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
              {whyChooseCta.eyebrow}
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              {whyChooseCta.description}
            </p>
          </div>
          <a
            href={whyChooseCta.button.href}
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            {whyChooseCta.button.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="glass-panel flex h-full flex-col rounded-[1.75rem] p-6"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
    </motion.article>
  );
}
