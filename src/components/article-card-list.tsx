import ArticleCard from "@/components/article-card";
import * as types from "@/types";

interface ArticlePreviewListProps {
  items: types.ArticlePreview[];
}

const ProductList: React.FC<ArticlePreviewListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ArticleCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
