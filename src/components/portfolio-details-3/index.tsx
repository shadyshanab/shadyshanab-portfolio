
import React from 'react';
import PortfolioDetailsThreeArea from './PortfolioDetailsThreeArea';
import FooterOne from "@/layouts/footers/FooterOne";

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
const PortfolioDetailsThree = ({ project }: Props) => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsThreeArea project={project} />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsThree;
