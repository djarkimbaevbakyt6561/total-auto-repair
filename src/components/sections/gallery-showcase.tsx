import Image from "next/image";
import { tv } from "tailwind-variants";
import { Wrench, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

// Slot-based Tailwind Variants for the Gallery Showcase
const galleryVariants = tv({
  slots: {
    container:
      "w-full bg-bg-dark py-20 px-4 md:px-8 border-b border-border-muted relative overflow-hidden",
    headerWrapper:
      "max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4",
    subtitle:
      "text-brand-primary text-xs font-mono tracking-widest uppercase font-bold",
    title:
      "text-4xl md:text-5xl font-extrabold uppercase font-display tracking-tight mt-1 text-text-light",
    description: "text-text-muted max-w-md text-sm font-body",
    grid: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8",
    card: "group relative bg-bg-dark-surface border-2 border-border-muted p-3 overflow-hidden shadow-2xl transition-all duration-300 hover:border-brand-primary",
    imageAspect:
      "relative aspect-[16/10] w-full bg-bg-dark-subtle overflow-hidden",
    image:
      "object-cover group-hover:scale-105 transition-transform duration-500 ease-out",
    overlay:
      "absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity",
    contentBox:
      "absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between z-10",
    badge:
      "inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary text-text-light text-xs font-mono uppercase tracking-widest font-bold mb-2",
    itemTitle:
      "font-display text-2xl font-extrabold uppercase text-text-light tracking-wide group-hover:text-brand-primary transition-colors",
    iconButton:
      "p-3 bg-bg-dark border border-border-muted text-text-light group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors",
  },
});

export function GalleryShowcase() {
  const styles = galleryVariants();

  return (
    <section id="gallery" className={styles.container()}>
      {/* Background Glow Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className={styles.headerWrapper()}>
        <div>
          <span className={styles.subtitle()}>From The Shop Floor</span>
          <h2 className={styles.title()}>Recent Work & Repairs</h2>
        </div>
        <p className={styles.description()}>
          Take a look inside our service bays. From complex engine diagnostics
          to precision mechanical overhauls, see how we handle every vehicle
          with expert care.
        </p>
      </div>

      {/* 2-Column Split Gallery Grid (Inspired by Reference Image 2)[cite: 2] */}
      <div className={styles.grid()}>
        {siteConfig.gallery.map((item, index) => (
          <div key={index} className={styles.card()}>
            {/* Top Red Accent Corner Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-primary z-20" />

            <div className={styles.imageAspect()}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image()}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlay()} />
            </div>

            <div className={styles.contentBox()}>
              <div>
                <span className={styles.badge()}>
                  <Wrench className="w-3 h-3" />
                  {item.tag}
                </span>
                <h3 className={styles.itemTitle()}>{item.title}</h3>
              </div>

              <div className={styles.iconButton()} aria-hidden="true">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
