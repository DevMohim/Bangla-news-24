import { AllNews, ISelectedNews } from '@/types/type';
import React from 'react';
import SelectedNews from '@/components/Homepage/SelectedNews'

const News = ({news } : {news: AllNews}) => {
   return (
     <section className="my-6">
       <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
       <div className="h-0.5 w-full bg-red-800"></div>
       <div className="grid grid-cols-3 gap-4 mt-4">
         {news.articles.map((news: ISelectedNews) => (
           <SelectedNews key={news.id} news={news} />
         ))}
       </div>
     </section>
   );
};

export default News;