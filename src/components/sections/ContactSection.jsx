import { motion } from "framer-motion";
import { forwardRef, useMemo, useRef, useState } from "react";
import { submitContactInquiry } from "../../lib/contactSubmission";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const initialForm = {
  fullName: "",
  email: "",
  businessName: "",
  industry: "",
  projectType: "",
  estimatedBudget: "",
  projectDescription: "",
};

export function ContactSection({ content, methods, formOptions, cta }) {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });
  const fieldRefs = useRef({});
  const statusRef = useRef(null);

  const methodItems = useMemo(
    () => methods.filter((method) => method.value && method.label),
    [methods]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateContactForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({
        status: "error",
        message: "Please review the highlighted fields and try again.",
      });
      const firstErrorField = Object.keys(nextErrors)[0];
      window.requestAnimationFrame(() => {
        fieldRefs.current[firstErrorField]?.focus();
      });
      return;
    }

    setSubmitState({
      status: "loading",
      message: "Sending your message...",
    });

    try {
      const response = await submitContactInquiry({
        fullName: formValues.fullName.trim(),
        email: formValues.email.trim(),
        businessName: formValues.businessName.trim(),
        industry: formValues.industry,
        projectType: formValues.projectType,
        estimatedBudget: formValues.estimatedBudget.trim(),
        projectDescription: formValues.projectDescription.trim(),
      });

      setFormValues(initialForm);
      setSubmitState({
        status: "success",
        message: response.message,
      });
      window.requestAnimationFrame(() => {
        statusRef.current?.focus();
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
      window.requestAnimationFrame(() => {
        statusRef.current?.focus();
      });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
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

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="glass-panel min-w-0 rounded-[2rem] p-6 sm:p-8"
          >
            <div className="max-w-xl">
              <p className="text-lg leading-8 text-slate-300">{content.introduction}</p>
              <div className="mt-6 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100">
                Response time: within 24–48 hours
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {methodItems.map((method) => (
                <ContactMethodCard key={method.label} method={method} />
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                Good to know
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">{content.reassurance}</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="glass-panel min-w-0 rounded-[2rem] p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Tell me about your project
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Share a few details and I will reply with the next best step for your project.
            </p>

            <form
              id="contact-form"
              className="mt-8 min-w-0 space-y-6"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  autoComplete="name"
                  inputRef={(element) => {
                    fieldRefs.current.fullName = element;
                  }}
                  required
                />
                <FormField
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                  inputRef={(element) => {
                    fieldRefs.current.email = element;
                  }}
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  id="businessName"
                  label="Business Name"
                  name="businessName"
                  value={formValues.businessName}
                  onChange={handleChange}
                  error={errors.businessName}
                  autoComplete="organization"
                  inputRef={(element) => {
                    fieldRefs.current.businessName = element;
                  }}
                  optional
                />
                <FormField
                  id="estimatedBudget"
                  label="Estimated Budget"
                  name="estimatedBudget"
                  value={formValues.estimatedBudget}
                  onChange={handleChange}
                  error={errors.estimatedBudget}
                  optional
                  placeholder="Optional"
                  inputRef={(element) => {
                    fieldRefs.current.estimatedBudget = element;
                  }}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <SelectField
                  id="industry"
                  label="Industry"
                  name="industry"
                  value={formValues.industry}
                  onChange={handleChange}
                  options={formOptions.industries}
                  error={errors.industry}
                  inputRef={(element) => {
                    fieldRefs.current.industry = element;
                  }}
                  required
                />
                <SelectField
                  id="projectType"
                  label="Project Type"
                  name="projectType"
                  value={formValues.projectType}
                  onChange={handleChange}
                  options={formOptions.projectTypes}
                  error={errors.projectType}
                  inputRef={(element) => {
                    fieldRefs.current.projectType = element;
                  }}
                  required
                />
              </div>

              <TextAreaField
                id="projectDescription"
                label="Project Description"
                name="projectDescription"
                value={formValues.projectDescription}
                onChange={handleChange}
                error={errors.projectDescription}
                required
                rows={6}
                placeholder="Tell me about your business, what you need, and any goals you want your website to support."
                inputRef={(element) => {
                  fieldRefs.current.projectDescription = element;
                }}
              />

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={submitState.status === "loading"}
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:bg-sky-400/60"
                >
                  {submitState.status === "loading" ? "Sending..." : "Send Message"}
                </button>
                <p className="text-sm text-slate-400">{content.responseTime}</p>
                <StatusMessage
                  ref={statusRef}
                  status={submitState.status}
                  message={submitState.message}
                />
              </div>
            </form>
          </motion.div>
        </div>

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
              {cta.eyebrow}
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-300">{cta.description}</p>
          </div>
          <a
            href={cta.button.href}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/10"
          >
            {cta.button.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ContactMethodCard({ method }) {
  const Icon = method.icon;

  const content = (
    <div className="flex w-full min-w-0 items-start gap-4 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 transition hover:border-sky-300/25 hover:bg-white/[0.07]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
          {method.label}
        </p>
        <p className="mt-2 break-words text-base font-medium text-white">{method.value}</p>
      </div>
    </div>
  );

  if (!method.href) {
    return content;
  }

  return (
    <a href={method.href} target="_blank" rel="noreferrer" className="block w-full min-w-0">
      {content}
    </a>
  );
}

function FormField({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  required = false,
  optional = false,
  placeholder,
  inputRef,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label} {required ? <span className="text-sky-200">*</span> : null}
        {optional ? <span className="text-slate-500"> (Optional)</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        ref={inputRef}
        required={required}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={getInputClassName(Boolean(error))}
        placeholder={placeholder}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  name,
  value,
  onChange,
  options,
  error,
  inputRef,
  required = false,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label} {required ? <span className="text-sky-200">*</span> : null}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        ref={inputRef}
        required={required}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={getInputClassName(Boolean(error))}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function TextAreaField({
  id,
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  rows = 5,
  placeholder,
  inputRef,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label} {required ? <span className="text-sky-200">*</span> : null}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        ref={inputRef}
        required={required}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${getInputClassName(Boolean(error))} resize-y`}
        placeholder={placeholder}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const StatusMessage = forwardRef(function StatusMessage({ status, message }, ref) {
  if (!message) {
    return null;
  }

  const colorClass =
    status === "success"
      ? "text-emerald-200"
      : status === "error"
        ? "text-rose-300"
        : "text-slate-300";

  const liveMode = status === "error" ? "assertive" : "polite";
  const role = status === "error" ? "alert" : "status";

  return (
    <p
      ref={ref}
      tabIndex={-1}
      role={role}
      aria-live={liveMode}
      className={`text-sm leading-7 ${colorClass}`}
    >
      {message}
    </p>
  );
});

function getInputClassName(hasError) {
  return `w-full rounded-2xl border bg-slate-950/70 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50 focus:ring-2 focus:ring-sky-300/30 ${
    hasError ? "border-rose-400/60" : "border-white/10"
  }`;
}

function validateContactForm(values) {
  const nextErrors = {};

  if (!values.fullName.trim()) {
    nextErrors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Please enter your email address.";
  } else if (!isValidEmail(values.email)) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!values.projectDescription.trim()) {
    nextErrors.projectDescription = "Please add a short description of your project.";
  }

  if (!values.industry.trim()) {
    nextErrors.industry = "Please select your industry.";
  }

  if (!values.projectType.trim()) {
    nextErrors.projectType = "Please select your project type.";
  }

  return nextErrors;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
