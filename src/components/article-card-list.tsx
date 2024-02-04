import ArticleCard from "@/components/article-card";
import { getArticles } from "@/actions";

export default async function ArticleCardList() {
  const data = await getArticles();
  const items = data.data;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ArticleCard key={item.articleId?.toString()} data={item} />
        ))}
      </div>
    </div>
  );
}
