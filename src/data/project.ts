import { Project } from '../types/project.type';
import { arrayOfTech } from './programming';

const findTech = (tech: string[]) => {
    return tech.map((t) => {
        return arrayOfTech.find((item) => item.name === t);
    });
};

const PROJECTS: Project[] = [
    {
        id: 4,
        name: 'Ideabox Multitenant',
        subtitle: 'MSIB Internship - PT. Telkom Indonesia',
        projectType: 'Internship',
        icon: 'https://res.cloudinary.com/dastat880/image/upload/v1703496094/icon-ideabox_1_ywblnm.png',
        description: `Ideabox Multitenant is a Crowdsourcing Idea Platform designed to develop an Innovation Ecosystem and foster an Innovation Culture through the submission and collaboration of innovative ideas. This enhanced version supports multiple tenants or users, providing improved scalability and performance.
        `,
        images: [
            'https://res.cloudinary.com/dastat880/image/upload/v1703495574/homepage_nqj23y.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1703495574/dashboard_hzum7j.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1703495573/idea-management_wiliey.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1703495573/create-idea_werkge.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1703495574/event_pewq1f.png',
        ],
        github: 'private',
        website: 'https://ideaboxapp.com/',
        documentation: '',
        tech: findTech(['Nextjs', 'Bootstrap', 'Redux', 'Scss']),
    },

    {
        id: 1,
        name: 'Professional Learning',
        projectType: 'Internship',
        subtitle: 'Freelance Project - Universitas Atma Jaya Yogyakarta',

        icon: 'https://res.cloudinary.com/dastat880/image/upload/v1684760772/noviantodev/pl/logo_uajy_sosdvc.png',
        description: ` is a website-based application that aims to validate
                            and convert values from professional learning
                            activities carried out by industrial tech students
                            in University of Atma Jaya Yogyakarta. This
                            application is made to facilitate the process of
                            validating and converting values from professional
                            learning activities carried out by students.`,
        images: [
            'https://res.cloudinary.com/dastat880/image/upload/v1684748841/noviantodev/pl/pl1_megkxe.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684748840/noviantodev/pl/pl2_fcbese.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684748840/noviantodev/pl/pl3_u4wx4m.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684748841/noviantodev/pl/pl4_shwqcb.png',
        ],
        github: 'private',
        website: 'https://fti.uajy.ac.id/industri/pl/',
        documentation: '',
        tech: findTech([
            'Reactjs',
            'Javascript',
            'Tailwindcss',
            'ReactQuery',
            'Zustand',
            'ReactTable',
        ]),
    },
    {
        id: 2,
        name: 'Pamdesku',
        subtitle: 'Freelance Project - Universitas Atma Jaya Yogyakarta',
        projectType: 'Freelance',
        icon: 'https://res.cloudinary.com/dastat880/image/upload/v1684934037/noviantodev/pamdesku/Logo_Tirto_Kauripan_2_lujwux.png',
        description: ` Pamdesku is a web-based application that aims to help the people of Gunung Kidul to record and pay water bills and allow
partners to manage bills and payments. This application has four roles namely admin, manajer, petugas, and pelanggan. This application is has three main features
namely bill management, payment management, and report management.`,
        images: [
            'https://res.cloudinary.com/dastat880/image/upload/v1684934246/noviantodev/pamdesku/Tirto_Kauripan_3_knezph.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684934246/noviantodev/pamdesku/Tirto_Kauripan_rr1imw.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684934246/noviantodev/pamdesku/Tirto_Kauripan_1_mqgsgz.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684934246/noviantodev/pamdesku/Tirto_Kauripan_2_ssrryc.png',
        ],
        github: 'private',
        website: 'https://tirtokauripan.com/',
        documentation: '',
        tech: findTech([
            'Reactjs',
            'Javascript',
            'Tailwindcss',
            'ReactQuery',
            'Zustand',
            'ReactTable',
        ]),
    },
    {
        id: 3,
        name: 'CraftConnect',
        subtitle: 'Competition Project - Universitas Atma Jaya Yogyakarta',
        projectType: 'Competition',
        icon: 'https://res.cloudinary.com/dastat880/image/upload/v1684989509/noviantodev/craftconnect/Frame_nlgyeb.png',
        description: `Craftconnect is a handicraft e-commerce platform that aims to be a link between MSMEs and customers. Through Craftconnect, customers can easily find products made by MSMEs and buy them online. As an e-commerce platform for MSME handicrafts, CraftConnect has been designed to provide an easy and enjoyable experience for users.
        CraftConnect has features that can be used by customers such as product filter, product details, product story, and chat with the seller.
        `,
        images: [
            'https://res.cloudinary.com/dastat880/image/upload/v1684989205/noviantodev/craftconnect/Login_kalgt3.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684989206/noviantodev/craftconnect/CraftConnect_xixcrx.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684989206/noviantodev/craftconnect/Katalog_mnqfsu.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684989206/noviantodev/craftconnect/Vintage_chopsticks_zftvup.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684989205/noviantodev/craftconnect/Chat_mj2jyg.png',
            'https://res.cloudinary.com/dastat880/image/upload/v1684989205/noviantodev/craftconnect/shared___Button_-_Primary_Storybook_vz5ju5.png',
        ],
        github: 'https://github.com/Novianto778/craftconnect',
        website: 'https://craftconnect.vercel.app/',
        documentation: '',
        tech: findTech([
            'Nextjs',
            'Typescript',
            'Tailwindcss',
            'Firebase',
            'Zustand',
            'Storybook',
        ]),
    },
];

export default PROJECTS;
