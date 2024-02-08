import Container from "@/components/ui/container";
import UpdateForm from "@/components/article/update-form";
import * as actions from "@/actions";
export default async function EditPage({
  params,
}: {
  params: { username: string; slug: string };
}) {
  const data = await actions.getArticle(params.username, params.slug);

  return (
    <Container>
      <UpdateForm
        oldTitle={data.data.title}
        oldContent={data.data.content}
        oldExcerpt={data.data.excerpt}
        articleId={data.data.articleId}
      />
    </Container>
  );
}
