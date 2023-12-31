import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import * as types from "@/types";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface ArticlePreviewCardProps {
  data: types.ArticlePreview;
}

export default function ArticleCard({ data }: ArticlePreviewCardProps) {
  return (
    <Link href="/">
      <Card className="rounded-lg transition-all duration-300 hover:scale-105 mb-4">
        <CardHeader>
          <div className="relative rounded-lg" style={{ paddingTop: "56.25%" }}>
            <Image
              src={data.thumbnailUrl}
              alt=""
              layout="fill"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-2">
          <Badge>{data.topic}</Badge>
          <CardTitle className="text-lg">{data.title}</CardTitle>
          <CardDescription>{data.excerpt}</CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/115940366?s=400&u=6947e85139ccbca2951c9e5c50116f26dfb8272e&v=4" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex flex-row gap-1 items-baseline">
                <p className="text-sm text-primary/80">{data.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  백엔드 개발자
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {data.createdAt.getFullYear() +
                  "-" +
                  (data.createdAt.getMonth() + 1).toString().padStart(2, "0") +
                  "-" +
                  data.createdAt.getDate().toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </CardFooter>
        <Separator />
      </Card>
    </Link>
  );
}
