import { getMe } from "@/actions/user/me";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignOutButton from "./(auth)/components/button-signout";

export default async function Home() {
  const me = await getMe();
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello, BuildWithAngga!</h1>
      <div className="flex items-center gap-2">
        <Button>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        {me ? (
          <SignOutButton />
        ) : (
          <Button variant="secondary">
            <Link href="/signin">Sign In</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
