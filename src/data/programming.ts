import {
    Bootstrap,
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
    Redux,
    Sanity,
    Scss,
    Storybook,
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
    Storybook,
    Bootstrap,
    Scss,
    Redux,
};

export const arrayOfTech = Object.keys(TECH).map((key) => {
    return {
        name: key,
        src: TECH[key].src,
    };
});

export default TECH;
