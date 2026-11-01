import React from "react";

export const MainWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`max-w-7xl mx-auto px-4 md:px-8 ${className}`}>{children}</div>;
};
