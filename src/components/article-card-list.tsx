import ArticleCard from "@/components/article-card";
import { getArticles } from "@/actions";
import React from "react";

export default async function ArticleCardList() {
  let renderedArticleCard: React.ReactNode;

  try {
    const data = await getArticles();
    const items = data.data;
    renderedArticleCard = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ArticleCard key={item.articleId?.toString()} data={item} />
        ))}
      </div>
    );
  } catch (Error) {
    renderedArticleCard = <div>No articles published.</div>;
  }

  return <div className="space-y-4">{renderedArticleCard}</div>;
}
