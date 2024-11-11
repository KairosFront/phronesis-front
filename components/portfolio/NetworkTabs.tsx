"use client";
import React from "react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useSelectNetwork } from "@/hooks/usePortafolio";
import Image from "next/image";

const NetworkTabs = () => {
  const { setNetwork, network } = useSelectNetwork();

  React.useEffect(() => {
    setNetwork("arbitrum");
  }, []);

  return (
    <>
      <Tabs>
        <TabsList className="gap-5 grid lg:grid-cols-5 md:grid-cols-4 " defaultValue="arb">
          <TabsTrigger
            onClick={() => setNetwork("arbitrum")}
            className={`border border-black/80 dark:border-foreground  rounded-sm text-2xl font-bold 
             }`}
            value="arb"
          >

            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src="/icons/networks/Arbitrum.png"
                alt="Arbitrum"
              />
              <p> Arbitrum</p>

              
            </div>
           
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setNetwork("ethereum")}
            className={`border border-black/80 dark:border-foreground  rounded-sm text-2xl font-bold 
              `}
            value="asja"
          >
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src="/icons/networks/Ethereum.png"
                alt="Arbitrum"
              />
              <p> Ethereum</p>

              
            </div>
          </TabsTrigger>
          {/* <TabsTrigger
            onClick={() => setNetwork("scroll")}
            className={`border border-black/40 dark:border-foreground rounded-sm text-2xl font-bold 
             `}
            value="advja"
          >
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src="/icons/networks/Scroll.png"
                alt="Arbitrum"
              />
              <p> Scroll</p>

              
            </div>
            
          </TabsTrigger> */}
          <TabsTrigger
            onClick={() => setNetwork("optimism")}
            className={`border border-black/80 dark:border-foreground rounded-sm text-2xl font-bold 
             `}
            value="asdjha"
          >
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src="/icons/networks/Optimism.png"
                alt="Arbitrum"
              />
              <p> Optimism</p>

              
            </div>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setNetwork("polygon")}
            className={`border border-black/80 dark:border-foreground rounded-sm text-2xl font-bold 
             `}
            value="adjala"
          >
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src="/icons/networks/Polygon.png"
                alt="Arbitrum"
              />
              <p> Polygon</p>

              
            </div>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setNetwork("base")}
            className={`border border-black/80 dark:border-foreground rounded-sm text-2xl font-bold 
             `}
            value="adueja"
          >
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src="/icons/networks/Base.png"
                alt="Arbitrum"
              />
              <p> Base</p>

              
            </div>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setNetwork("linea")}
            className={`border border-black/80 dark:border-foreground rounded-sm text-2xl font-bold 
             `}
            value="adeja"
          >
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src="/icons/networks/linea.png"
                alt="Linea"
              />
              <p> Linea</p>

              
            </div>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setNetwork("avalanche")}
            className={`border border-black/80 dark:border-foreground rounded-sm text-2xl font-bold 
             `}
            value="adejoa"
          >
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src=""
                alt="Avalanche"
              />
              <p> Avalanche</p>

              
            </div>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setNetwork("gnosis")}
            className={`border border-black/80 dark:border-foreground rounded-sm text-2xl font-bold 
             `}
            value="aderja"
          >
            <div className="flex items-center gap-2">
              <Image
                height={10}
                width={40}
                src=""
                alt="Gnosis"
              />
              <p> Gnosis</p>

              
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {/* <Button variant={'outline'} size={"lg"} className='text-2xl bg-transparent text-primary font-bold dark:text-white'>Ethereum</Button>
        <Button variant={'outline'} size={"lg"} className='text-2xl bg-transparent text-primary font-bold dark:text-white'>Scroll</Button>
        <Button variant={'outline'} size={"lg"} className='text-2xl bg-transparent text-primary font-bold dark:text-white'>Arbitrum</Button> */}
    </>
  );
};

export default NetworkTabs;