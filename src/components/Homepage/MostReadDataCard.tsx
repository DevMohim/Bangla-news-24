import { IMostRead } from '@/types/type';
import Link from 'next/link';
import React from 'react';

const MostReadDataCard = ({news} : {news:IMostRead}) => {
   return (
     <Link href={`article/${news.id}`}>
       <div className="grid grid-cols-12 gap-0.5 items-start">
         <p className="mr-2 font-sans text-red-700 font-semibold col-span-1">
           {news.rank}
         </p>
         <p className="text-sm col-span-11 hover:text-red-700 cursor-pointer transition duration-150">
           {news.title}
         </p>
       </div>
     </Link>
   );
};

export default MostReadDataCard;