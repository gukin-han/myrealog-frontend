"use client";

import { useState } from "react";
import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MarkdownView from "@/components/markdown-view";
import FormButton from "@/components/form-button";

import * as actions from "@/actions";

interface Props {
  oldTitle: string;
  oldContent: string;
  oldExcerpt: string;
  articleId: number;
}
export default function UpdateForm({
  oldTitle,
  oldContent,
  oldExcerpt,
  articleId,
}: Props) {
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);
  const [excerpt, setExcerpt] = useState(oldExcerpt);

  const [formState, action] = useFormState(
    actions.updateArticle.bind(null, title, content, excerpt, articleId),
    {
      errors: {},
    },
  );

  return (
    <form action={action}>
      <div className="px-4 flex flex-col gap-4">
        <Input
          name="title"
          placeholder="Title"
          className="xl:max-w-xl bg-slate-100 dark:bg-slate-800"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex flex-row gap-4 h-[600px]">
          <Textarea
            name="content"
            className="xl:max-w-xl bg-slate-100 dark:bg-slate-800"
            placeholder="Tell me about your story"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="hidden xl:block xl:max-w-xl overflow-hidden overflow-y-auto max-h-[100%]">
            <MarkdownView>{content}</MarkdownView>
          </div>
        </div>
        <Input
          name="excerpt"
          placeholder="Excerpt"
          className="xl:max-w-xl bg-slate-100 dark:bg-slate-800"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <FormButton>수정</FormButton>
      </div>
    </form>
  );
}
