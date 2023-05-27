import Link from 'next/link';
import React from 'react';
import { Project } from '@/types/project.type';
import { getMainDomain } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

type Props = {
    project: Project;
};

const ProjectLink = ({ project }: Props) => {
    return (
        <>
            <div className="flex items-center gap-2 w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Live on Production</span>
            </div>
            <Link
                href={project.website}
                target="_blank"
                className="flex items-center mt-2 w-max relative group before:content-[''] before:w-0 before:h-0.5 before:bg-primary hover:before:w-full before:absolute before:-bottom-2 before:duration-300"
            >
                <h6 className="text-4xl font-semibold">
                    {getMainDomain(project.website)}
                </h6>
                <ArrowUpRight className="group-hover:animate-bounce" />
            </Link>
        </>
    );
};

export default ProjectLink;
