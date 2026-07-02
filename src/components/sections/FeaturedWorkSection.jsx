import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const previewThemes = {
  hotel: {
    frame:
      "border-amber-200/20 bg-gradient-to-br from-amber-300/15 via-slate-900 to-slate-950",
    glow: "from-amber-200/35 via-amber-100/10 to-transparent",
    accent: "bg-amber-200",
    soft: "bg-amber-200/10 text-amber-100 border-amber-200/20",
  },
  operations: {
    frame:
      "border-sky-300/20 bg-gradient-to-br from-sky-400/15 via-slate-900 to-slate-950",
    glow: "from-sky-300/30 via-sky-200/10 to-transparent",
    accent: "bg-sky-200",
    soft: "bg-sky-300/10 text-sky-100 border-sky-300/20",
  },
  delivery: {
    frame:
      "border-emerald-300/20 bg-gradient-to-br from-emerald-400/15 via-slate-900 to-slate-950",
    glow: "from-emerald-300/30 via-emerald-200/10 to-transparent",
    accent: "bg-emerald-200",
    soft: "bg-emerald-300/10 text-emerald-100 border-emerald-300/20",
  },
};

export function FeaturedWorkSection({
  content,
  featuredProject,
  selectedWork,
  cta,
}) {
  return (
    <section id="selected-work" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell space-y-12 lg:space-y-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker">{content.eyebrow}</span>
          <h2 className="section-title mt-5">{content.title}</h2>
          <p className="section-copy mx-auto mt-5">{content.description}</p>
        </motion.div>

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="glass-panel grid gap-8 overflow-hidden p-5 sm:p-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10"
        >
          <ProjectPreviewSurface
            preview={featuredProject.preview}
            title={featuredProject.title}
            featured
          />

          <div className="space-y-5">
            <div>
              <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                {featuredProject.projectType}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                {featuredProject.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                {featuredProject.intro}
              </p>
            </div>

            <DetailBlock title="Business Challenge" body={featuredProject.challenge} />
            <DetailBlock title="Solution" body={featuredProject.solution} />

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Key Features
              </h4>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                {featuredProject.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <TechStack technologies={featuredProject.technologies} />

            <div className="flex flex-col gap-4 sm:flex-row">
              <PrimaryLink href={featuredProject.demo.href}>
                {featuredProject.demo.label}
              </PrimaryLink>
              <SecondaryLink href={featuredProject.github.href}>
                {featuredProject.github.label}
              </SecondaryLink>
            </div>

            <p className="text-sm leading-7 text-slate-400">{featuredProject.note}</p>
          </div>
        </motion.article>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">More Projects</span>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Additional work presented with the same honest project labeling.
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Personal and concept projects are labeled clearly so you can evaluate
                each project with the right context and see the type of business problem
                the work is designed to address.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {selectedWork.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="glass-panel flex h-full flex-col overflow-hidden rounded-[1.75rem] p-5 sm:p-6"
              >
                <ProjectPreviewSurface preview={project.preview} title={project.title} />
                <span className="inline-flex w-fit rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  {project.type}
                </span>
                <h4 className="mt-5 text-xl font-semibold text-white">{project.title}</h4>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-slate-400">
                  {project.category}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  {project.description}
                </p>
                <div className="mt-5">
                  <TechStack technologies={project.technologies} compact />
                </div>
                <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row">
                  <PrimaryLink href={project.demo.href}>{project.demo.label}</PrimaryLink>
                  <SecondaryLink href={project.github.href}>
                    {project.github.label}
                  </SecondaryLink>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="glass-panel flex flex-col gap-6 rounded-[2rem] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                {cta.eyebrow}
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-300">{cta.description}</p>
            </div>
            <PrimaryLink href={cta.button.href}>{cta.button.label}</PrimaryLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectPreviewSurface({ preview, title, featured = false }) {
  const theme = previewThemes[preview.tone];
  const hasImage = Boolean(preview.imageSrc);

  return (
    <div
      role="img"
      aria-label={preview.imageAlt || `${title} preview`}
      className={`relative overflow-hidden rounded-[1.75rem] border p-4 sm:p-5 ${theme.frame} ${
        featured ? "min-h-[22rem] sm:min-h-[28rem]" : "mb-6 min-h-[16rem] sm:min-h-[18rem]"
      }`}
    >
      {hasImage ? (
        <img
          src={preview.imageSrc}
          alt={preview.imageAlt || `${title} preview`}
          loading={featured ? "eager" : "lazy"}
          className={`h-full w-full rounded-[1.25rem] object-cover ${
            featured ? "min-h-[20rem] sm:min-h-[26rem]" : "min-h-[14rem] sm:min-h-[16rem]"
          }`}
        />
      ) : (
        <>
          <div
            className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${theme.glow}`}
            aria-hidden="true"
          />
          <div className="relative flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-white/25" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
          </div>
          <div className="relative mt-6 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${theme.soft}`}>
                {preview.label}
              </span>
            </div>
            <div className="max-w-lg space-y-3">
              <div className="h-3 w-28 rounded-full bg-white/15" />
              <h4
                className={`font-semibold text-white ${
                  featured ? "text-2xl leading-tight sm:text-3xl" : "text-xl leading-tight"
                }`}
              >
                {preview.heading}
              </h4>
            </div>
            <div className={`grid gap-3 ${featured ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              {preview.chips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-2xl border border-white/10 bg-slate-950/55 p-4"
                >
                  <div className={`h-1.5 w-12 rounded-full ${theme.accent}`} />
                  <div className="mt-4 h-3 w-3/4 rounded-full bg-white/15" />
                  <p className="mt-4 text-sm text-slate-300">{chip}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-[1.3fr_0.7fr]">
                <div className="space-y-3">
                  <div className="h-4 w-2/3 rounded-full bg-white/20" />
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-3 w-5/6 rounded-full bg-white/10" />
                  <div className="h-3 w-4/6 rounded-full bg-white/10" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className={`h-16 rounded-xl ${theme.accent} opacity-20`} />
                  <div className="mt-3 h-3 w-2/3 rounded-full bg-white/15" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function DetailBlock({ title, body }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6">
      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">{title}</h4>
      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{body}</p>
    </div>
  );
}

function TechStack({ technologies, compact = false }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6">
      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
        Technologies Used
      </h4>
      <div className={`mt-4 flex flex-wrap gap-3 ${compact ? "" : "sm:max-w-xl"}`}>
        {technologies.map((technology) => (
          <span
            key={technology}
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

function PrimaryLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
    >
      {children}
    </a>
  );
}

function SecondaryLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/10"
    >
      {children}
    </a>
  );
}
