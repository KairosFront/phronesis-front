import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card'
import { Check, Star, X } from 'lucide-react';
//Components shadcn
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import Image from 'next/image';
import { Avatar } from '@/components/ui/avatar';
import Footer from '@/components/shared/Footer';

const page = () => {
  return (
    <main className='overflow-x-hidden'>
        <section className="grid lg:grid-cols-2 h-screen gap-5 w-11/12 mx-auto ">
            <div className='flex items-center justify-center '>
            <Card className='border-0 py-16 px-5 grid gap-28 rounded-lg  shadow-2xl '>
                
                    <CardHeader className='flex flex-col items-center w-4/5 mx-auto gap-9'>
                    <Image
                        className=" hidden dark:block"
                        alt="kairos"
                        src="/backgrounds/kairos-login.svg"
                        width={200}
                        height={100}
                        ></Image>

                        <Image
                        className=" dark:hidden"
                        alt="kairos"
                        src="/img-login-light.png"
                        width={200}
                        height={100}
                        ></Image>
                        <CardTitle className='text-green-light text-3xl tracking-widest'>All your DeFi, One Dashboard</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-9 w-4/5  mx-auto'>
                    
                        <CardTitle className='text-green-light tracking-wide'>¡DeFi nunca fué tan fácil!</CardTitle>
                        <p className='text-xl'>
                        Con <span className='text-green-light'>Phronesis</span> tienes todas tus herramientas en un solo dashboard para dar seguimiento a tu estrategia de manera simple.
                        <br /> <br />
                        Suscríbete y reúne toda la información de tus activos en un solo lugar.
                        </p>
                     
                        
                        <CardFooter className='w-full'>
                        <Button className='w-full'>
                            <Link href="/login" className='text-lg'>
                                Entrar 
                            </Link>
                        </Button>
                    </CardFooter>    
                    </CardContent>
                    

                
                    
                </Card>
            </div>
            <div className='relative flex items-center justify-center '>
                <Image alt="Dashboard de Kairos" 
                    src={"/backgrounds/hero.png"}
                    width={900}
                    height={700}
                    objectFit=''
                    
                    className=" border-8 border-black rounded-md shadow-blue-shadow bg-green-light  absolute rotate-[345deg] transform translate-x-24 translate-y-[-5rem]"
                >

                </Image>
            </div>

        </section>

        <div className='bg-gradient-to-b from-[#141414] to-[#121212]'>

        

        <section className='h-[50vh] w-4/5 mx-auto flex flex-col items-center justify-center '>
            <h1 className='text-center text-5xl py-14'>En Phronesis puedes </h1>
            <div className='grid lg:grid-cols-5 grid-cols-2'>
                <div>
                    <Image src="/icons/rocket.svg" width={100} height={100} alt="Comprar tokens al instante" />
                    <span>Comprar tokens al instante</span>
                </div>
                <div>
                    <Image src="/icons/rocket.svg" width={100} height={100} alt="Comprar tokens al instante" />
                    <span>Controlar Total de tus Activos</span>
                </div>
                <div>
                    <Image src="/icons/rocket.svg" width={100} height={100} alt="Comprar tokens al instante" />
                    <span>Analizar Proyectos a Fondo</span>
                </div>
                <div>
                    <Image src="/icons/rocket.svg" width={100} height={100} alt="Comprar tokens al instante" />
                    <span>Ver toda tu información en un solo lugar</span>
                </div>
                <div>
                    <Image src="/icons/rocket.svg" width={100} height={100} alt="Comprar tokens al instante" />
                    <span>Tomar decisiones Rápidas e Informadas</span>
                </div>
                
                
                

            </div>
        </section>

        <section   className='h-[50vh] w-4/5 mx-auto gap-16  grid lg:grid-cols-2'>
            
            <div  className='flex flex-col items-center justify-center'>
                <Image src={'/'} alt="monitorear multiples wallets" width={100} height={100} />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl mb-14'>Monitorea multiples Wallets</h1>
                    <p>
                    ¿Cansado de cambiar entre wallets y plataformas para gestionar tus inversiones DeFi? <br />
                    Con Phronesis, puedes monitorear todas tus wallets en un solo dashboard, obteniendo una visión completa y unificada de tus inversiones en un solo lugar.
                    </p>
            </div>
            
        </section>

        <section className='h-[50vh] w-4/5 mx-auto gap-16  grid lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl mb-14'>Compara tokens</h1>
            <p>
                ¿Pierdes tiempo comparando tokens entre distintas herramientas y fuentes? <br />

                Phronesis te permite comparar tokens al instante, reuniendo toda la información clave en un solo lugar para que tomes decisiones informadas de manera
        </p>
        </div>

            <div  className='flex flex-col items-center justify-center'>
                <Image src={'/'} alt="monitorear multiples wallets" width={100} height={100} />
            </div>
        </section>
        <section  className='h-[50vh] w-4/5 mx-auto gap-16  grid lg:grid-cols-2'>

        <div  className='flex flex-col items-center justify-center'>
                <Image src={'/'} alt="monitorear multiples wallets" width={100} height={100} />
            </div>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl mb-14'>Analiza proyectos</h1>
            <p>
                ¿Es complicado obtener un análisis completo y profundo de los proyectos que te interesan en poco tiempo? <br />

                Con Phronesis, analiza proyectos de forma detallada y eficiente, con herramientas que te brindan una visión clara de cada inversión, permitiéndote evaluar su potencial sin perder ningún detalle clave.
            </p>

        </div>
           
        </section>
        </div>

        <div className='dark:bg-hero-pattern bg-no-repeat md:bg-cover'>

        
            <section className=' h-screen w-4/5 mx-auto flex flex-col items-center justify-center'>
            <h1 className='text-5xl mb-32'>
            Conoce nuestros planes de subscripción
            </h1>
            <div className="grid lg:grid-cols-3 w-full gap-10 2xl:gap-28 shadow-blue-shadow bg-gradient-to-b from-green-light/40 to-[#00FFFF98]">
                <Card className='py-10 px-0 flex flex-col gap-7 items-center'>
                    <CardHeader>
                        <CardTitle className='text-center'>Gratuito</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-5 w-full'>
                        <div className="mx-auto w-full ">
                            <p className='flex gap-3 border-b border-muted/50'> <Check className='text-yellow-500' /> Tracking de 2 wallets</p>
                            <p className='flex gap-3 border-b border-muted/50'> <Check className='text-yellow-500' /> Tracking de 2 wallets</p>
                            <p className='flex gap-3 border-b border-muted/50'> <Check className='text-yellow-500' /> Tracking de 2 wallets</p>
                            <p className='flex gap-3 text-muted/50 border-b border-muted/50'><X className="text-red-500"/> Beneficios exclusivos</p>
                            <p className='flex gap-3 text-muted/50 border-b border-muted/50'><X className="text-red-500"/> Beneficios exclusivos</p>

                        </div>
                        
                        
                           
                         
                        <div className='text-center'>
                            <p className="bg-green-dark font-bold text-3xl py-1 w-full">
                                $0 USD
                            </p>
                            <p className='text-muted text-xl'>
                                POR MES
                            </p>

                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Registrate</Button>
                    </CardFooter>
                </Card>

               
                <Card className='py-10 px-0 flex flex-col gap-7 items-center'>
                    <CardHeader>
                        <CardTitle className='text-center'>Platino</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-5 w-full'>
                        <div className="mx-auto w-[95%] ">
                            <p className='flex gap-3  border-b border-muted/50'> <Check className='text-green-500' /> Tracking de 5 wallets</p>
                            <p className='flex gap-3  border-b border-muted/50'> <Check className='text-green-500' /> Interactua con 10 redes</p>
                            <p className='flex gap-3  border-b border-muted/50'> <Check className='text-green-500' /> Acceso a Newsletter Premium</p>
                            <p className='flex gap-3  border-b border-muted/50'><Check className='text-green-500' />Beneficios exclusivos</p>
                            <p className='flex gap-3  text-muted/50 border-b border-muted/50'><X className="text-red-500"/> Acceso ilimitado</p>

                        </div>
                        
                        
                           
                         
                        <div className='text-center'>
                            <p className="bg-green-dark font-bold text-3xl py-1 w-full">
                                $25 USDC
                            </p>
                            <p className='text-muted text-xl'>
                                POR MES
                            </p>

                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Suscribete</Button>
                    </CardFooter>
                </Card>
               

                <Card className='py-10 px-0 flex flex-col gap-7 items-center'>
                    <CardHeader>
                        <CardTitle className='text-center'>Golden</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-5 w-full'>
                        <div className="mx-auto w-[95%] ">
                            <p className='flex gap-3  border-b border-muted/50'> <Check className='text-green-500' />  Tracking de 15 wallets</p>
                            <p className='flex gap-3  border-b border-muted/50'> <Check className='text-green-500' />  Interacción ilimitada en redes</p>
                            <p className='flex gap-3  border-b border-muted/50'> <Check className='text-green-500' />  Acceso a Newsletter Premium</p>
                            <p className='flex gap-3  border-b border-muted/50'><Check className='text-green-500' /> Beneficios exclusivos</p>
                            <p className='flex gap-3  border-b border-muted/50'><Check className='text-green-500' /> Acceso ilimitado</p>

                        </div>
                        
                        
                           
                         
                        <div className='text-center'>
                            <p className="bg-green-dark font-bold text-3xl py-1 w-full">
                                $45 USDC
                            </p>
                            <p className='text-muted text-xl'>
                                POR MES
                            </p>

                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Suscribete</Button>
                    </CardFooter>
                </Card>
            </div>

        </section>
        </div>


        <div className="bg-gradient-to-b from-[#141414] to-dark-grey ">
        <section className='w-4/5 mx-auto h-[30vh] flex flex-col  items-center justify-center'>
            <h1 className='text-center text-5xl py-14'>Validados por:</h1>
            <div className="grid lg:grid-cols-5 w-full gap-10 2xl:gap-28 ">
                <img src="" alt="Logo 1" />
                <img src="" alt="Logo 2" />
                <img src="" alt="Logo 3" />
                <img src="" alt="Logo 4" />
            </div>
        </section>

        <section className='w-4/5 mx-auto h-[70vh] flex flex-col items-center justify-center'>
            <h1 className='text-center text-5xl mb-20 py-14'>Nuestros primeros usuarios opinan</h1>
            <div className="grid lg:grid-cols-3 w-full gap-10 2xl:gap-28  ">
                <Card className='py-8 px-4 flex flex-col items-center gap-6'>
                    <CardHeader className='flex flex-col items-center justify-center gap-3'>
                        <Avatar className='rounded-full  bg-green-light/75 h-40 w-40 '/>
                        <CardTitle>Usuario 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"Phronesis ha revolucionado la forma en que gestiono mis inversiones DeFi. Todo en un solo lugar, ¡es increíble!"</p>
                    </CardContent>
                    <CardFooter>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <span className='text-muted/50 ml-3'>5/5</span>
                    </CardFooter>
                </Card>

                <Card className='py-8 px-4 flex flex-col items-center gap-6'>
                    <CardHeader className='flex flex-col items-center justify-center gap-3'>
                        <Avatar className='rounded-full  bg-green-light/75 h-40 w-40 '/>
                        <CardTitle>Usuario 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"La comparación de tokens es rápida y sencilla. Phronesis me ahorra mucho tiempo y esfuerzo."</p>
                    </CardContent>
                    <CardFooter>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <span className='text-muted/50 ml-3'>5/5</span>
                    </CardFooter>
                </Card>

                <Card className='py-8 px-4 flex flex-col items-center gap-6'>
                    <CardHeader className='flex flex-col items-center justify-center gap-3'>
                        <Avatar className='rounded-full  bg-green-light/75 h-40 w-40 '/>
                        <CardTitle>Usuario 3</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"El análisis detallado de proyectos me ha permitido tomar decisiones más informadas. ¡Altamente recomendado!"</p>
                    </CardContent>
                    <CardFooter>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <Star className='text-yellow-500'/>
                        <span className='text-muted/50 ml-3'>5/5</span>
                    </CardFooter>
                </Card>
            </div>
        </section>
        <section className='w-4/5 mb-20 mx-auto flex flex-col items-center h-screen justify-center'>
            <h1 className='text-center text-5xl py-14 mb-20'>Preguntas frecuentes:</h1>
            <div className=' 2xl:w-3/5 w-full'>
            <Card >
                <CardContent>
                    <Accordion type="multiple">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Pregunta 1</AccordionTrigger>
                            <AccordionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Pregunta 2</AccordionTrigger>
                            <AccordionContent>Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Pregunta 3</AccordionTrigger>
                            <AccordionContent>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Pregunta 4</AccordionTrigger>
                            <AccordionContent>Etiam sit amet orci eget eros faucibus tincidunt.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            </div>
            
        </section>
        
        
        <section className='w-4/5  mx-auto flex flex-col items-center justify-around pb-52'>
            <h1 className="text-5xl mb-20">Nuestro team:</h1>
            <div className="grid grid-cols-4 gap-5 mb-20">
                
                    <Card>
                        <CardHeader>
                            <img src="path/to/image1.jpg" alt="Persona 1" className="team-image" />
                            <CardTitle>Persona 1</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Descripción de Persona 1</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <img src="path/to/image2.jpg" alt="Persona 2" className="team-image" />
                            <CardTitle>Persona 2</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Descripción de Persona 2</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <img src="path/to/image3.jpg" alt="Persona 3" className="team-image" />
                            <CardTitle>Persona 3</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Descripción de Persona 3</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <img src="path/to/image4.jpg" alt="Persona 4" className="team-image" />
                            <CardTitle>Persona 4</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Descripción de Persona 4</p>
                        </CardContent>
                    </Card>
                </div>
            
                <div className="grid grid-cols-3 gap-5 ">
                    <Card>
                        <CardHeader>
                            <img src="path/to/image5.jpg" alt="Persona 5" className="team-image" />
                            <CardTitle>Persona 5</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Descripción de Persona 5</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <img src="path/to/image6.jpg" alt="Persona 6" className="team-image" />
                            <CardTitle>Persona 6</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Descripción de Persona 6</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <img src="path/to/image7.jpg" alt="Persona 7" className="team-image" />
                            <CardTitle>Persona 7</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Descripción de Persona 7</p>
                        </CardContent>
                    </Card>
                </div>
            
        </section>

        </div>
        
        <Footer />

    </main>
  )
}

export default page