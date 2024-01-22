import ArticleCardList from "@/components/article-card-list";
import Container from "@/components/ui/container";
import { dummyArticles } from "@/constants";

export default function Root() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ArticleCardList items={dummyArticles} />
        </div>
      </div>
    </Container>
  );
}
