import React from 'react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Carousel, CarouselNext, CarouselPrevious, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import WalletsCarrousel from '@/components/portfolio/WalletsCarrousel'
import AddWallet from '@/components/portfolio/dialogs/AddWallet'




const page = () => {
  return (
    <div>
        <header className='relative mb-7 h-[26vh]'>
            <section className='dark:bg-gradient-to-r bg-gradient-to-l  from-green-dark/70 to-green-light/70 h-4/5 2xl:mx-[-7rem] mx-[-5rem] mt-[-5rem]'/> 

            <Avatar className='absolute left-1 bottom-0 h-52 w-52 rounded-lg bg-white dark:bg-black border-8 border-green-dark'>
                

            </Avatar>

        </header>
        <main>
            {/* <section className='flex justify-between mb-7'>
                <div>
                    <h1>Nombre de usuario</h1>
                    <h2>direccion de wallet</h2>
                </div>
                <div>
                    <AddWallet/>
                </div>


            </section> */}
            <section className='flex flex-col items-center justify-between h-[26vh]'>
                <h2 className='text-center font-extrabold text-3xl'>Entra al portafolio de tu wallet: </h2>
                {/* Wallets' carrousel */}
                <div className='relative'>
                {/* <Carousel className="my-10 px-20" opts={{ loop: true }}>
                    <CarouselPrevious/>
                    <CarouselContent>
                        <CarouselItem className='flex justify-center'>
                           <WalletsCarrousel/>
                        </CarouselItem>
                        {/* <CarouselItem className='flex justify-center basis-1/5'>
                           <Card className='p-6 h-36 w-48 border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45'>
                                <CardContent>
                                    <h3>Wallet 1</h3>
                                    <p>Balance: 0.00</p>
                                    </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className='flex justify-center basis-1/5'>
                           <Card className='p-6 h-36 w-48 border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45'>
                                <CardContent>
                                    <h3>Wallet 1</h3>
                                    <p>Balance: 0.00</p>
                                    </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className='flex justify-center basis-1/5'>
                           <Card className='p-6 h-36 w-48 border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45'>
                                <CardContent>
                                    <h3>Wallet 1</h3>
                                    <p>Balance: 0.00</p>
                                    </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className='flex justify-center basis-1/5'>
                           <Card className='p-6 h-36 w-48 border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45'>
                                <CardContent>
                                    <h3>Wallet 1</h3>
                                    <p>Balance: 0.00</p>
                                    </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className='flex justify-center basis-1/5'>
                           <Card className='p-6 h-36 w-48 border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45'>
                                <CardContent>
                                    <h3>Wallet 1</h3>
                                    <p>Balance: 0.00</p>
                                    </CardContent>
                            </Card>
                        </CarouselItem>
                    
                    

                    </CarouselContent>
                    
                    <CarouselNext/>
                </Carousel> */}
                </div>
                

            </section>
        </main>
    </div>
  )
}

export default page