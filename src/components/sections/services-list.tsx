import { tv } from "tailwind-variants";
import {
  Wrench,
  Cpu,
  Disc,
  Cog,
  Snowflake,
  CircleDot,
  ArrowRight,
} from "lucide-react";
import { ServiceConfig, siteConfig } from "@/config/site";
import { MainWrapper } from "../layout/wrapper";
import { ReactNode } from "react";

// Map string icon identifiers from siteConfig to Lucide components
const serviceIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Oil: Wrench,
  Engine: Cpu,
  Brake: Disc,
  Gear: Cog,
  Snowflake: Snowflake,
  Tire: CircleDot,
};

// Tailwind Variants with Slots (Strict Theme Compliance)
const servicesGridVariants = tv({
  slots: {
    container:
      "w-full bg-bg-light py-20 px-4 md:px-8 text-text-dark border-b border-border-light",
    headerWrapper: "mb-12 flex flex-col justify-between gap-4",
    subtitle:
      "text-brand-primary text-xs font-mono tracking-widest uppercase font-bold",
    title:
      "text-4xl md:text-5xl font-extrabold uppercase font-display tracking-tight mt-1 text-text-dark",
    description: "text-text-subtle max-w-md text-sm font-body",
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6",
  },
});
const serviceCardVariants = tv({
  slots: {
    card: "group bg-bg-light-surface border border-border-light hover:border-brand-primary p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden",
    cardHeader: "flex items-start justify-between mb-4",
    numberTag: "font-display text-lg font-bold text-brand-primary",
    iconBox:
      "p-3 bg-bg-light border border-border-light text-brand-primary group-hover:bg-brand-primary group-hover:text-text-light transition-colors duration-300",
    cardBody: "space-y-2 mb-6",
    cardTitle:
      "font-display text-xl font-bold uppercase tracking-tight text-text-dark group-hover:text-brand-primary transition-colors",
    cardDesc: "text-text-subtle text-sm font-body line-clamp-3 leading-relaxed",
    cardFooter:
      "pt-4 border-t border-border-light flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-brand-primary",
  },
});

export function ServicesGrid() {
  const styles = servicesGridVariants();

  return (
    <section className={styles.container()}>
      <MainWrapper>
        {/* Section Header */}
        <div className={styles.headerWrapper()}>
          <h2 className={styles.title()} id="services">
            What We Work On
          </h2>
          <p className={styles.description()}>
            State-of-the-art diagnostics and professional mechanical care for
            all makes and models, backed by trusted expertise.
          </p>
        </div>
        {/* Services Gallery Grid (Responsive up to 4-5 blocks per row) */}
        <div className={styles.grid()}>
          {siteConfig.services.map((service, index) => {
            const IconComponent = serviceIcons[service.icon] || Wrench;

            return (
              <ServiceItem
                key={service.id || index}
                service={service}
                icon={<IconComponent className="w-5 h-5" />}
              />
            );
          })}
        </div>
      </MainWrapper>
    </section>
  );
}
function ServiceItem({
  service,
  icon,
}: {
  service: ServiceConfig;
  icon: ReactNode;
}) {
  const styles = serviceCardVariants();
  return (
    <div key={service.id} className={styles.card()}>
      {/* Top Red Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-primary transition-colors" />

      <div>
        <div className={styles.cardHeader()}>
          <span className={styles.numberTag()}>{service.id}</span>
          <div className={styles.iconBox()}>{icon}</div>
        </div>

        <div className={styles.cardBody()}>
          <h3 className={styles.cardTitle()}>{service.title}</h3>
          <p className={styles.cardDesc()}>{service.summary}</p>
        </div>
      </div>

      <div className={styles.cardFooter()}>
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
