import { ReactNode } from 'react';

export type ListItem = {
   title: ReactNode;
   svg?: ReactNode;
   svgHoverFill?: string;
   href?: string;
};
