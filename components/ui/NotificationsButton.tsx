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
                        Implementamos este nuevo sistema de notificaciones para mantenerte informado sobre las actualizaciones de la aplicación!
                    </li>
                    <li>
                        Nueva página principal de portfolio pensada para agregar más de una wallet (actualmente solo en diseño).
                    </li>
            
          </ul>
        </div>
      </PopoverContent>

      
    </Popover>
  )
}

export default NotificationsButton