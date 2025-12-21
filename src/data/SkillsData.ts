import {StaticImageData} from "next/image";
import skill_img_1 from "@/assets/img/skill/angular.png";
import skill_img_2 from "@/assets/img/skill/wp.png";
import skill_img_3 from "@/assets/img/skill/react_native.png";
import skill_img_4 from "@/assets/img/skill/html.png";
import skill_img_5 from "@/assets/img/skill/reactjs.png";
import skill_img_6 from "@/assets/img/skill/nextjs.png";

// NEW SKILL ICONS — replace with your real files when you add them
import js_icon from "@/assets/img/skill/js_icon.png";
import ts_icon from "@/assets/img/skill/ts_icon.png";
import css_icon from "@/assets/img/skill/css_icon.png";
import python_icon from "@/assets/img/skill/python_icon.png";
import php_icon from "@/assets/img/skill/php_icon.png";
import redux_icon from "@/assets/img/skill/redux_icon.png";
import rquery_icon from "@/assets/img/skill/rquery_icon.png";
import tailwind_icon from "@/assets/img/skill/tailwind_icon.png";
import mui_icon from "@/assets/img/skill/mui_icon.png";
import antd_icon from "@/assets/img/skill/antd_icon.png";
import git_icon from "@/assets/img/skill/git_icon.png";
import mysql_icon from "@/assets/img/skill/mysql_icon.png";
import aws_icon from "@/assets/img/skill/aws_icon.png";
import stripe_icon from "@/assets/img/skill/stripe_icon.png";
import socket_icon from "@/assets/img/skill/socket_icon.png";
import devops_icon from "@/assets/img/skill/devops_icon.png";
import woo_icon from "@/assets/img/skill/woo_icon.png";
import shopify_icon from "@/assets/img/skill/shopify_icon.png";

import figma_icon from "@/assets/img/skill/figma.png";


interface DataType {
    subtitle: string;
    title: string;
    info: string;
    skill_data: {
        tab_id: string;
        items: {
            img: StaticImageData;
            title: string;
            percent: number;
        }[];
    }[];
}

export const skill_content: DataType = {
    subtitle: "Advantage",
    title: "Skills & tools",
    info: "For those who know what they're looking for..",
    skill_data: [
        {
            tab_id: "development",
            items: [
                // --- Frameworks ---
                { img: skill_img_5, title: "ReactJS", percent: 100 },
                { img: skill_img_6, title: "NextJS", percent: 95 },
                { img: skill_img_3, title: "React Native", percent: 90 },
                { img: skill_img_1, title: "Angular", percent: 85 },

                // --- Languages ---
                { img: js_icon, title: "JavaScript", percent: 98 },
                { img: ts_icon, title: "TypeScript", percent: 90 },
                { img: skill_img_4, title: "HTML", percent: 97 },
                { img: css_icon, title: "CSS", percent: 95 },
                { img: python_icon, title: "Python", percent: 85 },
                { img: php_icon, title: "PHP", percent: 80 },

                // --- State Management ---
                { img: redux_icon, title: "Redux", percent: 95 },
                { img: rquery_icon, title: "React Query", percent: 100 },

                // --- UI Libraries ---
                { img: tailwind_icon, title: "Tailwind CSS", percent: 100 },
                { img: mui_icon, title: "Material UI", percent: 97 },
                { img: antd_icon, title: "Ant Design", percent: 97 },
            ],
        },

        {
            tab_id: "tools",
            items: [
                // --- CMS / Ecommerce ---
                { img: skill_img_2, title: "WordPress", percent: 90 },
                { img: woo_icon, title: "WooCommerce", percent: 90 },
                { img: shopify_icon, title: "Shopify", percent: 90 },

                // --- Tools / Services / Infrastructure ---
                { img: git_icon, title: "Git", percent: 95 },
                { img: aws_icon, title: "AWS", percent: 90 },
                { img: stripe_icon, title: "Stripe", percent: 90 },
                { img: socket_icon, title: "Socket.IO", percent: 85 },
                { img: devops_icon, title: "DevOps", percent: 96 },
                { img: mysql_icon, title: "MySQL", percent: 80 },
                { img: figma_icon, title: "Figma", percent: 95 },
            ],
        }
    ]
};
