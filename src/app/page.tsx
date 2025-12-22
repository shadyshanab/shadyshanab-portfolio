// src/app/page.tsx
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import '@/assets/scss/main.scss';

const siteUrl =  'https://shadyshanab.tech';

export const metadata = {
    title: 'Shady Shanab — Web & App Developer | UX Designer',
    description:
        'Shady Shanab — Professional Web, Mobile, and UX developer. Specializes in Next.js, React and React Native. Portfolio, case studies and contact for hire.',
    keywords: [
        'Shady Shanab',
        'web developer',
        'app developer',
        'UX designer',
        'Next.js',
        'React',
        'React Native',
        'frontend developer',
        'UI/UX',
        'software developer',
        'portfolio',
        'hire web developer'
    ],
    authors: [{ name: 'Shady Shanab', url: siteUrl }],
    openGraph: {
        title: 'Shady Shanab — Web & App Developer | UX Designer',
        description:
            'Shady Shanab — Professional Web, Mobile, and UX developer. Specializes in Next.js, React and React Native. View portfolio and hire for web/app projects.',
        url: siteUrl,
        siteName: 'Shady Shanab — Portfolio',
        images: [
            {
                url: `${siteUrl}/assets/img/hero/profile-picture.png`,
                width: 1200,
                height: 630,
                alt: 'Shady Shanab — Web & App Developer'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Shady Shanab — Web & App Developer',
        description:
            'Portfolio of Shady Shanab — Next.js, React, React Native developer and UX designer.',
        // replace with your twitter handle if available
        site: '@shadyshanab'
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    alternates: {
        canonical: siteUrl
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png'
    },
    themeColor: '#0f172a'
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shady Shanab',
    url: siteUrl,
    sameAs: [
        'https://github.com/shadyshanab'
        // add LinkedIn / Twitter / other profiles here
    ],
    jobTitle: 'Web & Mobile Developer',
    description: metadata.description,
    knowsAbout: [
        'Next.js',
        'React',
        'React Native',
        'UX',
        'UI',
        'Frontend Development',
        'JavaScript',
        'TypeScript'
    ]
};

const MainHome = () => {
    return (
        <Wrapper>
            <HomeOne />
            <script
                type="application/ld+json"
                // JSON-LD as string for SEO crawlers
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </Wrapper>
    );
};

export default MainHome;
