'use client';
import BlogArea from './BlogArea';
import React from 'react';
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";


const Blog = () => {
  return (
    <>
        <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogArea />
          </main>
            <FooterOne />
        </div>
      </div>

    </>
  );
};

export default Blog;
