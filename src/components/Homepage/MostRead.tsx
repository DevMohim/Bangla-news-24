import { IMostRead } from '@/types/type';
import React from 'react';
import MostReadDataCard from './MostReadDataCard';

const MostRead = async() => {
   const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
   const data = await res.json()
   const allMostReadData : IMostRead[] = data.data
   return (
      <section className='border border-black/10 rounded-xl p-4'>
         <h1 className='font-semibold'>{allMostReadData[0].category}</h1>

         <div className='flex flex-col gap-4'>
            {
               allMostReadData.map((news : IMostRead) => <MostReadDataCard  key={news.id} news={news}/>  )
            }
         </div>
         
      </section>
   );
};

export default MostRead;