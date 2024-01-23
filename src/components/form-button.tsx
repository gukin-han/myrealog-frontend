"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "실행중..." : children}
    </Button>
  );
}
