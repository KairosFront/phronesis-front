"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
//Values and utils
import { usePrivy } from "@privy-io/react-auth";
import UpdateWallet from "./dialogs/UpdateWallet";
import { Avatar } from "../ui/avatar";
import { Dot } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const WalletsCarrousel = () => {
  const { user } = usePrivy();

  const wallet = user?.wallet?.address || user?.email?.address;

  return (
    <>
      {/* Provisional */}
      {wallet ? (
        <Card className="p-5 h-56 w-48 relative border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45 ">
          <div className="rounded-full border absolute top-2 left-4 h-4 w-4">
            <Avatar className=""/>
          </div>
          <Popover>
            <PopoverTrigger asChild className="cursor-pointer rounded-full border absolute top-2 h-4 w-4 right-4">
              
              <Dot className="h-3 w-3" />
              
              
            </PopoverTrigger>
            <PopoverContent className="px-3 py-2 dark:text-foreground">
            <UpdateWallet />
            Eliminar wallet
              

              
            </PopoverContent>
          </Popover>


          <CardContent className="font-extrabold flex flex-col justify-center gap-5 items-center">
          <Avatar className='rounded-full  bg-green-light/40 h-20 w-20 '/>
            <Link href={`/portfolio/${wallet}`} className="hover:underline">
              {(wallet?.length ?? 0 > 10)
                ? `${wallet?.substring(0, 5)}...${wallet?.substring(wallet?.length - 3)}`
                : wallet}
            </Link>
            <p>$1,230</p>
            
          </CardContent>
        </Card>
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
