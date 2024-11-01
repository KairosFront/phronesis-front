'use client';
import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from 'next/image'
import { Button } from '@/components/ui/button';

//Hooks
import { useDialogNotifications } from '@/hooks/useDialogs';
const NotificationsDialog = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    // const { setNumberOfAccess, numberOfAccess } = useDialogNotifications();

    React.useEffect(() => {
        const numberSession = Number(window.localStorage.getItem('sessionNumberVersion9'));
        const numberSummed = numberSession + 1;
        window.localStorage.setItem('sessionNumberVersion9',  numberSummed.toString());
    }, []);

    React.useEffect(() => {
        //Setting some time for the other useEffect to run first
        setTimeout(() => {
            const numberSession = Number(window.localStorage.getItem('sessionNumberVersion9'));
            console.log('Numero de sesión en segundo useEffect', numberSession);
            if(numberSession === 1){
                setIsOpen(true);
            }
        } , 700);
    }, []);
  return (
    <>
        <Dialog open={isOpen}>

            
            <DialogContent>
            <DialogHeader className='flex  gap-4 flex-row items-center justify-between'>
                <div>
                    <Image src="/dark/icons/ui/notification-dark.svg" alt="Notifications" width={24} height={24} className='hidden dark:inline' />
                    <Image src="/icons/ui/notification.svg" alt="Notifications" width={24} height={24} className='dark:hidden inline' />
                </div>
                <DialogTitle>Bienvenido, te informamos sobre nuevas actualizaciones:</DialogTitle>

                <X
                className="absolute top-2 right-2 cursor-pointer hover:text-red-500"
                onClick={() => {
                    setIsOpen(false);
                }}
                ></X>

            </DialogHeader>

            <hr className='dark:bg-primary-foreground bg-primary/50'/>
            <div className='text-sm pl-6'>
            <ul>
                    <li>
                        Implementamos este nuevo sistema de notificaciones para mantenerte informado sobre las actualizaciones de la aplicación!
                    </li>
                    <li>
                        Nueva página principal de portfolio pensada para agregar más de una wallet (actualmente solo en diseño).
                    </li>
                </ul>
            </div>
            <div>
                <Button className="bg-green-dark" onClick={() => setIsOpen(false)}> Aceptar</Button>
            </div>
                


            </DialogContent>

        </Dialog>
    
    </>
  )
}

export default NotificationsDialog