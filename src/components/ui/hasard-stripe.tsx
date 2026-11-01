export function HazardStripe({ className = "h-3" }: { className?: string }) {
  return (
    <div className={`w-full hazard-stripe ${className}`} aria-hidden="true" />
  );
}
