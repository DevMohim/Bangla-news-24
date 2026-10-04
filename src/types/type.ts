export interface Navlink {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

export interface LatestNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface ILatestNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface ISelectedNews {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface AllNews {
  articles: ISelectedNews[];
  count: number;
  curationId: string;
  curationType: string;
  link: string;
  title: string;
}

export interface IMostRead {
  id: string;
  title: string;
  description: string | null;
  link: string;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string | null;
  source: string;
  rank: number;
}