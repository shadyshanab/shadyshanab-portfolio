import { Metadata } from 'next';
import React from "react";

// Create a layout.tsx or use generateMetadata
export const metadata = {
    title: 'React Performance Quiz - Section 1',
    description: 'Test your knowledge of React performance optimization concepts',
    robots: 'noindex, nofollow', // Prevents indexing
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
