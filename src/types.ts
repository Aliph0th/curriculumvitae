import { ReactNode } from 'react';

export type ListItem = {
   title: ReactNode;
   svg?: ReactNode;
   svgHover?: string;
   href?: string;
};
