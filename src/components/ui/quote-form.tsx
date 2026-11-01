import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/lib/variants";
import { clsx } from "clsx";
import { CheckCircle2, Send } from "lucide-react";
import React, { useState } from "react";
import { tv } from "tailwind-variants";

const quoteFormVariants = tv({
  slots: {
    // Right Column: Resend Full Quote Form
    formCol: "w-full",
    formCard:
      "bg-bg-dark-surface border-2 border-border-muted p-6 sm:p-10 shadow-2xl relative",
    formHeader: "mb-8 border-b border-border-muted pb-4",
    formTitle:
      "font-display text-2xl sm:text-3xl font-extrabold uppercase text-text-light tracking-tight",
    formSubtitle:
      "text-xs font-mono text-brand-primary uppercase font-semibold mt-1",

    formGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
    fieldGroup: "flex flex-col space-y-1.5",
    fullWidthGroup: "sm:col-span-2 flex flex-col space-y-1.5",
    label:
      "text-xs font-mono uppercase font-bold text-text-muted tracking-wider",
    input:
      "w-full bg-bg-dark-subtle border border-border-muted px-4 py-3 text-text-light text-sm focus:outline-none focus:border-brand-primary transition-colors font-body placeholder:text-text-muted/40",
    select:
      "w-full bg-bg-dark-subtle border border-border-muted px-4 py-3 text-text-light text-sm focus:outline-none focus:border-brand-primary transition-colors font-body cursor-pointer",
    textarea:
      "w-full bg-bg-dark-subtle border border-border-muted px-4 py-3 text-text-light text-sm focus:outline-none focus:border-brand-primary transition-colors font-body placeholder:text-text-muted/40 min-h-[120px] resize-y",

    successBox:
      "bg-brand-primary/10 border border-brand-primary text-brand-primary p-6 text-sm font-mono flex items-start gap-4",
  },
});
export const QuoteForm = ({
  className,
  title,
  description,
  buttonLabel,
}: {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
}) => {
  const styles = quoteFormVariants();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: siteConfig.services[0]?.title || "General Auto Repair",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form Data Submitted:", formData);
    // try {
    //   const res = await fetch("/api/quote", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (res.ok) {
    //     setIsSubmitted(true);
    //   }
    // } catch (err) {
    //   console.error("Failed to submit comprehensive quote", err);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  return (
    <div className={clsx(styles.formCol(), className)}>
      <div className={styles.formCard()}>
        {/* Top Brand Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-primary" />

        <div className={styles.formHeader()}>
          <h3 className={styles.formTitle()}>
            {title || "Schedule an Appointment"}
          </h3>
          <p className={styles.formSubtitle()}>
            {description || "Fast Estimate Response"}
          </p>
        </div>

        {isSubmitted ? (
          <div className={styles.successBox()}>
            <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold uppercase text-text-light">
                Quote Request Received!
              </h4>
              <p className="text-text-muted mt-1 font-body text-xs">
                Our service manager will review your repair requirements and
                contact you at {formData.phone} shortly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={styles.formGrid()}>
              {/* Name Input */}
              <div className={styles.fieldGroup()}>
                <label htmlFor="quote-name" className={styles.label()}>
                  Full Name *
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className={styles.input()}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Phone Input */}
              <div className={styles.fieldGroup()}>
                <label htmlFor="quote-phone" className={styles.label()}>
                  Phone Number *
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  placeholder="(414) 000-0000"
                  className={styles.input()}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* Email Input */}
              <div className={styles.fieldGroup()}>
                <label htmlFor="quote-email" className={styles.label()}>
                  Email Address
                </label>
                <input
                  id="quote-email"
                  type="email"
                  placeholder="john@example.com"
                  className={styles.input()}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Service Dropdown */}
              <div className={styles.fieldGroup()}>
                <label htmlFor="quote-service" className={styles.label()}>
                  Service Required
                </label>
                <select
                  id="quote-service"
                  className={styles.select()}
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  {siteConfig.services.map((svc) => (
                    <option
                      key={svc.id}
                      value={svc.title}
                      className="bg-bg-dark text-text-light"
                    >
                      {svc.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Details Textarea */}
              <div className={styles.fullWidthGroup()}>
                <label htmlFor="quote-details" className={styles.label()}>
                  Describe Issue or Vehicle Info
                </label>
                <textarea
                  id="quote-details"
                  placeholder="Include year, make, model, or symptoms (e.g. 2018 Ford F-150 brake squeal)..."
                  className={styles.textarea()}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={buttonVariants({
                intent: "primary",
                size: "lg",
                className: "w-full mt-4 font-display text-base tracking-wider",
              })}
            >
              {isSubmitting ? (
                "Sending Quote Request..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {buttonLabel || "Send Request"}
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
