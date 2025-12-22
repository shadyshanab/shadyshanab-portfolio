// src/app/blog-details/page.tsx
import BlogDetailsTwo from '@/components/blog-details-2';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

const siteUrl =  'https://shadyshanab.tech';

export const metadata = {
    title: 'Blog Details — Shady Shanab',
    description:
        'In-depth article details covering web and mobile development topics.',
    alternates: { canonical: `${siteUrl}/blog-details` },
    openGraph: {
        title: 'Blog Details — Shady Shanab',
        description:
            'Deep dives into Next.js, React, React Native, and UX.',
        url: `${siteUrl}/blog-details`,
        siteName: 'Shady Shanab — Portfolio',
        type: 'article'
    },
    twitter: {
        card: 'summary',
        title: 'Blog Details — Shady Shanab',
        description: 'Technical deep dives and tutorials.'
    },
    robots: { index: true, follow: true }
};

const index = () => (
    <Wrapper>
        <BlogDetailsTwo />
    </Wrapper>
);

export default index;
