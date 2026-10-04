import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetails = async ({ params }: { params: { articleId: string } }) => {
  const { articleId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${articleId}`,
  );

  const data = await res.json();

  const news = data.data;
  if (!news) {
    notFound();
  }
  console.log(news)

  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-center">{news.title}</h1>
        <Image src={news.imageUrl} alt={news.title} height={500} width={1240}></Image>

        <p className="mt-4">{news.text}</p>

        <ul className=" flex items-center gap-4 mt-5">
          {
            news.tags.map((tag : string) => <li key={tag} className="text-sm text-black/70"> {tag} </li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
