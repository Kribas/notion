"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Error() {
  return (
    <div className="w-full flex items-center justify-center flex-col space-y-4">
      <Image
        className="dark:hidden"
        src="/error.png"
        width={300}
        height={300}
        alt="Error Image"
      />

      <Image
        className="dark:block hidden"
        src="/error-dark.png"
        width={300}
        height={300}
        alt="Error Image"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
}

export default Error;
