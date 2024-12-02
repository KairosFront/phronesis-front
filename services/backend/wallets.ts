'use server';
import { AUTH_URL } from "./urls";
import {WalletManipulationBody} from 'index';

export const getWalletsByUserId = async (userId: string) => {
    try {
        const response = await fetch(`${AUTH_URL}getWallets/${userId}`);
        const data = await response.json();
        return data;       
    } catch (error: any) {
        throw new Error(error);
    }
}

export const postWallet = async ( body:WalletManipulationBody ) => {
    console.log('Body on service:', body);
    try {
        const response = await fetch(`${AUTH_URL}newWallet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        if (response.ok) {
            return true;
        } else {

            return false
        }
    } catch (error: any) {  
        throw new Error(error);
    }
}

export const deleteWallet = async (body: WalletManipulationBody) => {
    try {
        const response = await fetch(`${AUTH_URL}deleteWallet`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}
