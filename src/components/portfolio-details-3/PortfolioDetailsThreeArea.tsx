'use client'

import React from 'react';
import Image from 'next/image';

interface ProjectData {
    title: string;
    technology: string;
    date: string;
    client: string;
    services: string[];
    description: string;
    images: string[];
    liveLink: string;
}

interface Props {
    project: ProjectData;
}

const PortfolioDetailsThreeArea = ({ project }: Props) => {
    const isReactNative = project.technology === 'React Native';

    return (
        <>
            <div className="tp-port-3-area theme-bg-2">
                <div className="tp-port-3-bg tp-port-3-height d-flex p-relative justify-content-center align-items-center cursor-style"
                     style={{ backgroundImage: 'url(/assets/img/portfolio-details-3/hero-bg.jpg)'}}>

                    {/*overlay*/}
                    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}></div>

                    <div className="tp-port-3-title-box p-relative z-index-1 text-center">
                        <h4 className="tp-port-3-title">{project.title}</h4>
                    </div>
                </div>
                <div className="tp-hero-area pt-140 pb-30">
                    <div className="container container-1350">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4">
                                <div className="tp-port-3-content-left">
                                    <h4 className="tp-port-3-content-title">Project Details</h4>
                                    <div className="tp-port-3-content-info-wrap">
                                        <div className="tp-port-3-content-info d-flex align-content-start">
                                            <span>Date:</span>
                                            <span>{project.date}</span>
                                        </div>
                                        <div className="tp-port-3-content-info d-flex align-content-start">
                                            <span>Client:</span>
                                            <span>{project.client}</span>
                                        </div>
                                        <div className="tp-port-3-content-info d-flex align-content-start">
                                            <span>Technology:</span>
                                            <span>{project.technology}</span>
                                        </div>
                                        <div className="tp-port-3-content-info d-flex align-content-start">
                                            <span>Services:</span>
                                            <span>{project.services.join(', ')}</span>
                                        </div>
                                    </div>
                                    <div className="tp-port-3-content-description mb-40">
                                        <span>Description:</span>
                                        <p>{project.description}</p>
                                    </div>
                                    {project.liveLink !== '#' && (
                                        <div className="tp-port-2-title-box">
                                            <a className="tp-btn-4-1-price sm" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                Visit Link
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8">
                                <div className="tp-port-3-thumb-right cursor-style d-flex flex-column align-items-center">
                                    {
                                        isReactNative ?
                                            project.images.map((img, index) => (
                                                <div key={index} className="tp-port-3-thumb mb-40">
                                                    <Image src={img} alt={`${project.title} screenshot ${index + 1}`} width={800} height={600} style={{ width: '300px', height: '600px' }} />
                                                </div>
                                            )) :
                                        project.images.map((img, index) => (
                                        <div key={index} className="tp-port-3-thumb mb-40">
                                            <Image src={img} alt={`${project.title} screenshot ${index + 1}`} width={800} height={600} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioDetailsThreeArea;
