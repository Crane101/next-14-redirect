"use server";

import { redirect } from "next/navigation";

export const redirectRelative = async () => {
  return redirect("page2");
};

export const redirectAbsolute = async () => {
  return redirect("/en/page2");
};
