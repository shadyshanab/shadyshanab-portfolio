// src/components/homes/home/PortfolioAreaHomeOne.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import UpArrowIconPortfolio from '@/svg/home/PortfolioIcons/UpArrowIconPortfolio';
import RitghtArrowIconPortfolio from '@/svg/home/PortfolioIcons/RitghtArrowIconPortfolio';
import next_bg from "@/assets/img/portfolio/next-bg.jpg";
import react_bg from "@/assets/img/portfolio/reactjs-bg.jpg";
import wordpress_bg from "@/assets/img/portfolio/wordpress-bg.webp";
import reactnative_bg from "@/assets/img/portfolio/react-native-bg.png";
import iphoneMockup from "@/assets/img/portfolio/iphone-mockup.svg";

import {
    cityStoresList, digitalSalesList, hrList, inventoryList, jewelryList,
    kemetList, lyceeList, meetntrainDashboardList, meetntrainList, newsList,
    pythonXList, rehailiList, standardErpList,
    veilyaList, venuesDashboardList, venuesList
} from "@/image-cloudinary-urls/projectsUrlsList";

const portfolio_content = {
    subtitle: 'Project',
    title: 'Latest projects',
    portfolio_data: {
        "Next.js": {
            id: 1,
            bg: next_bg,
            projects: [
                {
                    img: meetntrainList[0],
                    title: "MeetnTrain",
                    tag: "website",
                    lighbx: 8,
                    row: 1,
                },
                {
                    img: digitalSalesList[0],
                    title: "Digital Sales",
                    tag: "website",
                    lighbx: 15,
                    row: 1,
                },
                {
                    img: inventoryList[0],
                    title: "Inventory Management System",
                    tag: "website",
                    lighbx: 9,
                    row: 1,
                }
            ]
        },
        "React": {
            id: 2,
            bg: react_bg,
            projects: [
                {
                    img: lyceeList[0],
                    title: "Lycee Balzak ERP",
                    tag: "website",
                    lighbx: 1,
                    row: 1,
                },
                {
                    img: standardErpList[0],
                    title: "Standard ERP",
                    tag: "website",
                    lighbx: 2,
                    row: 1,
                },
                {
                    img: hrList[0],
                    title: "HR",
                    tag: "website",
                    lighbx: 3,
                    row: 1,
                },
                {
                    img: jewelryList[0],
                    title: "Jewelry",
                    tag: "website",
                    lighbx: 4,
                    row: 1,
                },
                {
                    img: venuesList[0],
                    title: "Venues",
                    tag: "website",
                    lighbx: 12,
                    row: 1,
                },
                {
                    img: meetntrainDashboardList[2],
                    title: "MeetnTrain Dashboard",
                    tag: "website",
                    lighbx: 14,
                    row: 1,
                },
                {
                    img: venuesDashboardList[1],
                    title: "Venues Dashboard",
                    tag: "website",
                    lighbx: 13,
                    row: 1,
                },
                {
                    img: pythonXList[0],
                    title: "PythonX",
                    tag: "website",
                    lighbx: 16,
                    row: 1,
                },
            ]
        },
        "React Native": {
            id: 3,
            bg: reactnative_bg,
            projects: [
                {
                    img: kemetList[0],
                    title: "Kemet",
                    tag: "mobile app",
                    lighbx: 10,
                    row: 2,
                },
                {
                    img: newsList[0],
                    title: "News App",
                    tag: "mobile app",
                    lighbx: 11,
                    row: 2,
                },
                {
                    img: cityStoresList[0],
                    title: "City Stores",
                    tag: "mobile app",
                    lighbx: 5,
                    row: 2,
                },
            ]
        },
        "Wordpress": {
            id: 4,
            bg: wordpress_bg,
            projects: [
                {
                    img: rehailiList[0],
                    title: "Alrehaili",
                    tag: "website",
                    lighbx: 6,
                    row: 2,
                },
                {
                    img: veilyaList[0],
                    title: "Veilya",
                    tag: "website",
                    lighbx: 7,
                    row: 2,
                },
            ]
        },
    }
};
const { subtitle, title, portfolio_data } = portfolio_content;

interface PortfolioItem {
    img: string;
    title: string;
    tag: string;
    lighbx: number;
    row: number;
}

