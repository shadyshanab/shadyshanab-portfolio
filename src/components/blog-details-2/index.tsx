
'use client'
import React from 'react';
import BreadcrumbBlogDetailsTwo from './BreadcrumbBlogDetailsTwo';
import PostboxBlogDetailsTwoArea from './PostboxBlogDetailsTwoArea';
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";




const BlogDetailsTwo = () => {

  return (
    <>
        <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbBlogDetailsTwo />
            <PostboxBlogDetailsTwoArea />
          </main>
            <FooterOne />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsTwo;
