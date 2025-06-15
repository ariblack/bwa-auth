import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col py-5 items-center justify-center">
      <div className="w-1/2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <Button>
            <Link href={"#"}>Tambah</Link>
          </Button>
        </div>
        <p>Hanya dapat diakses oleh user</p>
        <Link href="/">Beranda</Link>
      </div>
    </div>
  );
}
