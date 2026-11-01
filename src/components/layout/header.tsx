import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { tv } from "tailwind-variants";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/lib/variants";
import { MainWrapper } from "./wrapper";
import Image from "next/image";

// Navigation items array (DRY Principle)
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
] as const;

// Tailwind Variants for navigation links
const headerVariants = tv({
  slots: {
    base: "sticky top-0 z-50 w-full  bg-bg-dark border-b border-border-muted shadow-xl",
    mainBar: "py-4 flex items-center justify-between",
    navBar: "hidden md:flex items-center space-x-8",
  },
});
const navLinkVariants = tv({
  base: "text-text-muted hover:text-brand-primary transition-colors py-2 text-sm font-medium uppercase tracking-wider",
});
const topNavigationBarVariants = tv({
  slots: {
    base: "hidden lg:block bg-bg-dark-subtle border-b border-border-muted text-text-muted text-xs py-2 px-4 md:px-8",
    content: "max-w-7xl mx-auto flex justify-between items-center font-mono",
    contactGroup: "flex items-center space-x-6",
    contactLink:
      "flex items-center gap-1.5 hover:text-brand-primary transition-colors",
    icon: "w-3.5 h-3.5 text-brand-primary",
    phoneText: "font-bold text-text-light",
    hoursGroup: "flex items-center gap-4 text-text-muted",
    hoursEntry: "flex items-center gap-1.5",
    separator: "text-border-muted",
  },
});

export function Header() {
  const headerClasses = headerVariants();
  return (
    <header className={headerClasses.base()}>
      {/* 1. TOP INFORMATION BAR */}
      {/* 2. MAIN NAVIGATION BAR */}
      <MainWrapper>
        <div className={headerClasses.mainBar()}>
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Logo" width={148} height={150} />
          </Link>

          {/* Navigation Links (Mapped from Array) */}
          <nav className={headerClasses.navBar()}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkVariants()}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call to Action Buttons */}
          <Link
            href="#quote"
            className={buttonVariants({ intent: "primary", size: "md" })}
          >
            Schedule an Appointment
          </Link>
        </div>
      </MainWrapper>
    </header>
  );
}
export function TopNavigationBar() {
  const classes = topNavigationBarVariants();

  return (
    <div className={classes.base()}>
      <div className={classes.content()}>
        {/* Address & Direct Phone */}
        <div className={classes.contactGroup()}>
          <a
            href={siteConfig.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.contactLink()}
          >
            <MapPin className={classes.icon()} />
            <span>{siteConfig.contact.address}</span>
          </a>
          <a
            href={`tel:${siteConfig.contact.phoneUnformatted}`}
            className={classes.contactLink()}
          >
            <Phone className={classes.icon()} />
            <span className={classes.phoneText()}>
              {siteConfig.contact.phone}
            </span>
          </a>
        </div>

        {/* Operating Hours */}
        <div className={classes.hoursGroup()}>
          <div className={classes.hoursEntry()}>
            <Clock className={classes.icon()} />
            <span>{siteConfig.contact.hours.weekday}</span>
          </div>
          <span className={classes.separator()}>|</span>
          <span>{siteConfig.contact.hours.saturday}</span>
        </div>
      </div>
    </div>
  );
}
