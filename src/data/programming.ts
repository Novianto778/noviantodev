import {
    Express,
    Figma,
    Firebase,
    Javascript,
    Mongodb,
    Mysql,
    Nextjs,
    Postgresql,
    Prisma,
    ReactQuery,
    ReactTable,
    Reactjs,
    Sanity,
    Tailwindcss,
    Typescript,
    Zustand,
} from '@/assets/icon';

type Tech = {
    [key: string]: {
        src: string;
    };
};

const TECH: Tech = {
    Typescript,
    Reactjs,
    Express,
    Figma,
    Firebase,
    Javascript,
    Mongodb,
    Mysql,
    ReactQuery,
    Nextjs,
    Postgresql,
    Prisma,
    Sanity,
    Tailwindcss,
    Zustand,
    ReactTable,
};

// get all key from TECH

export default TECH;

// type Tech = keyof typeof TECH;
// make type of TECH to key and value

// const programmingTech = [
//     {
//         id: 1,
//         name: 'Typescript',
//         icon: Typescript,
//     },
//     {
//         id: 2,
//         name: 'Reactjs',
//         icon: Reactjs,
//     },
//     {
//         id: 3,
//         name: 'Express',
//         icon: Express,
//     },
//     {
//         id: 4,
//         name: 'Figma',
//         icon: Figma,
//     },
//     {
//         id: 5,
//         name: 'Firebase',
//         icon: Firebase,
//     },
//     {
//         id: 6,
//         name: 'Javascript',
//         icon: Javascript,
//     },
//     {
//         id: 7,
//         name: 'Mongodb',

//         icon: Mongodb,
//     },
//     {
//         id: 8,

//         name: 'Mysql',
//         icon: Mysql,
//     },
//     {
//         id: 9,
//         name: 'Nextjs',
//         icon: Nextjs,
//     },
//     {
//         id: 10,
//         name: 'Postgresql',
//         icon: Postgresql,
//     },

//     {
//         id: 11,
//         name: 'Prisma',
//         icon: Prisma,
//     },
//     {
//         id: 12,

//         name: 'Sanity',
//         icon: Sanity,
//     },
//     {
//         id: 13,
//         name: 'Tailwindcss',
//         icon: Tailwindcss,
//     },
//     {
//         id: 14,
//         name: 'Zustand',
//         icon: Zustand,
//     },
//     {
//         id: 15,
//         name: 'React Query',
//         icon: ReactQuery,
//     },
//     {
//         id: 16,
//         name: 'React Table',
//         icon: ReactTable,
//     },
// ];

// export default TECH;
