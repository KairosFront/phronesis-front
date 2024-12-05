import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Check, Star, X } from "lucide-react";
//Components shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import Footer from "@/components/shared/Footer";

const page = () => {
  return (
    <main className="overflow-x-hidden pt-6 lg:pt-0">

      <section className="grid lg:grid-cols-2 xl:h-screen  gap-5 w-11/12 mx-auto ">
        <div className="flex items-center justify-center sm:pb-8 lg:pb-12">
          <Card className="border-0 py-16 px-5 grid gap-28 rounded-lg  shadow-2xl ">
            <CardHeader className="flex flex-col items-center w-4/5 mx-auto gap-9">
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
              <CardTitle className="text-green-light text-3xl tracking-widest">
                All your DeFi, One Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-9 w-4/5  mx-auto">
              <CardTitle className="text-green-light tracking-wide">
                ¡DeFi nunca fué tan fácil!
              </CardTitle>
              <p className="text-xl">
                Con <span className="text-green-light">Phronesis</span> tienes
                todas tus herramientas en un solo dashboard para dar seguimiento
                a tu estrategia de manera simple.
                <br /> <br />
                Suscríbete y reúne toda la información de tus activos en un solo
                lugar.
              </p>

              <CardFooter className="w-full">
              <Link href="/login" className="text-lg">
                <Button className="w-full">
                 
                    Entrar
                  
                </Button>
                </Link>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="relative flex items-center justify-center ">
          <Image
            alt="Dashboard de Kairos"
            src={"/backgrounds/hero.png"}
            width={700}
            height={500}
            objectFit=""
            className=" xl:border-8 border-2 mx-auto w-[90%] md:lg:w-4/5  border-black rounded-md shadow-blue-shadow bg-green-light  xl:absolute xl:rotate-[345deg] xl:transform xl:translate-x-24 xl:translate-y-1 2xl:translate-y-[-5rem]"
          ></Image>
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#141414] to-[#121212]">
        <section className="xl:h-[50vh] lg:mb-0 w-4/5 mx-auto flex flex-col  items-center justify-center ">
          <h1 className="text-center text-4xl 2xl:text-5xl pb-14 pt-20 sm:lg:pt-28 ">
            En Phronesis puedes{" "}
          </h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-3  gap-7 grid-cols-2">
            <div className="flex flex-col items-center">
              <Image
                src="/landing/comparar.png"
                width={140}
                height={140}
                alt="Comprar tokens al instante"
              />
              <span className="text-center">Comprar tokens al instante</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/landing/control.png"
                width={140}
                height={140}
                alt="control total de tus activos"
              />
              <span className="text-center">Control Total de tus Activos</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/landing/analisis.png"
                width={140}
                height={140}
                alt="Analizar Proyectos a Fondo"
              />
              <span className="text-center">Analizar Proyectos a Fondo</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/landing/check.png"
                width={140}
                height={140}
                alt="Ver toda tu información en un solo lugar"
              />
              <span className="">
                Ver toda tu información en un solo lugar
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/landing/decision.png"
                width={140}
                height={140}
                alt="Tomar decisiones Rápidas e Informadas"
              />
              <span className="">
                Tomar decisiones Rápidas e Informadas
              </span>
            </div>
          </div>
        </section>

        <section className="xl:h-[50vh] w-4/5 mx-auto gap-16 my-14  grid lg:grid-cols-2">
        <div className="lg:flex flex-col items-center hidden  justify-center">
            <Image
              src={"/landing/multiples-wallets.png"}
              alt="monitorear multiples wallets"
              width={600}
              height={450}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl 2xl:text-5xl mb-14">
              Monitorea multiples Wallets
            </h1>
            <p className="tracking-wide text-lg">
              ¿Cansado de cambiar entre wallets y plataformas para gestionar tus
              inversiones DeFi? <br />
              Con Phronesis, puedes monitorear todas tus wallets en un solo
              dashboard, obteniendo una visión completa y unificada de tus
              inversiones en un solo lugar.
            </p>
          </div>
          <div className="flex flex-col items-center lg:hidden  justify-center">
            <Image
              src={"/landing/multiples-wallets.png"}
              alt="monitorear multiples wallets"
              width={600}
              height={450}
            />
          </div>
        </section>

        <section className="xl:h-[50vh] w-4/5 mx-auto gap-16 my-14   grid lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-left xl:text-center 2xl:text-5xl mb-14">Compara tokens</h1>
            <p className="tracking-wide text-lg">
              ¿Pierdes tiempo comparando tokens entre distintas herramientas y
              fuentes? <br />
              Phronesis te permite comparar tokens al instante, reuniendo toda
              la información clave en un solo lugar para que tomes decisiones
              informadas de manera
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/landing/comparar-tokens.png"}
              alt="monitorear multiples wallets"
              width={600}
              height={450}
            />
          </div>
        </section>
        <section className="xl:h-[50vh] w-4/5 mx-auto gap-16  pb-14  mt-14 grid lg:grid-cols-2">
          <div className="lg:flex flex-col items-center hidden justify-center">
            <Image
              src={"/landing/analisis-image.png"}
              alt="monitorear multiples wallets"
              width={700}
              height={650}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl 2xl:text-5xl mb-14">Analiza proyectos</h1>
            <p className="tracking-wide text-lg">
              ¿Es complicado obtener un análisis completo y profundo de los
              proyectos que te interesan en poco tiempo? <br />
              Con Phronesis, analiza proyectos de forma detallada y eficiente,
              con herramientas que te brindan una visión clara de cada
              inversión, permitiéndote evaluar su potencial sin perder ningún
              detalle clave.
            </p>
          </div>
          <div className="flex flex-col items-center lg:hidden justify-center">
            <Image
              src={"/landing/analisis-image.png"}
              alt="monitorear multiples wallets"
              width={700}
              height={650}
            />
          </div>
        </section>
      </div>

      <div className="dark:bg-hero-pattern  lg:bg-no-repeat md:bg-cover">
        <section className=" xl:h-screen w-4/5 mx-auto flex flex-col py-10 gap-7 items-center justify-center">
          <h1 className="text-4xl 2xl:text-5xl xl:mb-32 ">
            Conoce nuestros planes de subscripción
          </h1>
          <div
            className="grid lg:grid-cols-3 w-full gap-10 2xl:gap-28 
            bg-fondo-landing"
          >
            <Card className="py-10 px-0 flex flex-col gap-7 items-center">
              <CardHeader>
                <CardTitle className="text-center">Gratuito</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5 w-full">
                <div className="mx-auto w-[95%] ">
                  <p className="flex gap-3 border-b border-muted/50">
                    {" "}
                    <Check className="text-yellow-500" /> Tracking de 2 wallets
                  </p>
                  <p className="flex gap-3 border-b border-muted/50">
                    {" "}
                    <Check className="text-yellow-500" /> Tracking de 2 wallets
                  </p>
                  <p className="flex gap-3 border-b border-muted/50">
                    {" "}
                    <Check className="text-yellow-500" /> Tracking de 2 wallets
                  </p>
                  <p className="flex gap-3 text-muted/50 border-b border-muted/50">
                    <X className="text-red-500" /> Beneficios exclusivos
                  </p>
                  <p className="flex gap-3 text-muted/50 border-b border-muted/50">
                    <X className="text-red-500" /> Beneficios exclusivos
                  </p>
                </div>

                <div className="text-center">
                  <p className="bg-green-dark font-bold text-3xl py-1 w-full">
                    $0 USD
                  </p>
                  <p className="text-muted text-xl">POR MES</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Registrate</Button>
              </CardFooter>
            </Card>

            <Card className="py-10 px-0 flex flex-col gap-7 items-center">
              <CardHeader>
                <CardTitle className="text-center">Platino</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5 w-full">
                <div className="mx-auto w-[95%] ">
                  <p className="flex gap-3  border-b border-muted/50">
                    {" "}
                    <Check className="text-green-500" /> Tracking de 5 wallets
                  </p>
                  <p className="flex gap-3  border-b border-muted/50">
                    {" "}
                    <Check className="text-green-500" /> Interactua con 10 redes
                  </p>
                  <p className="flex gap-3  border-b border-muted/50">
                    {" "}
                    <Check className="text-green-500" /> Acceso a Newsletter
                    Premium
                  </p>
                  <p className="flex gap-3  border-b border-muted/50">
                    <Check className="text-green-500" />
                    Beneficios exclusivos
                  </p>
                  <p className="flex gap-3  text-muted/50 border-b border-muted/50">
                    <X className="text-red-500" /> Acceso ilimitado
                  </p>
                </div>

                <div className="text-center">
                  <p className="bg-green-dark font-bold text-3xl py-1 w-full">
                    $25 USDC
                  </p>
                  <p className="text-muted text-xl">POR MES</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Suscribete</Button>
              </CardFooter>
            </Card>

            <Card className="py-10 px-0 border-yellow-600 border-2 flex flex-col gap-7 items-center">
              <CardHeader>
                <CardTitle className="text-center">Golden</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5 w-full">
                <div className="mx-auto w-[95%] ">
                  <p className="flex gap-3  border-b border-muted/50">
                    {" "}
                    <Check className="text-green-500" /> Tracking de 15 wallets
                  </p>
                  <p className="flex gap-3  border-b border-muted/50">
                    {" "}
                    <Check className="text-green-500" /> Interacción ilimitada
                    en redes
                  </p>
                  <p className="flex gap-3  border-b border-muted/50">
                    {" "}
                    <Check className="text-green-500" /> Acceso a Newsletter
                    Premium
                  </p>
                  <p className="flex gap-3  border-b border-muted/50">
                    <Check className="text-green-500" /> Beneficios exclusivos
                  </p>
                  <p className="flex gap-3  border-b border-muted/50">
                    <Check className="text-green-500" /> Acceso ilimitado
                  </p>
                </div>

                <div className="text-center">
                  <p className="bg-green-dark font-bold text-3xl py-1 w-full">
                    $45 USDC
                  </p>
                  <p className="text-muted text-xl">POR MES</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Suscribete</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>

      <div className="bg-gradient-to-b from-[#141414] to-dark-grey ">
        <section className="w-4/5 mx-auto xl:h-[40vh] mb-20 flex flex-col  items-center justify-center">
          <h1 className="text-center text-4xl 2xl:text-5xl py-14 lg:mb-20">
            Validados por:
          </h1>
          <div className="grid lg:grid-cols-6 grid-cols-3 w-full gap-10 2xl:gap-28 ">
            <Image
              src="/landing/Colledge.png"
              width={85}
              height={85}
              alt="Colledge"
            />
            <Image
              src="/landing/Makers.png"
              width={85}
              height={85}
              alt="makers"
            />
            <Image src="/landing/Celo.png" width={85} height={85} alt="celo" />
            <Image
              src="/landing/retro_pgf.png"
              width={85}
              height={85}
              alt="Retro"
            />
            <Image
              src="/landing/Metapool.png"
              width={85}
              height={85}
              alt="Metapool"
            />
            <Image
              src="/landing/pbs_foundation.png"
              width={85}
              height={85}
              alt="Pbs foundation"
            />
          </div>
        </section>

        <section className="w-4/5 mx-auto xl:h-[70vh] flex flex-col items-center justify-center">
          <h1 className="lg:text-center text-4xl 2xl:text-5xl lg:mb-20 lg:py-14 pb-14">
            Nuestros primeros usuarios opinan
          </h1>
          <div className="grid lg:grid-cols-3 w-full gap-10 2xl:gap-28  ">
            <Card className="py-8 px-4 flex flex-col items-center gap-6">
              <CardHeader className="flex flex-col items-center justify-center gap-3">
                <Avatar className="rounded-full  bg-green-light/75 h-40 w-40 " />
                <CardTitle>Usuario 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Phronesis ha revolucionado la forma en que gestiono mis
                  inversiones DeFi. Todo en un solo lugar, ¡es increíble!
                </p>
              </CardContent>
              <CardFooter>
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <span className="text-muted/50 ml-3">5/5</span>
              </CardFooter>
            </Card>

            <Card className="py-8 px-4 flex flex-col items-center gap-6">
              <CardHeader className="flex flex-col items-center justify-center gap-3">
                <Avatar className="rounded-full  bg-green-light/75 h-40 w-40 " />
                <CardTitle>Usuario 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  La comparación de tokens es rápida y sencilla. Phronesis me
                  ahorra mucho tiempo y esfuerzo.
                </p>
              </CardContent>
              <CardFooter>
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <span className="text-muted/50 ml-3">5/5</span>
              </CardFooter>
            </Card>

            <Card className="py-8 px-4 flex flex-col items-center gap-6">
              <CardHeader className="flex flex-col items-center justify-center gap-3">
                <Avatar className="rounded-full  bg-green-light/75 h-40 w-40 " />
                <CardTitle>Usuario 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  El análisis detallado de proyectos me ha permitido tomar
                  decisiones más informadas. ¡Altamente recomendado!
                </p>
              </CardContent>
              <CardFooter>
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <span className="text-muted/50 ml-3">5/5</span>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="w-4/5 mb-20 mx-auto flex flex-col items-center xl:h-[70vh] justify-center">
          <h1 className="lg:text-center text-4xl 2xl:text-5xl py-14 xl:mb-20">
            Preguntas frecuentes:
          </h1>
          <div className=" lg:w-3/5 ">
            <Card className="bg-[#393939] lg:px-12 text-left px-2">
              <CardContent>
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Qué es la plataforma de Phronesis?</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      ¿Qué beneficios obtengo al suscribirme a Phronesis?
                    </AccordionTrigger>
                    <AccordionContent>
                      Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                      egestas odio.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      ¿Phronesis está disponible en varios idiomas?
                    </AccordionTrigger>
                    <AccordionContent>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      ¿Cómo se monitorean varias wallets en Phronesis?
                    </AccordionTrigger>
                    <AccordionContent>
                      Etiam sit amet orci eget eros faucibus tincidunt.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="w-4/5  mx-auto flex flex-col items-center justify-around pb-52">
          <h1 className="text-4xl 2xl:text-5xl mb-20">Nuestro team:</h1>
          <div className="grid lg:grid-cols-4 grid-cols-3 gap-10 mb-20">
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Persona del team"
                height={400}
                width={150}
                src="/landing/team_pics_ariel.png"
              />

              <p>Ariel Cardenas</p>
              <p className="text-sm mt-0 text-green-dark">CEO | Fundador</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Persona del team"
                height={400}
                width={150}
                src="/landing/team_pics_jorge.png"
              />
              <p>Jorge Magni</p>
              <p className="text-sm mt-0 text-green-dark">CFO | Fundador</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Persona del team"
                height={400}
                width={150}
                src="/landing/team_pics_ale.png"
              />
              <p>Alejandro Ramos</p>
              <p className="text-sm mt-0 text-green-dark">COO | Fundador</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Persona del team"
                height={500}
                width={150}
                src="/landing/team2.png"
              />
              <p>Sergio</p>
              <p className="text-sm mt-0 text-green-dark">
                CTO | Desarrollador Backend
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 ">
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Persona del team"
                height={500}
                width={150}
                src="/landing/team2.png"
              />

              <p>Gabriel F.</p>
              <p className="text-sm mt-0 text-green-dark">
                Desarrollador Frontend
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Persona del team"
                height={500}
                width={150}
                src="/landing/team2.png"
              />

              <p>Elvis</p>
              <p className="text-sm mt-0 text-green-dark">Analista</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image
                alt="Persona del team"
                height={500}
                width={150}
                src="/landing/team2.png"
              />

              <p>Brenda</p>
              <p className="text-sm mt-0 text-green-dark">Diseñadora</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default page;
