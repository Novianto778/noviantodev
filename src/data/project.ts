import { arrayOfTech } from './programming';

const findTech = (tech: string[]) => {
    return tech.map((t) => {
        return arrayOfTech.find((item) => item.name === t);
    });
};

const PROJECTS = [
    {
        id: 1,
        name: 'Professional Learning',
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
];

export default PROJECTS;
