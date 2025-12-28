
import React from 'react';
import Image from 'next/image';
import award_img from "@/assets/img/about/award-icon.svg";
import HeroImage from '@/assets/img/hero/profile-picture.png';
import Count from '@/components/common/Count';


type DataType = {
  subtitle: string;
  award_title: string;
  award_des: string;
  about_des: React.JSX.Element;
  counter_data: {
    id: number;
    count: number;
    text: string;
  }[];
}


// src/components/homes/home/AboutAreaHomeOne.tsx
const about_content: DataType = {
  subtitle: "About Me",
  award_title: "Frontend Engineer",
  award_des: "Next.js • React • React Native • TypeScript",
  about_des: <>Hello! I'm <span>Shady Shanab</span>, a <span>Frontend Engineer Web & Mobile Developer</span> specializing in <span>Next.js, React, and React Native</span>. I build fast, accessible products—from social platforms and dashboards to ERP systems and e‑commerce—focused on clean UI/UX, performance, and measurable outcomes.</>,
  counter_data: [
    {
      id: 1,
      count: 17,
      text: "Projects Delivered",
    },
    {
      id: 2,
      count: 4,
      text: "Years of Experience",
    },
    {
      id: 3,
      count: 15,
      text: "Happy Clients",
    }
  ],
}


const { subtitle, award_title, award_des, about_des, counter_data } = about_content

const AboutAreaHomeOne = () => {
  return (
    <>
      <section className="tp-about-area fix">
        <div className="container container-large">
          <div className="tp-about-inner pt-145 pb-80" style={{ paddingTop: "145px", paddingBottom: "80px" }}>
            <span className="tp-about-inner-border transition-3"></span>
            <div className="row">
              <div className="col-xl-5 col-lg-5">
                <div className="tp-about-wrapper">
                  <div className="tp-section-title-wrapper p-relative mb-45">
                    <span className="tp-section-subtitle-bg">{subtitle}</span>
                    <span className="tp-section-subtitle tp-section-subtitle-1 tp-about-subtitle">{subtitle}</span>
                  </div>
                  <div className="tp-about-thumb-wrapper p-relative z-index-1">
                    <div className="tp-about-thumb p-relative z-index-1">
                      <div className="tp-about-thumb-bg-shape include-bg"
                           style={{ backgroundImage: 'url(/assets/img/about/shape/about-shape-1.png)' }}>
                      </div>
                      <Image src={HeroImage} alt="image" style={{width: "250px", height: "250px"}}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-about-desc">
                  <div className="tp-about-award d-inline-block">
                    <div className="tp-about-award-icon d-inline-block" style={{ marginRight: "15px" }}>
                      <span>
                        <Image src={award_img} alt="image" />
                      </span>
                    </div>
                    <div className="tp-about-award-content d-inline-block">
                      <h4 className="tp-about-award-title">{award_title}</h4>
                      <p>{award_des}</p>
                    </div>
                  </div>
                  <div className="tp-about-desc-content mb-40">
                    <p>{about_des}</p>
                  </div>
                  <div className="tp-about-fact">
                    <div className="row">
                      {counter_data.map((item, index) => (
                        <div key={index} className="col-md-4 col-sm-6 mb-30">
                          <div className="tp-about-fact-item">
                            <h4 className="d-flex">
                              <span className="purecounter">
                                <Count number={item.count} />
                                </span>+
                              </h4>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeOne;
