"use client";
import { tv } from "tailwind-variants";
import { Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { QuoteForm } from "../ui/quote-form";

// Slot-based Tailwind Variants
const footerQuoteVariants = tv({
  slots: {
    container:
      "w-full py-20 px-4 md:px-8 border-b bg-bg-light border-border-muted relative overflow-hidden",
    grid: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10",

    // Left Column: Contact & Business Info
    infoCol: "lg:col-span-5 flex flex-col space-y-8",
    subtitle:
      "text-brand-primary text-xs font-mono tracking-widest uppercase font-bold",
    title:
      "font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-dark leading-tight",
    description: "text-text-muted text-base font-body leading-relaxed",

    contactCardGroup: "space-y-4",
    infoCard:
      "bg-bg-dark-surface border border-border-muted p-4 flex items-start gap-4",
    iconBox:
      "p-2.5 bg-bg-dark-subtle border border-border-muted text-brand-primary flex-shrink-0",
    cardLabel:
      "text-xs font-mono font-bold text-text-light uppercase tracking-wider",
    cardText: "text-sm font-body text-text-muted mt-0.5 leading-snug",
  },
});

export function FooterQuote() {
  const styles = footerQuoteVariants();

  return (
    <section id="contact" className={styles.container()}>
      {/* Radial Glow Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className={styles.grid()}>
        {/* LEFT COLUMN: Direct Phone, Address, Hours (Image 1 Layout)[cite: 1] */}
        <div className={styles.infoCol()}>
          <div>
            <span className={styles.subtitle()}>Get In Touch</span>
            <h2 className={styles.title()}>Questions? Send Us A Message</h2>
          </div>

          <p className={styles.description()}>
            Send the details and we&apos;ll follow up to get you scheduled — or
            just call the shop directly.
          </p>

          <div className={styles.contactCardGroup()}>
            {/* Phone Card */}
            <a
              href={`tel:${siteConfig.contact.phoneUnformatted}`}
              className={`${styles.infoCard()} hover:border-brand-primary transition-colors group`}
            >
              <div className={styles.iconBox()}>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className={styles.cardLabel()}>Direct Call</h3>
                <p className={styles.cardText()}>{siteConfig.contact.phone}</p>
              </div>
            </a>

            {/* Address Card */}
            <a
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.infoCard()} hover:border-brand-primary transition-colors group`}
            >
              <div className={styles.iconBox()}>
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className={styles.cardLabel()}>Address</h3>
                <p className={styles.cardText()}>
                  {siteConfig.contact.address}
                </p>
              </div>
            </a>

            {/* Hours Card */}
            <div className={styles.infoCard()}>
              <div className={styles.iconBox()}>
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className={styles.cardLabel()}>Operating Hours</h3>
                <p className={styles.cardText()}>
                  {siteConfig.contact.hours.weekday}
                </p>
                <p className={styles.cardText()}>
                  {siteConfig.contact.hours.saturday}
                </p>
              </div>
            </div>
          </div>
        </div>
        <QuoteForm className="lg:col-span-7" />
      </div>
    </section>
  );
}
