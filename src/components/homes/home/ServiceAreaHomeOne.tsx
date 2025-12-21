'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
  accordion_data: {
    id: number;
    tab_id: string;
    question: string;
    answer: string;
    some_features: string[];
  }[];
}

const service_content: DataType = {
    subtitle: "Services",
    title: <>Solutions <br/> to grow your business</>,
    sm_des: <>The combination of my passion for design, code & <br/> interaction web design world.</>,
    accordion_data: [
        {
            id: 1,
            tab_id: "One",
            question: "Landing Pages & Responsive Design",
            answer: "Design and develop responsive landing pages and websites that adapt to all devices. Focus on user experience, performance optimization, and SEO best practices.",
            some_features: ["Digital Sales", "PythonX", "MeetnTrain Landing Page", "Venues Landing Page", "Portfolio Website"]
        },
        {
            id: 2,
            tab_id: "Two",
            question: "Enterprise Solutions",
            answer: "Develop comprehensive ERP systems with modules for HR, Accounting, Sales, Purchasing, Inventory, Production, and CRM. Specialized in creating tailored solutions for schools, jewelry businesses, and small/medium enterprises.",
            some_features: ["Lycee Balzak ERP", "Standard ERP", "HR System", "Jewelry Management"]
        },
        {
            id: 3,
            tab_id: "Three",
            question: "E-Commerce & Web Apps",
            answer: "Create complete e-commerce solutions including online stores, payment integrations, and inventory management. Also develop social platforms and community-driven websites.",
            some_features: ["Veilya Store", "MeetnTrain Community", "Venues Booking"]
        },
        {
            // icon: dashboard,
            id: 4,
            tab_id: "Four",
            question: "Dashboard Development",
            answer: "Build powerful admin dashboards with data visualization, reporting tools, and user management. Experience in creating intuitive interfaces for complex business operations.",
            some_features: ["MeetnTrain Dashboard", "Venues Dashboard", "Digital Sales Analytics","ERP Dashboards"]
        },
        {
            id: 5,
            tab_id: "Five",
            question: "Mobile Applications",
            answer: "Develop cross-platform mobile apps with React Native. Specialize in creating apps with unique functionalities like VR experiences, local business discovery, and educational content.",
            some_features: ["City Stores", "Kemet VR", "News App"]
        },
        {
           id: 6,
              tab_id: "Six",
                // icon: design,
            question: "CMS & Custom Solutions",
            answer: "Implement and customize CMS platforms like WordPress and WooCommerce. Build custom web solutions tailored to specific business needs, ensuring scalability and maintainability.",
            some_features: ["WordPress Sites", "WooCommerce Stores", "Shopify Stores" ,"Custom CMS Solutions", "Shopify Cli"]
        },
        {
            id: 7,
            tab_id: "Seven",
            // icon: api,
            question: "API Integration",
            answer: "Implement RESTful APIs and integrate third-party services. Experience in building secure authentication systems and connecting frontend with backend services.",
            some_features: ["Payment Gateways", "Google Maps", "Social Media APIs", "Custom REST APIs", "Authentication Systems (JWT, OAuth)", "Auth Integrations (Google, Apple, etc..)"]
        },
    ],
}

const { subtitle, title, sm_des, accordion_data } = service_content;


const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(0);

  const handleItemClick = (index: number) => {
    setActive(index);
  }

  return (
    <>
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="tp-sv">
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">

            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0">

              <div className="col-xl-6 col-lg-7">
                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70" style={{ paddingTop: "100px", }}
                  data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">{title}</h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Frontend</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Landing Pages</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Responsive Design</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>E-Commerce</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Brand strategy</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Enterprise Solutions</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Mobile Apps</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Cms Solutions</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Api Integration</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Testing</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_1} alt="brand-img" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_2} alt="brand-img" />
                      </span>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative" style={{ marginTop: "90px" }}>
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">

                    {accordion_data.map((item, i) => (
                      <div key={i} onClick={() => handleItemClick(i)} className={`accordion-item tp-services-accordion-item ${active === i ? 'active' : ''}`}>
                        <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                          <button
                            className={`accordion-button ${i === 0 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 0 ? 'true' : 'false'}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                              <p><strong>My Example Projects:</strong></p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}

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

export default ServiceAreaHomeOne;
