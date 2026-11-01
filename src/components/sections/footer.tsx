import Link from "next/link";
import { tv } from "tailwind-variants";
import { ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const footerVariants = tv({
  slots: {
    container:
      "w-full bg-bg-dark border-t border-border-muted py-12 px-4 md:px-8 text-text-muted text-xs font-mono",
    inner:
      "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",
    logoGroup: "flex items-center gap-3",
    copyright: "text-center md:text-left",
    nav: "flex flex-wrap items-center justify-center gap-6 font-semibold uppercase tracking-wider",
    link: "hover:text-brand-primary transition-colors",
  },
});

export function Footer() {
  const styles = footerVariants();

  return (
    <footer className={styles.container()}>
      <div className={styles.inner()}>
        {/* Brand Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className={styles.logoGroup()}>
            <span className="font-display text-lg font-bold text-text-light uppercase tracking-tight">
              {siteConfig.name}
            </span>
          </div>

          <span className={styles.copyright()}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
        </div>

        {/* Quick Links */}
        <nav className={styles.nav()}>
          <Link href="#services" className={styles.link()}>
            Services
          </Link>
          <Link href="#about" className={styles.link()}>
            About us
          </Link>
          <Link href="#reviews" className={styles.link()}>
            Reviews
          </Link>
          <Link href="#contact" className={styles.link()}>
            Schedule Appointment
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          Visit our Facebook
          <Link
            href={siteConfig.contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link()}
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
