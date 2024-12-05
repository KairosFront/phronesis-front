"use server";
import { cookies } from "next/headers";
import { logout } from "@/services/backend/login";
import { redirect } from "next/navigation";
import { deleteCookie } from "@/utils/cookies";

//Fix, isnt working

export const handleLogout = async () => {
  try {
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get("accessToken")?.value;
    await logout(accessToken);
    
    await deleteCookie("accessToken");
    await deleteCookie("wallet");
    redirect("/");
  } catch (err) {
    console.error(err);
  }
};
