import React from "react";

interface BannerProps {
  children: React.ReactNode;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ children, className }) => {
  return (
    <section className={`text-center py-8 md:py-10 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Banner;
