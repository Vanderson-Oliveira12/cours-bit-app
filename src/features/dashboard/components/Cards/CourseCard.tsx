import { cva, type VariantProps } from 'class-variance-authority';
import { BookOpen, Clock3, Heart, UserRound, Users } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/avatar';
import { Badge } from '@/shared/components/badge';

import { cn } from '@/shared/lib/utils';

type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

const courseCardVariants = cva(
  'w-full overflow-hidden rounded-2xl bg-white p-3 transition-shadow duration-200',
  {
    variants: {
      shadow: {
        true: 'shadow-md',
        false: 'shadow-none',
      },
    },
    defaultVariants: {
      shadow: false,
    },
  },
);

type CourseCardProps = VariantProps<typeof courseCardVariants> & {
  id: string;
  title: string;
  category: string;
  level: CourseLevel;
  image: string;
  studentsCount: number;
  modulesCount: number;
  duration: string;
  instructor: {
    name: string;
    avatar: string;
  };
  isFavorite?: boolean;
  onClick?: () => void;
  onFavoriteToggle?: () => void;
};

const levelLabels: Record<CourseLevel, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export default function CourseCard({
  title,
  category,
  level,
  image,
  studentsCount,
  modulesCount,
  duration,
  instructor,
  isFavorite = false,
  shadow = false,
  onClick,
  onFavoriteToggle,
}: CourseCardProps) {
  function handleFavoriteClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onFavoriteToggle?.();
  }

  return (
    <article
      onClick={onClick}
      className={cn(
        courseCardVariants({ shadow }),
        onClick && 'cursor-pointer',
        onClick && shadow && 'hover:shadow-lg',
      )}
    >
      {/* Media */}
      <div className="relative aspect-[16/7] overflow-hidden rounded-xl bg-gray-100">
        <img src={image} alt={title} className="size-full object-cover" />

        {/* Favorite */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          className={cn(
            'absolute top-3 right-3',
            'flex size-7 cursor-pointer items-center justify-center',
            'rounded-full bg-gray-800/70 text-white backdrop-blur-sm',
            'transition-colors hover:bg-gray-800',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          )}
        >
          <Heart className="size-3.5" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        {/* Level */}
        <Badge
          variant="neutral"
          size="default"
          rounded="default"
          className="absolute right-2 bottom-2"
        >
          {levelLabels[level]}
        </Badge>
      </div>

      {/* Content */}
      <div className="pt-3">
        {/* Category */}
        <Badge variant="soft" size="lg" className="tracking-wide uppercase">
          {category}
        </Badge>

        {/* Title */}
        <h3 className="mt-3 line-clamp-2 text-heading-4 text-gray-900">
          {title}
        </h3>

        {/* Metadata */}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-gray-700">
          <div className="flex items-center gap-1.5">
            <Users className="size-4 text-gray-500" />

            <span>
              {studentsCount} {studentsCount === 1 ? 'Student' : 'Students'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <BookOpen className="size-4 text-gray-500" />

            <span>
              {modulesCount} {modulesCount === 1 ? 'Module' : 'Modules'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock3 className="size-4 text-gray-500" />

            <span>{duration}</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="mt-4 flex items-center gap-2">
          <Avatar size="sm" aria-hidden="true">
            <AvatarImage src={instructor.avatar} alt="" />
            <AvatarFallback>
              <UserRound className="size-4" />
            </AvatarFallback>
          </Avatar>

          <span className="truncate text-label text-gray-800">{instructor.name}</span>
        </div>
      </div>
    </article>
  );
}
