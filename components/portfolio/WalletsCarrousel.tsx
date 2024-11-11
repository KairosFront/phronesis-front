"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
//Values and utils
import { usePrivy } from "@privy-io/react-auth";
import UpdateWallet from "./dialogs/UpdateWallet";

const WalletsCarrousel = () => {
  const { user } = usePrivy();

  const wallet = user?.wallet?.address || user?.email?.address;

  return (
    <>
      {/* Provisional */}
      {wallet ? (
        <Card className="p-6 h-36 w-48 border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45 ">
          <CardContent className="font-extrabold flex flex-col justify-center gap-4">
            <Link href={`/portfolio/${wallet}`}>
              {(wallet?.length ?? 0 > 10)
                ? `${wallet?.substring(0, 5)}...${wallet?.substring(wallet?.length - 3)}`
                : wallet}
            </Link>
            <UpdateWallet />
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
