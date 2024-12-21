import { FC, ReactNode } from 'react';

interface BadgeProps {
   className?: string;
   emphasize?: boolean;
   children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ className, children, emphasize }) => {
   return (
      <span
         className={`${className || ''} ${emphasize ? 'bg-accent/15 text-accent/80 border-accent/80 hover:bg-accent/25' : 'bg-black/15 hover:bg-black/25 text-black-700 border-black'} transition-all text-xs font-medium px-3 py-1 rounded-md border`}
      >
         {children}
      </span>
   );
};

export default Badge;
