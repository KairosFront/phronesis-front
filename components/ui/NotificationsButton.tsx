'use client';
import React from 'react'
import Image from 'next/image'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NotificationsButton = () => {




  return (
    <Popover>
      <PopoverTrigger>
      <Image src="/dark/icons/ui/notification-dark.svg" alt="Notifications" width={24} height={24} className='hidden dark:inline' />
      <Image src="/icons/ui/notification.svg" alt="Notifications" width={24} height={24} className='dark:hidden inline' />

      </PopoverTrigger>
      <PopoverContent className='text-sm '>
        <h2>Actualizaciones recientes:</h2>
        <div>
          <ul>
          <li>
                    Se elimino la red de scroll temporalmente
                    </li>
                    <li>
                    Se añadieron las redes de: avalanche, gnosis y linea
                    </li>
                    <li>
                    Se solucionó un problema con la pagina de login
                    </li>
                    <li>
                    Se solucionó el problema de error de cliente al seleccionar una red 
                    </li>
            
          </ul>
        </div>
      </PopoverContent>

      
    </Popover>
  )
}

export default NotificationsButton