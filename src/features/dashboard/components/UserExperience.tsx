import { Button } from '@/shared/components/button';
import { cn } from '@/shared/lib/utils';

type UserExperienceProps = {
  size?: 'md' | 'lg';
  onToggle?: () => void;
};

export default function UserExperience({ size = 'md', onToggle }: UserExperienceProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="xs"
      onClick={onToggle}
      className={cn('overflow-hidden rounded-full p-0', size == 'md' ? 'size-9' : 'size-25')}
    >
      <img
        className="size-full object-cover"
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop"
        alt=""
      />
    </Button>
  );
}
