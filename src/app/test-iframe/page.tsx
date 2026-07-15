// src/app/page.tsx
import Wrapper from '@/layouts/Wrapper';
import React from 'react';
import '@/assets/scss/main.scss';
import TestIframe from "@/components/homes/home/TestIframe";


const MainHome = () => {
    return (
        <Wrapper>
           <TestIframe/>
        </Wrapper>
    );
};

export default MainHome;
