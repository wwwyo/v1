import { EmailSignUp } from "@/components/email-signup";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      Sign Up
      <EmailSignUp />
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">または</span>
      </div>
      <Link href="/login">login</Link>
    </div>
  );
}
