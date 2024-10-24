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
        <h2>Actualizaciones:</h2>
        <div>
          <ul>
            <li>Se ha actualizado el módulo de análisis</li>
            <li>Se ha actualizado el módulo de comparativa</li>
            <li>Se ha actualizado el módulo de dashboard</li>
          </ul>
        </div>
      </PopoverContent>

      
    </Popover>
  )
}

export default NotificationsButton