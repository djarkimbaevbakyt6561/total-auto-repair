import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
  variants: {
    intent: {
      primary:
        "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/20",
      secondary:
        "bg-white text-bg-dark hover:bg-gray-100 border border-gray-200",
      outline:
        "border-2 border-brand-primary text-white hover:bg-brand-primary hover:text-white",
      dark: "bg-bg-dark-surface text-white border border-gray-800 hover:border-brand-primary",
    },
    size: {
      sm: "h-9 px-4 text-xs rounded-none",
      md: "h-12 px-6 text-sm rounded-none",
      lg: "h-14 px-8 text-base rounded-none",
      full: "w-full h-12 text-sm rounded-none",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export const badgeVariants = tv({
  base: "inline-flex items-center px-3 py-1 text-xs font-mono uppercase tracking-widest font-semibold",
  variants: {
    style: {
      solid: "bg-brand-primary text-white",
      outline:
        "border border-brand-primary/40 text-brand-primary bg-brand-primary/5",
      dark: "bg-bg-dark-surface text-gray-300 border border-gray-800",
    },
  },
  defaultVariants: {
    style: "outline",
  },
});
