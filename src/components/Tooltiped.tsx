import { FC, ReactNode, useState } from 'react';

interface TooltipedProps {
   children: ReactNode;
   tooltip: ReactNode;
}

const Tooltiped: FC<TooltipedProps> = ({ children, tooltip }) => {
   const [isVisible, setIsVisible] = useState(false);

   return (
      <div className="relative inline-block">
         <div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="cursor-pointer"
         >
            {children}
         </div>
         {isVisible && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded py-1 px-2">
               {tooltip}
            </div>
         )}
      </div>
   );
};

export default Tooltiped;
