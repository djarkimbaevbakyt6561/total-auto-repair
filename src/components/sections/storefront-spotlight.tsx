import Image from "next/image";
import Link from "next/link";
import { tv } from "tailwind-variants";
import {
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/lib/variants";

const storefrontVariants = tv({
  slots: {
    container:
      "w-full bg-bg-dark py-20 px-4 md:px-8 border-b border-border-muted relative overflow-hidden",
    grid: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",

    // Left Image Frame Column
    imageCol: "lg:col-span-7 relative group",
    imageCard:
      "relative bg-bg-dark-surface border-2 border-border-muted p-2 shadow-2xl overflow-hidden",
    imageAspect:
      "relative aspect-[16/10] w-full bg-bg-dark-subtle overflow-hidden",
    locationOverlay:
      "absolute bottom-4 left-4 right-4 bg-bg-dark-surface/90 backdrop-blur-md border border-border-muted p-4 flex items-center justify-between z-10",
    badgeGroup:
      "flex items-center gap-2 text-xs font-mono text-text-light font-semibold",

    // Right Details Column
    contentCol: "lg:col-span-5 flex flex-col justify-center space-y-6",
    subtitle:
      "text-brand-primary text-xs font-mono tracking-widest uppercase font-bold",
    title:
      "font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-light leading-tight",
    bodyText: "text-text-muted text-base font-body leading-relaxed space-y-4",

    // Quick Details Cards
    infoGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
    infoCard:
      "bg-bg-dark-surface border border-border-muted p-4 flex items-start gap-3",
    iconBox:
      "p-2 bg-bg-dark-subtle border border-border-muted text-brand-primary flex-shrink-0",
    infoTitle:
      "text-xs font-mono font-bold text-text-light uppercase tracking-wider",
    infoText: "text-xs font-body text-text-muted mt-1 leading-snug",

    // CTA Row
    ctaRow:
      "flex flex-wrap items-center gap-4 pt-4 border-t border-border-muted",
  },
});

export function StorefrontSpotlight() {
  const styles = storefrontVariants();

  return (
    <section id="about" className={styles.container()}>
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className={styles.grid()}>
        {/* LEFT COLUMN: Storefront Image & Map Pin Banner */}
        <div className={styles.imageCol()}>
          <div className={styles.imageCard()}>
            {/* Top Red Accent Corner Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-primary z-20" />

            <div className={styles.imageAspect()}>
              {/* Storefront Image */}
              <Image
                src="/images/storefront.jpg"
                alt={`${siteConfig.name} Shop Location`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-transparent to-transparent opacity-60" />
            </div>

            {/* Address Overlay Banner at Bottom of Photo */}
            <div className={styles.locationOverlay()}>
              <div className={styles.badgeGroup()}>
                <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="truncate">{siteConfig.contact.address}</span>
              </div>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-text-light transition-colors p-1"
                aria-label="Get directions on Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Shop Details & Values */}
        <div className={styles.contentCol()}>
          <div>
            <span className={styles.subtitle()}>Come see us</span>
            <h2 className={styles.title()}>
              Our Story & Location
            </h2>
          </div>

          <div className={styles.bodyText()}>
            <p>
              We are a group of mechanics who wanted to venture into business
              for ourselves. Our primary philosophy is to offer a cost effective
              alternative to the dealership. We are your neighbors, and would
              love to help you out if you give us the chance.
            </p>
            <p>
              Our goal is to connect with our customers, and offer a level of
              care that has been lost in many other automotive repair shops.
              Conveniently located right in West Allis, Wi; minutes away from
              downtown and the freeway, we will work hard to take care of all
              your auto repair needs.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className={styles.infoGrid()}>
            {/* Address Card */}
            <div className={styles.infoCard()}>
              <div className={styles.iconBox()}>
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <h3 className={styles.infoTitle()}>Location</h3>
                <p className={styles.infoText()}>
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className={styles.infoCard()}>
              <div className={styles.iconBox()}>
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className={styles.infoTitle()}>Shop Hours</h3>
                <p className={styles.infoText()}>
                  {siteConfig.contact.hours.weekday}
                </p>
                <p className={styles.infoText()}>
                  {siteConfig.contact.hours.saturday}
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className={styles.ctaRow()}>
            <a
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ intent: "primary", size: "md" })}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </a>

            <Link
              href="#contact"
              className={buttonVariants({ intent: "dark", size: "md" })}
            >
              <ShieldCheck className="w-4 h-4 mr-2 text-brand-primary" />
               Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
