import { ANCHORS } from '../../constants';
import styles from './Header.module.css';

const Header = () => {
   return (
      <header className={styles.header}>
         <div className="flex justify-end gap-x-6 max-w-[1100px] mx-auto px-4">
            {Object.values(ANCHORS).map(({ title, id }) => (
               <a
                  key={title}
                  href={`#${id}`}
                  className="text-green text-center hover:underline hover:decoration-dashed hover:text-accent text-sm md:text-base"
               >
                  {title}
               </a>
            ))}
         </div>
      </header>
   );
};

export default Header;
