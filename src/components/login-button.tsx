import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function LoginButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>로그인</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription>소셜 계정으로 로그인</DialogDescription>
        </DialogHeader>
        <div></div>
        <DialogFooter>계정이 없으세요? 이메일로 가입하기</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
