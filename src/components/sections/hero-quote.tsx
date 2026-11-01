"use client";

import Image from "next/image";
import { tv } from "tailwind-variants";
import { Phone, Clock, CheckCircle2, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MainWrapper } from "../layout/wrapper";
import { QuoteForm } from "../ui/quote-form";

// Hero Layout Slot Variants
const heroVariants = tv({
  slots: {
    container:
      "relative w-full bg-bg-dark overflow-hidden pt-0 py-16 lg:py-24 border-b border-border-muted min-h-[600px] flex items-center",
    bgImage: "user-select-none object-cover object-center opacity-40",
    gradientOverlay:
      "absolute inset-0 bg-gradient-to-r from-bg-dark/60 via-bg-dark/35 to-bg-dark/10 z-10 pointer-events-none",
    vignetteOverlay:
      "absolute inset-0 bg-radial-vignette opacity-80 z-10 pointer-events-none",
    grid: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20",
    contentCol: "lg:col-span-6 flex flex-col items-start space-y-6",
    badge:
      "inline-flex items-center gap-2 px-3 py-1 bg-bg-dark-surface/90 backdrop-blur-md border border-brand-primary/40 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest shadow-md",
    headline:
      "font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-text-light leading-[1.05] drop-shadow-md",
    headlineAccent: "text-brand-primary block mt-1",
    description:
      "text-text-muted text-base sm:text-lg max-w-xl font-body leading-relaxed drop-shadow-sm",

    // Quick Stats Ribbon Slots
    statsGrid:
      "grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-border-muted/60",
    statItem: "flex flex-col",
    statValue: "font-display text-2xl font-black text-brand-primary uppercase",
    statLabel: "text-xs font-mono text-text-muted uppercase tracking-wider",

    // NEW: Key Value Pillars List Slots
    pillarsList: "w-full pt-6 space-y-4 border-t border-border-muted/60",
    pillarItem: "flex items-start gap-3 group",
    iconBox:
      "p-2 bg-bg-dark-surface border border-border-muted text-brand-primary flex-shrink-0 mt-0.5  transition-colors",
    pillarTitle:
      "font-display text-base font-bold uppercase text-text-light tracking-wide",
    pillarDesc:
      "text-sm text-text-muted font-body leading-normal mt-0.5 max-w-md",

    formCol: "lg:col-span-6 w-full",
    calloutBox:
      "mt-4 text-xs text-text-muted tracking-widest uppercase text-center font-mono bg-bg-dark-surface/60 border border-border-muted/50 p-2.5 backdrop-blur-sm",
    calloutLink:
      "font-bold text-text-light inline-flex items-center gap-1.5 cursor-pointer hover:text-brand-primary transition-colors ml-1",
  },
});

// Feature pillars data array
const keyPillars = [
  {
    title: "Fast Turnover",
    description:
      "We aim to get your keys back in your hands as fast as possible while maintaining a high level of quality.",
    icon: Clock,
  },
  {
    title: "Hard Working",
    description:
      "We work hard to guarantee your satisfaction and strive to provide a service worth coming back to.",
    icon: CheckCircle2,
  },
  {
    title: "Certified Technicians",
    description:
      "Our technicians are rigorously trained, ASE-certified, and equipped to handle any vehicle issue.",
    icon: Award,
  },
] as const;

export function HeroQuote() {
  const hero = heroVariants();

  return (
    <section className={hero.container()}>
      {/* 1. Background Image Layer */}
      <Image
        src="/background.jpg"
        alt={`${siteConfig.name} Workshop Background`}
        fill
        priority
        className={hero.bgImage()}
        sizes="100vw"
      />

      {/* 2. Gradient Overlays for High Text Contrast */}
      <div className={hero.gradientOverlay()} />
      <div className={hero.vignetteOverlay()} />

      {/* 3. Main Content Layer */}
      <MainWrapper>
        <div className={hero.grid()}>
          {/* LEFT COLUMN: Brand Stencil Headline & Trust Features */}
          <div className={hero.contentCol()}>
            {/* Main Headline */}
            <h1 className={hero.headline()}>{siteConfig.tagline}</h1>

            {/* Description Subtext */}
            <p className={hero.description()}>{siteConfig.description}</p>

            {/* NEW: Value Pillars List below stats */}
            <div className={hero.pillarsList()}>
              {keyPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className={hero.pillarItem()}>
                    <div className={hero.iconBox()}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={hero.pillarTitle()}>{pillar.title}</h4>
                      <p className={hero.pillarDesc()}>{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Quote Form Card */}
          <div className={hero.formCol()}>
            <QuoteForm
              title="Schedule an Appointment"
              description="Fast & Free Response in Minutes"
              buttonLabel="Send Request"
            />

            {/* Phone Callout Sub-Bar */}
            <div className={hero.calloutBox()}>
              <p>
                Prefer to call instead?
                <a
                  href={`tel:${siteConfig.contact.phoneUnformatted}`}
                  className={hero.calloutLink()}
                >
                  <Phone size={14} className="text-brand-primary" />
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
}
