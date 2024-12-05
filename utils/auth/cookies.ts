"use server";
import { cookies } from "next/headers";


export const createCookieUserId = async (id: any) => {
  
const cookiesStore = await cookies();
  if (id != null) {
    try {
      // Verificar si la cookie ya existe
      const existingCookie = cookiesStore.get("userId");
      if (existingCookie) {
        console.log("La cookie ya existe");
        return false;
      }

      // Crear la cookie si no existe
      cookiesStore.set("userId", id, {
        path: "/",
        sameSite: "strict",
      });
      console.log("Cookie creada");
      return true;
    } catch (err) {
      throw new Error("No se pudo guardar la cookie");
    }
  }
  return null;
};

export const createCookiesWallets = async (wallet: any, chainType: any) => {
  
const cookiesStore = await cookies();
  if (wallet != null) {
    try {
      // Verificar si la cookie ya existe
      const existingCookie = cookiesStore.get("wallet");
      if (existingCookie) {
        console.log("La cookie ya existe");
        return false;
      }

      // Crear la cookie si no existe
      cookiesStore.set("wallet", wallet, {
        path: "/",
        sameSite: "strict",
      });
      cookiesStore.set("chainType", chainType, {
        path: "/",
        sameSite: "strict",
      });
      console.log("Cookie creada");
      return true;
    } catch (err) {
      throw new Error("No se pudo guardar la cookie");
    }
  }
  return null;
};

export const deleteCookieUserId = async () => {
  
const cookiesStore = await cookies();
  try {
    cookiesStore.delete("userId");
    return true;
  } catch (error) {
    console.error(error);
  }
};
