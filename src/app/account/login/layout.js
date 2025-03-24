
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function LoginLayout({ children }) {
  const session = await auth();
  if (session) {
    redirect("/account");
  }
  return <div>{children}</div>;
}
