export type ProjectType =
    | 'Real Project'
    | 'Personal Project'
    | 'Competition'
    | 'College Project'
    | 'Other';

export type Project = {
    id: number;
    name: string;
    projectType: ProjectType;
    icon: string;
    description: string;
    images: string[];
    github: string;
    website: string;
    documentation: string;
    tech: (
        | {
              name: string;
              src: string;
          }
        | undefined
    )[];
};
