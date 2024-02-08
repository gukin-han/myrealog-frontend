import Image from "next/image";
import Link from "next/link";
import { ArticleCardDto } from "@/types";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import User from "@/components/user";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  data: ArticleCardDto;
}

export default function ArticleCard({ data }: ArticleCardProps) {
  const uri: string = `\\${data.username}\\${data.slug}`;
  return (
    <Link href={uri}>
      <Card className="rounded-lg transition-all duration-300 hover:scale-105 mb-4 shadow bg-slate-50 dark:bg-slate-950">
        <CardHeader>
          {data.thumbnailUrl == "" ? (
            <div className="dark:bg-slate-700 bg-slate-200 relative rounded-t-lg pt-[56.25%] flex flex-row items-center justify-center"></div>
          ) : (
            <div className="relative rounded-lg pt-[56.25%]">
              <Image
                src={data.thumbnailUrl}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>
          )}
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-2 p-1">
          <Badge>아티클</Badge>
          <CardTitle className="text-lg overflow-ellipsis min-h-8">
            {data.title}
          </CardTitle>
          <CardDescription className="overflow-ellipsis min-h-24">
            {data.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter className={`p-1`}>
          <User
            displayName={data.displayName}
            avatarUrl={data.avatarUrl}
            publishedDate={data.createdDate}
          />
        </CardFooter>
      </Card>
    </Link>
  );
}
