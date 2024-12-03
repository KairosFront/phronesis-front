'use server';
import { getWalletsByUserId } from "@/services/backend/wallets";
import { postWallet } from "@/services/backend/wallets";
import { deleteWallet } from "@/services/backend/wallets";
import { handleGetBalances } from "./portfolioActions";
import { WalletsResponse } from "..";

//Talvez: traer las actions de portafolio para acceder a la suma de los balances generales 
//por cada wallet y devolverlo en el handleGetWallets (crear nuevo objeto aca en el server actions)

export const handleCreateWallet = async (userId: number, wallet: string) => {
    try {
        const response = await postWallet({ idUsuario: userId, wallet });
        if (response) {
            return true;
        } else {
            return false;
        }
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export const handleGetWallets = async (userId: string) => {
    try {
        const response = await getWalletsByUserId(userId) as WalletsResponse[];
        
        //Por cada wallet traer los balances y sumarlos
        const arrayOfWalletsWithBalance = await Promise.all(response.map(async (wallet) => {
            const balances = await handleGetBalances(wallet.wallet);
            return{
                totalBalance: balances?.totalBalanceWallet as number,
                id: wallet.id,
                address: wallet.wallet
            } 
        }
        ));



        return arrayOfWalletsWithBalance;
    } catch (error: any) {
        throw new Error(error);
    }
}

export const handleDeleteWallet = async (userId: number, wallet: string) => {
    try {
        const response = await deleteWallet({ idUsuario: userId, wallet });
        return response;
    } catch (error: any) {
        throw new Error(error);
    }
}