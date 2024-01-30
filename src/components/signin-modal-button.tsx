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
import SignInButton from "@/components/signin-button";
import * as actions from "@/actions";

export default function SignInModalButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>로그인</Button>
      </DialogTrigger>

      <DialogContent className="w">
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form action={actions.signin}>
          <SignInButton />
        </form>
        <DialogFooter className="text-sm text-slate-500 dark:text-slate-400">
          현재 이메일 가입은 지원하지 않습니다
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
