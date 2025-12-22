// src/app/portfolio-details/[id]/page.tsx
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import { allProjects } from '@/data/portfolio-data';
import PortfolioDetailsThree from '@/components/portfolio-details-3';

const siteUrl =  'https://shadyshanab.tech';

export async function generateStaticParams() {
    return Object.keys(allProjects).map((id) => ({ id }));
}

// Dynamic metadata per project for rich SEO and social previews
export async function generateMetadata({ params }: { params: { id: string } }) {
    const project = allProjects[params.id as keyof typeof allProjects];

    if (!project) {
        const notFoundUrl = `${siteUrl}/portfolio-details/${params.id}`;
        return {
            title: 'Project Not Found — Shady Shanab',
            description: 'The requested project could not be found.',
            alternates: { canonical: notFoundUrl },
            robots: { index: false, follow: false }
        };
    }

    const title = `${project.title} — ${project.technology} | Shady Shanab`;
    const description = project.description;
    const url = `${siteUrl}/portfolio-details/${params.id}`;
    const image =
        Array.isArray(project.images) && project.images.length > 0
            ? project.images[0]
            : `/assets/img/hero/profile-picture.png`;

    return {
        title,
        description,
        keywords: [
            'Shady Shanab',
            'portfolio',
            project.title,
            project.technology,
            ...project.services
        ],
        authors: [{ name: 'Shady Shanab', url: siteUrl }],
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            siteName: 'Shady Shanab — Portfolio',
            images: [{ url: image, width: 1200, height: 630, alt: project.title }],
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description
        },
        robots: { index: true, follow: true }
    };
}

const PortfolioDetailsPage = ({ params }: { params: { id: string } }) => {
    const projectData = allProjects[params.id as keyof typeof allProjects];

    if (!projectData) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <PortfolioDetailsThree project={projectData} />
                    </main>
                </div>
            </div>
        </>
    );
};

export default PortfolioDetailsPage;
