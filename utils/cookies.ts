"use server";
import { cookies } from "next/headers";

const cookiesStore = cookies();


//Para setear
export const setCookie = async (name: string, value: any) => {
    if (value != null) {
        try {
            // Verificar si la cookie ya existe
            const existingCookie = cookiesStore.get(name);
            if (existingCookie) {
                console.log("La cookie ya existe");
                return false;
            }

            // Crear la cookie si no existe
            cookiesStore.set(name, value, {
                path: "/",
            });
            console.log("Cookie creada");
            return true;
        } catch (err) {
            throw new Error("No se pudo guardar la cookie");
        }
    }
    return null;
}

//Para borrar
export const deleteCookie = async (name: string) => {
    try {
        cookiesStore.delete(name);
        return true;
    } catch (err) {
        throw new Error("No se pudo borrar la cookie");
    }
}
// Para visualizar el valor
export const getCookie = async (name: string) => {
    try {
        const existingCookie = cookiesStore.get(name);
        if (existingCookie) {
            return existingCookie;
        }
    } catch (err) {
        throw new Error("No se pudo obtener la cookie");
    }
    return null;
}