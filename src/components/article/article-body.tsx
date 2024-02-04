import MarkdonwView from "@/components/markdown-view";

export default function ArticleBody({ content }: { content?: string }) {
  return (
    <section>
      <MarkdonwView>{content}</MarkdonwView>
    </section>
  );
}
