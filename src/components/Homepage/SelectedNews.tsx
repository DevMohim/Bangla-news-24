import { ISelectedNews } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SelectedNews = ({news} : {news: ISelectedNews}) => {
   
   return (
     <Link href={`article/${news.id}`}>
       <div className="card bg-base-100 shadow-sm hover:border hover:border-red-700/50 transition-all duration-100 ">
         <figure>
           <Image
             src={news.imageUrl}
             alt={news.title}
             height={600}
             width={600}
             className=" hover:scale-105 transition-transform duration-300 w-full h-40"
           ></Image>
         </figure>
         <div className="card-body">
           <p className="text-red-700 font-semibold">
             <small>{news.category}</small>
           </p>
           <h2 className="text-[15px] font-medium hover:text-red-700 cursor-pointer transition duration-150">
             {news.title}
           </h2>
           <div className="w-full h-10 overflow-hidden">
             <p className="font-normal text-black/50">{news.description}</p>
           </div>
           <p className="text-black/60"></p>
         </div>
       </div>
     </Link>
   );
};

export default SelectedNews;