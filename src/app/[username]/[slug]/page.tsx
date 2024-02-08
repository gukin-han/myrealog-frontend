import Container from "@/components/ui/container";
import ArticleBody from "@/components/article/article-body";
import ArticleHeader from "@/components/article/article-header";
import ArticleDiscussion from "@/components/article/article-discussion";
import { Separator } from "@/components/ui/separator";
import * as actions from "@/actions";

export default async function ArticleDetail({
  params,
}: {
  params: { username: string; slug: string };
}) {
  const data = await actions.getArticle(params.username, params.slug);

  return (
    <Container>
      <div className="md:flex md:flex-row md:justify-center">
        <div className="flex flex-col gap-8 mx-4 sm:mx-6 lg:mx-8 md:max-w-3xl md:w-full ">
          <ArticleHeader
            title={data.data.title}
            displayName={data.data.displayName}
            avatarUrl={data.data.avatarUrl}
            publishedDate={data.data.createdDate}
            articleId={data.data.articleId}
          />
          <Separator />
          <ArticleBody content={data.data.content} />
          <ArticleDiscussion />
        </div>
      </div>
    </Container>
  );
}