const PortfolioAreaHomeOne = () => {
    return (
        <>
            <section className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
                <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center tp-portfolio-bg-text-animation">
                    <p>{title}</p>
                    <p>{title}</p>
                </div>
                <div className="container">
                    <div className="row">
                        {Object.entries(portfolio_data).map(([technology, data], techIndex) => {
                            const projects: PortfolioItem[] = (data as any).projects;
                            const bg = (data as any).bg;
                            const isReactNative = data.id === 3;
                            return (
                                <React.Fragment key={techIndex}>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-portfolio-wrapper pr-30 pt-55">
                                            <div className="tp-section-title-wrapper mb-60">
                                                <div className="tp-section-title-inner tp_title_anim p-relative">
                                                    <span className="tp-section-subtitle tp-portfolio-subtitle">{subtitle}</span>
                                                    <h3 className="tp-section-title tp_title_anim">{title}</h3>
                                                </div>
                                            </div>
                                            <div className="tp-portfolio-item-wrapper">
                                                <div className="tp-portfolio-item mb-70">
                                                    <Link href="/portfolio-details">
                                                        <div className="tp-portfolio-thumb img-1 w-img fix ">
                                                            <div className="tp-portfolio-thumb-img include-bg d-none"
                                                                 style={{ backgroundImage: 'url(/assets/img/portfolio/portfolio-2.jpg)' }}></div>
                                                            <div className="tp-portfolio-thumb-img ">
                                                                <Image data-speed="0.85" style={{ objectFit: 'cover', height: "auto" }} src={bg} alt={`${technology} background`} width={600} height={400} />
                                                            </div>
                                                        </div>
                                                        <div className="tp-portfolio-content">
                                                            <h3 className="tp-portfolio-title">{technology}</h3>
                                                            <div className="tp-portfolio-meta d-flex align-items-center">
                                                                <span className="tp-portfolio-meta-count">{projects.length < 10 ? `0${projects.length}` : projects.length}</span>
                                                                <span className="tp-portfolio-meta-arrow">
                                  <RitghtArrowIconPortfolio />
                                </span>
                                                                <div className="tp-portfolio-meta-hover">
                                                                    <span className="tp-portfolio-meta-link">View Project</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2 d-none d-lg-block">
                                                <Link href="/portfolio-details"
                                                      className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                          <span className="tp-btn-circle-text-2">
                            Explore <br /> All Project
                            <span className="tp-btn-circle-arrow-2">
                              <UpArrowIconPortfolio />
                            </span>
                          </span>
                                                    <i className="tp-btn-circle-dot"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-portfolio-item-wrapper pl-50">
                                            <div className="row mb-100" key={techIndex}>
                                                {projects.map((item, i) => (
                                                    <div key={i} className="tp-portfolio-item mb-70">
                                                        <Link href={`/portfolio-details/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                                target="_blank"
                                                        >
                                                        <div className="tp-portfolio-thumb img-2 w-img fix">
                                                                { isReactNative ?
                                                                    <div className="mask-mob-web-feature">
                                                                        <Image src={iphoneMockup} alt="" />
                                                                        <div
                                                                            className="mask-mob-web-feature-img"
                                                                        >
                                                                            <Image data-speed="0.85" style={{ height: "auto" }} src={item.img} alt={item.title} width={600} height={400} />

                                                                        </div>
                                                                    </div> :
                                                                <div className="tp-portfolio-thumb-img">
                                                                    <Image data-speed="0.85" style={{ height: "auto" }} src={item.img} alt={item.title} width={600} height={400} />
                                                                </div>
                                                                }
                                                            </div>
                                                            <div className="tp-portfolio-content">
                                                                <h3 className="tp-portfolio-title">{item.title}</h3>
                                                                <div className="tp-portfolio-meta d-flex align-items-center">
                                                                    <span className="tp-portfolio-meta-count">{ i < 9 ? `0${i + 1}` : i + 1 }</span>
                                                                    <span className="tp-portfolio-meta-arrow">
                                    <RitghtArrowIconPortfolio />
                                  </span>
                                                                    <div className="tp-portfolio-meta-hover">
                                                                        <span className="tp-portfolio-meta-link">View Project</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioAreaHomeOne;
