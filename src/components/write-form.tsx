"use client";
import { useState } from "react";
import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MarkdonwView from "@/components/markdown-view";
import FormButton from "@/components/form-button";

import * as actions from "@/actions";

export default function WriteForm() {
  const [markdown, setMarkdown] = useState("");

  const [formState, action] = useFormState(actions.createArticle, {
    errors: {},
  });

  return (
    <form action={action}>
      <div className="px-4 flex flex-col gap-4">
        <Input
          name="title"
          placeholder="Title"
          className="xl:max-w-xl bg-slate-100 dark:bg-slate-800"
        />
        <div className="flex flex-row gap-4 h-[600px]">
          <Textarea
            name="content"
            className="xl:max-w-xl bg-slate-100 dark:bg-slate-800"
            placeholder="Tell me about your story"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
          <div className="hidden xl:block xl:max-w-xl overflow-hidden overflow-y-auto max-h-[100%]">
            <MarkdonwView>{markdown}</MarkdonwView>
          </div>
        </div>
        <Input
          name="excerpt"
          placeholder="Excerpt"
          className="xl:max-w-xl bg-slate-100 dark:bg-slate-800"
        />
        <FormButton>Publish</FormButton>
      </div>
    </form>
  );
}
