import ArticleCardList from "@/components/article-card-list";
import Container from "@/components/ui/container";
import React from "react";
import { TypographyH1 } from "@/components/typography/typography-h1";

export default async function Root() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <TypographyH1>최근 아티클</TypographyH1>
          <ArticleCardList />
        </div>
      </div>
    </Container>
  );
}
