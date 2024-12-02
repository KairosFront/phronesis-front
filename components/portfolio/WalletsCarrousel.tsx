"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
//Values and utils
import { usePrivy } from "@privy-io/react-auth";
import UpdateWallet from "./dialogs/UpdateWallet";
import { Avatar } from "../ui/avatar";
import { Car, Dot } from "lucide-react";
import { useWallets } from "@/hooks/useWallets";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {Wallet} from "@/index";
import { CarouselItem } from "../ui/carousel";
import DeleteWallet from "./dialogs/DeleteWallet";


const WalletsCarrousel = () => {
  const { user } = usePrivy();

  const wallet = user?.wallet?.address || user?.email?.address;

  const [guzma, setGuzma] = React.useState('');
  const [wallets, setWallets] = React.useState<Wallet[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage.getItem("guzma") !== null) {
      setGuzma(window.localStorage.getItem("guzma") ?? '');
    }
  }, []);


  const {data, isLoading, isError} = useWallets(guzma);


  useEffect(() => {
    if (data) {
      setWallets(data as Wallet[]);
    }
  }, [data]);


  console.log(data)




  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {wallet ? (

        <>
        <CarouselItem className='flex justify-center basis-1/3'>
          <Card className="p-5 h-56 w-48 relative border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45 ">
            <div className="rounded-full border absolute top-2 left-4 h-4 w-4">
              <Avatar className=""/>
            </div>
            {/* <Popover>
              <PopoverTrigger asChild className="cursor-pointer rounded-full border absolute top-2 h-4 w-4 right-4">
                
                <Dot className="h-6 w-6   " />
                
                
              </PopoverTrigger>
              <PopoverContent className="px-3 py-2 dark:text-foreground flex flex-col ">
              {/* <UpdateWallet /> */}
              {/* <DeleteWallet userId={Number(guzma)} wallet={wallet}/>* 
                

                
              </PopoverContent>
            </Popover> */}


            <CardContent className="font-extrabold flex flex-col justify-center gap-5 items-center">
            <Avatar className='rounded-full  bg-green-light/40 h-20 w-20 '/>
              <Link href={`/portfolio/${wallet}`} className="hover:underline">
                {(wallet?.length ?? 0 > 10)
                  ? `${wallet?.substring(0, 5)}...${wallet?.substring(wallet?.length - 3)}`
                  : wallet}
              </Link>
              {/* <p>$1,230</p> */}
              
            </CardContent>
          </Card>
        </CarouselItem>
          {wallets && wallets.map((wallet) => (
            <CarouselItem className='flex justify-center basis-1/3'>
               <Card className="p-5 h-56 w-48 relative border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45 ">
              <div className="rounded-full border absolute top-2 left-4 h-4 w-4">
                <Avatar className=""/>
              </div>
              <Popover>
                <PopoverTrigger asChild className="cursor-pointer rounded-full border absolute top-2 h-4 w-4 right-4">
                  
                  <Dot className="h-6 w-6" />
                  
                  
                </PopoverTrigger>
                <PopoverContent className="px-3 py-2 dark:text-foreground flex flex-col ">
                {/* <UpdateWallet /> */}
                <DeleteWallet userId={Number(guzma)} wallet={wallet.address}/>

                  
    
                  
                </PopoverContent>
              </Popover>
    
    
              <CardContent className="font-extrabold flex flex-col justify-center gap-5 items-center">
              <Avatar className='rounded-full  bg-green-light/40 h-20 w-20 '/>
                <Link href={`/portfolio/${wallet.address}`} className="hover:underline">
                  {(wallet.address?.length ?? 0 > 10)
                    ? `${wallet.address?.substring(0, 5)}...${wallet.address?.substring(wallet.address?.length - 3)}`
                    : wallet.address}
                </Link>
                {/* <p>$1,230</p> */}
                
              </CardContent>
            </Card>
            </CarouselItem>
           
          ))}
        </>
        
      ) : (
        <Card className="p-6 h-36 w-36 border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45 ">
          <CardContent className="font-extrabold">
            No estás conectado a travez de una wallet
            <UpdateWallet />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default WalletsCarrousel;
