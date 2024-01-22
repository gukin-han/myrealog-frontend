import Container from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function User() {
  return (
    <Container className="flex flex-row justify-center">
      <Tabs defaultValue="account" className="flex flex-col">
        <TabsList>
          <TabsTrigger value="profile">프로필</TabsTrigger>
          <TabsTrigger value="articles">아티클</TabsTrigger>
          <TabsTrigger value="projects">프로젝트</TabsTrigger>
        </TabsList>
      </Tabs>
    </Container>
  );
}
