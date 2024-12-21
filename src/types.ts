import { ReactNode } from 'react';

export type ListItem = {
   title: ReactNode;
   svg?: ReactNode;
   svgHover?: string;
   href?: string;
};

export type PetProject = {
   title: string;
   link: string;
   preview?: string;
   description: ReactNode;
   keyTechnologies: string[];
   technologies: string[];
};
