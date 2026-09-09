import { Button } from '@/shared/components/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/shared/components/drawer';
import UserExperience from './UserExperience';
import { Bell, X, Mail } from 'lucide-react';
import CourseCard from './Cards/CourseCard';
type UserOverviewDrawerProp = {
  isOpen?: boolean;
  onToggle?: (state: boolean) => void;
};

export default function UserOverviewDrawer({ isOpen, onToggle }: UserOverviewDrawerProp) {
  return (
    <Drawer
      open={isOpen}
      defaultOpen={false}
      onOpenChange={onToggle}
      direction="right"
      dismissible={false}
    >
      <DrawerContent>
        <div className="overflow-auto">
          <DrawerHeader className="flex items-center">
            <DrawerClose asChild className="ml-auto">
              <Button
                variant="soft"
                size="icon-xs"
                rounded="full"
                className="cursor-pointer"
                aria-label="Fechar"
              >
                <X />
              </Button>
            </DrawerClose>

            <UserExperience size="lg" />

            <div className="text-center my-2">
              <DrawerTitle className="text-base font-medium">Bom dia, Rafael</DrawerTitle>
              <DrawerDescription className="text-sm">
                Continue sua jornada e alcance sua meta.
              </DrawerDescription>
            </div>

            <div className="flex gap-6">
              <Button rounded={'full'} variant={'outline'} className="size-11 p-0 border-gray-300">
                <Bell className="size-5" />
              </Button>
              <Button rounded={'full'} variant={'outline'} className="size-11 p-0 border-gray-300">
                <Mail className="size-5" />
              </Button>
            </div>
          </DrawerHeader>

          <div className="px-4 ">
            <CourseCard
              id="frontend-course"
              title="Beginner’s Guide To Becoming A Professional Frontend Developer"
              category="Frontend"
              level="beginner"
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              studentsCount={500}
              modulesCount={5}
              duration="1h 30m"
              instructor={{
                name: 'Prashant Kumar Singh',
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
              }}
              onClick={() => {
                console.log('Abrir curso');
              }}
              onFavoriteToggle={() => {
                console.log('Favoritar');
              }}
            />
          </div>
        </div>

        <DrawerFooter>
          <Button>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
