// src/app/blog/page.tsx
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

const siteUrl = process.env.SITE_URL || 'https://shadyshanab.dev';

export const metadata = {
    title: 'Blog — Shady Shanab',
    description:
        'Articles on Next.js, React, React Native, UI/UX, performance, and case studies by Shady Shanab.',
    alternates: { canonical: `${siteUrl}/blog` },
    openGraph: {
        title: 'Blog — Shady Shanab',
        description:
            'Developer articles, tutorials, and project insights by Shady Shanab.',
        url: `${siteUrl}/blog`,
        siteName: 'Shady Shanab — Portfolio',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'Blog — Shady Shanab',
        description:
            'Next.js, React, React Native, UI/UX and performance articles.'
    },
    robots: { index: true, follow: true }
};

const index = () => (
    <Wrapper>
        <Blog />
    </Wrapper>
);

export default index;
