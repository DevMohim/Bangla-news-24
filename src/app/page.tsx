import LatestNewsList from "@/components/Homepage/LatestNewsList";
import MostRead from "@/components/Homepage/MostRead";
import News from "@/components/Homepage/News";
import SelectedNews from "@/components/Homepage/SelectedNews";
import NewsCard from "@/components/shared/NewsCard";
import { AllNews, ILatestNews, ISelectedNews } from "@/types/type";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const allNews = data.data
  const filtredNews = allNews.filter((news : AllNews) => news.curationType === 'vivo-stream')
  const latestNews = allNews[0];
  const latestNewsArticle = latestNews.articles[0];
  const remainingNews = latestNews.articles.slice(1, 5);
  const selectedNews = allNews[1]
  return (
    <main>
      <div className="grid grid-cols-3 gap-4">
        <section className="col-span-2 space-y-10">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <NewsCard news={latestNewsArticle} />
            </div>
            <div className="rounded-lg border border-black/10">
              {remainingNews.map((news: ILatestNews) => (
                <LatestNewsList key={news.id} latestNews={news} />
              ))}
            </div>
          </div>

          <section>
            <h2 className="text-lg font-semibold mb-2">{selectedNews.title}</h2>
            <div className="h-0.5 w-full bg-red-800"></div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {selectedNews.articles.map((news: ISelectedNews, ind: number) => (
                <SelectedNews key={ind} news={news} />
              ))}
            </div>
          </section>

          <section >
            {filtredNews.map((news: AllNews, ind: number) => (
              <News key={ind} news={news} />
            ))}
          </section>
        </section>

        <section>
          <MostRead />
        </section>
      </div>
    </main>
  );
}
