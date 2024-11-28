import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'

//Components shadcn
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

const page = () => {
  return (
    <main>
        <section>

        </section>

        <section>
            <h1>Monitorea multiples Wallets</h1>
            <p>
            ¿Cansado de cambiar entre wallets y plataformas para gestionar tus inversiones DeFi? <br />
            Con Phronesis, puedes monitorear todas tus wallets en un solo dashboard, obteniendo una visión completa y unificada de tus inversiones en un solo lugar.
            </p>

        </section>

        <section>
            <h1>Compara tokens</h1>
            <p>
                ¿Pierdes tiempo comparando tokens entre distintas herramientas y fuentes? <br />

                Phronesis te permite comparar tokens al instante, reuniendo toda la información clave en un solo lugar para que tomes decisiones informadas de manera sencilla y rápida.
            </p>

        </section>
        <section>
            <h1>Analiza proyectos</h1>
            <p>
                ¿Es complicado obtener un análisis completo y profundo de los proyectos que te interesan en poco tiempo? <br />

                Con Phronesis, analiza proyectos de forma detallada y eficiente, con herramientas que te brindan una visión clara de cada inversión, permitiéndote evaluar su potencial sin perder ningún detalle clave.
            </p>
        </section>
        <section>
            <h1>
            Conoce nuestros planes de subscripción
            </h1>
            <div className="cards-container">
                <Card>
                    <CardHeader>
                        <CardTitle>Básico</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>$10/mes</p>
                        <ul>
                            <li>Monitoreo de hasta 3 wallets</li>
                            <li>Comparación de hasta 10 tokens</li>
                            <li>Análisis básico de proyectos</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <button>Suscribirse</button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Estándar</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>$20/mes</p>
                        <ul>
                            <li>Monitoreo de hasta 10 wallets</li>
                            <li>Comparación de hasta 50 tokens</li>
                            <li>Análisis avanzado de proyectos</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <button>Suscribirse</button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Premium</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>$30/mes</p>
                        <ul>
                            <li>Monitoreo ilimitado de wallets</li>
                            <li>Comparación ilimitada de tokens</li>
                            <li>Análisis completo de proyectos</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <button>Suscribirse</button>
                    </CardFooter>
                </Card>
            </div>

        </section>
        <section>
            <h1>Validados por:</h1>
            <div className="logos-container">
                <img src="" alt="Logo 1" />
                <img src="" alt="Logo 2" />
                <img src="" alt="Logo 3" />
                <img src="" alt="Logo 4" />
            </div>
        </section>

        <section>
            <h1>Nuestros primeros usuarios opinan</h1>
            <div className="testimonials-container">
                <Card>
                    <CardHeader>
                        <CardTitle>Usuario 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"Phronesis ha revolucionado la forma en que gestiono mis inversiones DeFi. Todo en un solo lugar, ¡es increíble!"</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Usuario 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"La comparación de tokens es rápida y sencilla. Phronesis me ahorra mucho tiempo y esfuerzo."</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Usuario 3</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>"El análisis detallado de proyectos me ha permitido tomar decisiones más informadas. ¡Altamente recomendado!"</p>
                    </CardContent>
                </Card>
            </div>
        </section>
        <section>
            <h1>Preguntas frecuentes:</h1>
            <Card>
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
        </section>
        
        <section>
            <h1>Nuestro team:</h1>
            <div className="team-container">
                <div className="team-row">
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
                <div className="team-row">
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
            </div>
        </section>
    </main>
  )
}

export default page