import { ProjectType } from '@/types/project.type';
import { VariantProps, cva } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';

const badge = cva('', {
    variants: {
        type: {
            'Personal Project': 'bg-primary text-primary-foreground',
            Freelance: 'bg-secondary text-secondary-foreground',
            Internship: 'bg-green-500 text-white',
            Competition: 'bg-yellow-500 text-white',
            'College Project': 'bg-black text-white',
            Other: 'bg-gray-500 text-gray-100',
        },
    },
    defaultVariants: {
        type: 'Personal Project',
    },
});

export interface ProjectTypeBadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badge> {
    type: ProjectType;
    className?: string;
}

const ProjectTypeBadge = ({
    type,
    className,
    ...props
}: ProjectTypeBadgeProps) => {
    return (
        <Badge
            className={badge({
                type,
                className,
            })}
            size="md"
            {...props}
        >
            {type}
        </Badge>
    );
};

export default ProjectTypeBadge;
