export type ArticleType = {
  source: { name: string };
  title: string;
  url: string;
  publishedAt: string;
  description: string | null;
  urlToImage: string | null;
  content: string | null;
  author: string | null;
};
