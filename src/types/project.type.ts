export type ProjectType =
    | 'Freelance'
    | 'Internship'
    | 'Personal Project'
    | 'Competition'
    | 'College Project'
    | 'Other';

export type Project = {
    id: number;
    name: string;
    subtitle: string;
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
