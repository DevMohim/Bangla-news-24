import { ILatestNews } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const NewsCard = async ({news}:{news: ILatestNews}) => {

   const date = new Date(news.firstPublished).toLocaleDateString("bn-BD", {
     day: "numeric",
     month: "long",
     year: "numeric",
   });

  return (
    <Link href={`/article/${news.id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={news.imageUrl}
            alt={news.title}
            height={600}
            width={600}
            className=" hover:scale-105 transition-transform duration-300"
          ></Image>
        </figure>
        <div className="card-body">
          <p className="text-red-700 font-semibold">
            <small>{news.category}</small>
          </p>
          <h2 className="card-title hover:text-red-700 cursor-pointer transition duration-150">
            {news.title}
          </h2>
          <div className="w-full h-10 overflow-hidden">
            <p className="font-normal text-black/50">{news.description}</p>
          </div>
          <p className="text-black/60">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
