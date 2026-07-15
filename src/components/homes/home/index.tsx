"use client";
import React, { useEffect, useState } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHome from "./HeroAreaHome";
import BrandAreaHomeOne from "./BrandAreaHomeOne";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import MarqueeAreaHomeOne from "./MarqueeAreaHomeOne";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import PortfolioAreaHomeOne from "./PortfolioAreaHomeOne";
import SkillAreaHomeOne from "./SkillAreaHomeOne";
import AwardAreaHomeOne from "./AwardAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import BlogAreaHomeThree from "@/components/homes/home-3/BlogAreaHomeThree";


// Iframe color variables per theme (hex without the leading #)
const IFRAME_COLORS = {
  light: {  bg: "ffffff", text: "000", accent: "BCE70E"},
  dark: {bg: "354826", text: "fff", accent: "BCE70E"},
} as const;

const HomeOne = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const readTheme = () =>
      setIsDark(
        document.documentElement.getAttribute("tp-theme") === "tp-theme-dark"
      );

    readTheme();

    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["tp-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const { bg, text, accent } = isDark ? IFRAME_COLORS.dark : IFRAME_COLORS.light;
  const iframeSrc = `https://web.test.meetntrain.com/embed/c/182?bg=${bg}&text=${text}&accent=${accent}`;

  return (
    <>
      <HeaderOne />
      <div
        id="smooth-wrapper"
        className="tp-page-wrapper theme-bg"
        style={{ backgroundImage: `url(/assets/img/bg/distort-bg.png)` }}
      >
        <div id="smooth-content">
          <main>
            <HeroAreaHome />
            <BrandAreaHomeOne />
            <iframe
                src={iframeSrc}
                allow="payment *; clipboard-write"
                style={{ width: "100%", height: "640px", border: "0" }}
                loading="lazy"></iframe>

            <ServiceAreaHomeOne />
            <MarqueeAreaHomeOne />
            <AboutAreaHomeOne />
            <PortfolioAreaHomeOne />
            <SkillAreaHomeOne />
            <AwardAreaHomeOne style_2={false} />
            <TestimonialAreaHomeOne />
            <BlogAreaHomeThree/>
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
