import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Write() {
  return (
    <Container>
      <main className="px-4 flex flex-col gap-4">
        <Input placeholder="Title"></Input>
        <div className="flex flex-row">
          <Textarea
            className="xl:max-w-xl"
            placeholder="Tell me about your story"
          ></Textarea>
          <div className="hidden xl:flex xl:max-w-xl">Preview</div>
        </div>
      </main>
    </Container>
  );
}
