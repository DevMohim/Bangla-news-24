import { ILatestNews } from "@/types/type";
import Link from "next/link";

const LatestNewsList = ({ latestNews }: { latestNews: ILatestNews }) => {
    return (
    <Link href={`article/${latestNews.id}`}>
      <section className="space-y-1.5 border-t border-t-black/10 px-2 py-3">
        <p className="text-rose-800 font-semibold">
          <small>{latestNews.category}</small>
        </p>
        <h2 className="font-normal text-lg hover:text-red-700 cursor-pointer transition duration-150">
          {latestNews.title}
        </h2>
      </section>
    </Link>
  );
};

export default LatestNewsList;
