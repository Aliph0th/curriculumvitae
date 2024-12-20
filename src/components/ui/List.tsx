import { FC } from 'react';
import { ListItem } from '../../types';

interface ListProps {
   title: string;
   list: ListItem[];
   bullet?: boolean;
   isLink?: boolean;
}

const List: FC<ListProps> = ({ title, list, bullet = false, isLink = false }) => {
   return (
      <div className="mb-5">
         <h3 className="mb-4 font-medium underline decoration-dashed text-xl">{title}</h3>
         <ul>
            {list.map(item => (
               <li key={item.title?.toString()} className={bullet ? 'list-disc ml-4' : ''}>
                  {isLink ? (
                     <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`transition-all inline-flex items-center ${item.svgHover || ''} hover:text-accent mb-2`}
                     >
                        {item.svg && <>{item.svg}&nbsp;</>}
                        <span className="hover:underline">{item.title}</span>
                     </a>
                  ) : (
                     <>
                        <p className={`inline-flex ${item.svgHover || ''} items-center mb-2`}>
                           {item.svg && <>{item.svg}&nbsp;</>}
                           {item.title}
                        </p>
                     </>
                  )}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default List;
