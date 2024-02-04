import { TypographyH1 } from "@/components/typography/typography-h1";

import User from "@/components/user";

export default function ArticleHeader({
  title,
  displayName,
  avatarUrl,
  publishedDate,
}: {
  title: string;
  displayName: string;
  avatarUrl: string;
  publishedDate: string;
}) {
  return (
    <section className="flex flex-col gap-4 mt-6">
      <TypographyH1>{title}</TypographyH1>
      <User
        displayName={displayName}
        avatarUrl={avatarUrl}
        publishedDate={publishedDate}
      />
    </section>
  );
}
