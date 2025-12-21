'use client';
import React from 'react';
import { CopyRight } from '@/components/common/SocialLinks';
import BehanceIconFooter from '@/svg/home/FooterIcons/BehanceIconFooter';
import GoogleIconFooter from '@/svg/home/FooterIcons/GoogleIconFooter';
import InstagramIconFooter from '@/svg/home/FooterIcons/InstagramIconFooter';
import Link from 'next/link';
import Linkedin from "@/svg/icons/Linkedin";
import Github from "@/svg/icons/Github";


interface DataType {
  title: string;
  title_2: JSX.Element;
  btn_text_1: string;
  btn_text_2: string;
  footer_data: {
    id: number;
    name: string;
    user_name: string;
    icon: React.JSX.Element;
    link: string;
  }[];
}

const footer_content: DataType = {
  title: "Let's talk about the next big thing",
  title_2: <>Let's talk about <br /> the next big thing</>,
  btn_text_1: 'Write a Message',
  btn_text_2: 'Discuss Project',
  footer_data: [
    {
      id: 1,
      name: "Linkedin",
      user_name: "@shady_elsayed",
      icon: <Linkedin width={'20'} height={'20'}/>,
      link: "https://www.linkedin.com/in/shady-elsayed-software-developer/"
    },
    {
      id: 2,
      name: "Github",
      user_name: "@shadyshanab",
      icon: <Github fill={"#000"}/>,
        link: "https://github.com/shadyshanab",
    },
      {
          id: 3,
          name: "Google",
          user_name: "shadyshanab.apps@gmail.com",
          icon: <GoogleIconFooter />,
            link: "mailto:shadyshanab.apps@gmail.com",
      },
  ]
}

const { btn_text_1, btn_text_2, title_2, footer_data } = footer_content





const FooterOne = ({ style }: any) => {
  const bg_img = style ? "/assets/img/footer/overly-bg-2.png" : "/assets/img/skill/bg-distort.png";





  return (
    <>
      <footer>
        <div className={`tp-footer-bg ${style ? "tp-footer__customize  black-bg-3" : "tp-footer-bg-light theme-bg-2"} p-relative fix z-index-1`}
          style={{ backgroundImage: `url(${bg_img})` }}>
          <div className="tp-footer-circle-1">
            <span></span>
          </div>
          <div className="tp-footer-circle-2">
            <span></span>
          </div>
          <div className="tp-footer-circle-3" data-speed=".7">
            <span></span>
          </div>
          <div className={`tp-footer-area ${style ? "tp-footer-inner__customize" : ""} pb-80 pt-120`}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-footer-content text-center">
                    <h3 className={`tp-footer-title ${style ? "" : "big"} tp_title_anim`}>{title_2}</h3>
                  </div>
                </div>
              </div>
              {style ?
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        <Link className="tp-btn-white-xl w-100" href="/contact">
                          <div>
                            <span>Discuss Project</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        <a className="tp-btn-grey-xl w-100" target="_blank" href="mailto:shadyshanab.apps@gmail.com">
                          <div>
                            <span>Write a Message</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        <a className="tp-btn-green w-100" href="mailto:shadyshanab.apps@gmail.com">
                          <div>
                            <span>{btn_text_1}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        <Link className="tp-btn-white-xl w-100" href="/contact">
                          <div>
                            <span>{btn_text_2}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              }

              <div className="row gx-50">
                {footer_data.map((item, index) => (
                  <div key={index} className="col-xl-4 col-lg-4 col-md-6" style={{ marginBottom: "30px" }}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <div className="tp-footer-social-item d-flex align-items-center justify-content-between">
                        <span className="tp-footer-anim-border"></span>
                        <div className="tp-footer-social-text z-index-1">
                          <span className="child-1">{item.name}</span>
                          <span className="child-2">{item.user_name}</span>
                        </div>
                        <div className="tp-footer-social-icon z-index-1">
                          <span>
                            {item.icon}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
