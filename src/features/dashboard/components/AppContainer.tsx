import type { HTMLAttributes, ReactNode } from 'react';

type Prop = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function AppContainer(props: Prop) {
  return <div {...props} className="p-4" />;
}
