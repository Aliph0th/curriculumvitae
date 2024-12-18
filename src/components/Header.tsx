import { ANCHORS } from '../constants';

const Header = () => {
   return (
      <header className="flex justify-end gap-x-6">
         {Object.values(ANCHORS).map(({ title, id }) => (
            <a key={title} href={`#${id}`} className="text-green text-center text-sm md:text-base">
               {title}
            </a>
         ))}
      </header>
   );
};

export default Header;
