"use client";

import { createClient } from "@v1/supabase/client";
import { Button } from "@v1/ui/button";
import { Icons } from "@v1/ui/icons";
import { Input } from "@v1/ui/input";
import { Label } from "@v1/ui/label";
import { useFormStatus } from "react-dom";

export function EmailSignin() {
  const supabase = createClient();
  const handleSignIn = async (formData: FormData) => {
    const res = await supabase.auth.signInWithPassword({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    console.log(res);
  };

  return (
    <form className="flex gap-y-4 flex-col" action={handleSignIn}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" name="password" required />
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="ml-auto rounded-full">
      {pending ? <Icons.Loader className="size-4" /> : "Login"}
    </Button>
  );
}
