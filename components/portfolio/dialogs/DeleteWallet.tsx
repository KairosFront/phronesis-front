import React from 'react'
import { AlertDialog, 
    AlertDialogTrigger,
    
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogContent, 
    AlertDialogOverlay, 
    
 } from '@/components/ui/alert-dialog'

 import { Button } from '@/components/ui/button'

import { handleDeleteWallet } from '@/actions/walletsActions'
import { useWallets } from '@/hooks/useWallets';

interface Props {
    wallet: string;
    userId: number;
}
const DeleteWallet = ({wallet, userId}: Props) => {

    const {mutate} = useWallets(userId.toString())

    const onClick = async () => {
        await handleDeleteWallet(userId, wallet)
        mutate()
    }
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            Eliminar
        </AlertDialogTrigger>
        <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader>Eliminar wallet</AlertDialogHeader>
                <p>¿Estás seguro de que deseas eliminar la wallet: {wallet}?</p>
                <AlertDialogFooter>
                    <Button>Cancelar</Button>
                    <Button onClick={onClick}>Eliminar</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default DeleteWallet