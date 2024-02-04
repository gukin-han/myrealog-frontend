export interface ArticleCardDto {
  articleId: number;
  title: string;
  slug: string;
  avatarUrl: string;
  displayName: string;
  username: string;
  createdDate: Date; // API에서는 문자열로 오기 때문에, 사용 시 주의가 필요합니다.
  thumbnailUrl: string;
  excerpt: string;
}

export type GetArticlesResponse = {
  status: number;
  message: string;
  data: ArticleCardDto[];
};
