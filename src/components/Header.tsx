import { ANCHORS } from '../constants';

const Header = () => {
   return (
      <header className="sticky top-0 py-5 bg-white z-10 shadow-md">
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
