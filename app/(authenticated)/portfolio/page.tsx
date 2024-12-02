import React from 'react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Carousel, CarouselNext, CarouselPrevious, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import WalletsCarrousel from '@/components/portfolio/WalletsCarrousel'
import AddWallet from '@/components/portfolio/dialogs/AddWallet'
import { EditIcon } from 'lucide-react'




const page = () => {
  return (
    <div>
        <header className='relative mb-7 h-[28vh]'>
            <section className='dark:bg-gradient-to-r bg-gradient-to-l  from-green-dark/70 to-green-light/70 h-4/5 2xl:mx-[-7rem] mx-[-5rem] mt-[-5rem]'/> 

            <Avatar className='absolute left-1 bottom-0 h-32 w-32 2xl:h-52 2xl:w-52 rounded-lg bg-white dark:bg-black border-8 border-green-dark'>
                

            </Avatar>

        </header>
        <main>
            <section className='flex justify-between mb-7'>
                <div>
                    {/* <h1 className='text-lg'>Nombre de usuario <EditIcon className='inline text-sm' /> </h1>
                    <h2 className='text-lg'>Direccion de wallet</h2> */}
                </div>
                


            </section>
            <section className='flex flex-col mb-32 mt-8 gap-20 items-center justify-between '>
                <h2 className='text-center font-bold text-3xl'>Selecciona la wallet que deseas ver</h2>
                {/* Wallets' carrousel */}
                <div className='relative w-4/5'>
                <Carousel className="my-10 px-20 " opts={{ loop: true }}>
                    <CarouselPrevious/>
                    <CarouselContent className='flex '>
                        
                           <WalletsCarrousel/>
                        
                        <CarouselItem className='flex justify-center basis-1/3'>
                            <AddWallet/>
                        </CarouselItem> 

                    </CarouselContent>
                    
                    <CarouselNext/>
                </Carousel>
                </div>
                

            </section>
        </main>
    </div>
  )
}

export default page