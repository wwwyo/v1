import { EmailSignin } from "@/components/email-signin";
import { GoogleSignin } from "@/components/google-signin";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ログイン",
};

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center">
          <Image src="/logo.png" alt="ロゴ" width={200} height={200} />
        </div>
        <EmailSignin />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              または
            </span>
          </div>
        </div>
        <GoogleSignin />
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
