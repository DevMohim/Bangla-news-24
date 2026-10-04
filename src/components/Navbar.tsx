import Image from "next/image";
import Logo from "@/assests/logo.webp";
import Link from "next/link";
import { LatestNews, Navlink } from "@/types/type";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import UserInfo from "./UserInfo";

const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const allNavLinks = data.data;
const navLinks: Navlink[] = allNavLinks.filter((link: Navlink) => link.scrapable === true);

  const mRes = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const mData = await mRes.json();
  const latestNews : LatestNews[] = mData.data;

  

  const time = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="">
      {/* top of header */}
      <section className="flex items-center justify-between p-4 max-w-7xl mx-auto relative">
        <div />

        <div className="flex items-center gap-3 ml-44">
          <Image
            src={Logo}
            alt="Bangla News 24 logo"
            height={40}
            width={40}
            className="rounded-md"
          />

          <div className="flex flex-col">
            <h1 className="text-xl font-bold leading-tight text-red-700">
              Bangla News 24
            </h1>
            <p className="text-sm text-gray-600">{time}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <UserInfo />
        </div>
      </section>

      {/* navbar */}
      <nav className="flex items-center justify-center gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 justify-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-red-700 transition-colors duration-300 "
          >
            হোম
          </Link>
          {navLinks.map((link: Navlink, ind: number) => (
            <Link
              key={ind}
              href={`/category/${link.slug}`}
              className="text-gray-700 hover:text-red-700 transition-colors duration-300 "
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* marquee latest news */}
      <section className="sticky top-0 z-50 bg-red-700 text-white my-4">
        <div className="flex max-w-7xl mx-auto">
          <div className="bg-red-800 py-2 px-5 font-bold">সর্বশেষ</div>

          <MarqueeText className="py-2" direction="right" duration={10}>
            {latestNews.map((h) => (
              <Link
                className="hover:underline"
                href={`/article/${h.id}`}
                key={h.id}
              >
                <span className="text-[14px]">{h.title}</span>
                <span className="mx-5">•</span>
              </Link>
            ))}
          </MarqueeText>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
