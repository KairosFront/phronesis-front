'use server';
import { getWalletsByUserId } from "@/services/backend/wallets";
import { postWallet } from "@/services/backend/wallets";
import { deleteWallet } from "@/services/backend/wallets";

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
        const response = await getWalletsByUserId(userId);
        

        return response.map((item: any) => ({
            id: item.id,
            address: item.wallet
        }));
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