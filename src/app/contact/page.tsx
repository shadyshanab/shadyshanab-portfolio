// src/app/contact/page.tsx
import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

const siteUrl = process.env.SITE_URL || 'https://shadyshanab.tech';

export const metadata = {
    title: 'Contact — Shady Shanab',
    description:
        'Get in touch for web and mobile app development, UI/UX and performance optimization.',
    alternates: { canonical: `${siteUrl}/contact` },
    openGraph: {
        title: 'Contact — Shady Shanab',
        description:
            'Hire a Next.js, React, React Native developer and UX designer.',
        url: `${siteUrl}/contact`,
        siteName: 'Shady Shanab — Portfolio',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'Contact — Shady Shanab',
        description: 'Let’s discuss your project.'
    },
    robots: { index: true, follow: true }
};

const index = () => (
    <Wrapper>
        <Contact />
    </Wrapper>
);

export default index;
