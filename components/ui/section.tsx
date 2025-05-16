import React, { PropsWithChildren } from "react";

type SectionProps = {
  title?: string;
  subtitle?: string;
  variant?: "default" | "cta" | any;
  ctaButton?: string;
  ctaAction?: () => any;
  bg?: boolean;
};
const Section = ({
  title,
  children,
  variant,
  bg,
  subtitle,
}: PropsWithChildren<SectionProps>) => {
  const bgClass = bg
    ? "bg-gray-50 dark:bg-gray-800"
    : "bg-white dark:bg-gray-900";
  return (
    <section className={bgClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
