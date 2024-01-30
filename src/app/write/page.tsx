"use client";

import { useState } from "react"; // useState 훅 추가
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MarkdonwView from "@/components/markdown-view";

export default function WritePage() {
  const [markdown, setMarkdown] = useState("");

  return (
    <Container>
      <main className="px-4 flex flex-col gap-4">
        <Input placeholder="Title"></Input>
        <div className="flex flex-row gap-4 h-[600px]">
          <Textarea
            className="xl:max-w-xl"
            placeholder="Tell me about your story"
            value={markdown} 
            onChange={(e) => setMarkdown(e.target.value)}
          ></Textarea>
          <div className="hidden xl:block xl:max-w-xl overflow-hidden overflow-y-auto max-h-[100%]">
            <MarkdonwView>{markdown}</MarkdonwView>
          </div>
        </div>
      </main>
    </Container>
  );
}
