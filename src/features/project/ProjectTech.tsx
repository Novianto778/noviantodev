import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hovercard';
import Image from 'next/image';
import { Project } from '@/types/project.type';

type Props = {
    project: Project;
};

const ProjectTech = ({ project }: Props) => {
    return (
        <div className="flex flex-wrap gap-8 overflow-hidden">
            {project.tech.map((tech, index) => {
                return (
                    <HoverCard key={index} openDelay={300}>
                        <HoverCardTrigger>
                            <Image
                                src={tech?.src!}
                                width={64}
                                height={64}
                                alt="project"
                                className="cursor-pointer"
                            />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-fit">
                            {tech?.name}
                        </HoverCardContent>
                    </HoverCard>
                );
            })}
        </div>
    );
};

export default ProjectTech;
