import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Button, type ButtonProps } from '@/shared/components/button';

type SocialProvider = 'google' | 'facebook';
type SocialButtonProps = Omit<ButtonProps, 'asChild'> & { provider: SocialProvider; };

const providerConfig = {
  google: { label: 'Entrar com Google', icon: FcGoogle },
  facebook: { label: 'Entrar com Facebook', icon: FaFacebook },
};

export default function SocialButton({
  provider,
  variant = 'outline',
  size = 'lg',
  fullWidth = true,
  children,
  ...props
}: SocialButtonProps) {
  const { label, icon: Icon } = providerConfig[provider];

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      leftIcon={<Icon aria-hidden="true" className={provider === 'facebook' ? 'size-5 text-[#1877F2]' : 'size-5'} />}
      {...props}
    >
      {children ?? label}
    </Button>
  );
}

export type { SocialButtonProps, SocialProvider };
