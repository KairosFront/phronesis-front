"use server";
import { getLessons } from "@/services/backend/lessons";

export const separateModules = async (moduleToBring: 1 | 2 | 3 | "all") => {
    try {
        const response = await getLessons();
        
        if(moduleToBring === "all") return response;

        const module1 = response["Módulo 1"];
        const module2 = response["Módulo 2"];
        const module3 = response["Módulo 3"];

        if(moduleToBring === 1) return module1;
        if(moduleToBring === 2) return module2;
        if(moduleToBring === 3) return module3;
        
    } catch (error) {
       console.error(error); 
    }
};

export const separatedCombinedModules = async (lastModule: number) => {
    try {
        const response = await getLessons();
        

        const module1 = response["Módulo 1"];
        const module2 = response["Módulo 2"];

        if(lastModule === 1) return [module1];
        if(lastModule === 2) return [ ...module1, ...module2 ]
        if(lastModule === 3) return response;
        
    } catch (error) {
       console.error(error); 
    }
}