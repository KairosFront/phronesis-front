"use client";
import React, { useEffect } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { usePortafolio } from "@/hooks/usePortafolio";
import SkeletonTable from "../shared/skeletons/SkeletonTable";
import { Balances } from "@/index";
import { useSelectNetwork } from "@/hooks/usePortafolio";

interface TokensInfoProps {
  wallet: string;
}

const TokensInfo = ({wallet}: TokensInfoProps) => {
  const { network } = useSelectNetwork();

  // const [address, setAddress] = React.useState("");
  const [tokensData, setTokensData] = React.useState<Balances[]>();
  const [loading, setLoading] = React.useState(false);
  // React.useEffect(() => {
  //   const addr = window.localStorage.getItem("wallet");
  //   if (typeof window !== "undefined" && addr != null) {
  //     setAddress(addr);
  //   }
  // }, []);
  const { portafolio, isLoading } = usePortafolio(wallet);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading]);
  useEffect(() => {
    if (portafolio) {
      switch (network) {
        case "ethereum":
          setTokensData(portafolio.ethereum.Balances);
          break;
        case "arbitrum":
          setTokensData(portafolio.arbitrum.Balances);
          break;
        // case "scroll":
        //   setTokensData(portafolio.scroll.Balances);
        //   break;
        case "polygon":
          setTokensData(portafolio.polygon.Balances);
          break;
        case "base":
          setTokensData(portafolio.base.Balances);
          break;
        case "optimism":
          setTokensData(portafolio.optimism.Balances);
          break;
        case "linea":
          setTokensData(portafolio.linea.Balances);
          break;
        case "avalanche":
          setTokensData(portafolio.avalanche.Balances);
          break;
        case "gnosis":
          setTokensData(portafolio.gnosis.Balances);
          break;
      }
    }
  }, [portafolio, network]);

  return (
    <>
      {loading && <SkeletonTable />}

      {tokensData &&
        tokensData.map((token, index) => {
          return (
            <TableRow key={index}>
              <TableCell>
                <div className="flex gap-4 items-center ">
                {token.logo ? (
                <Image
                  src={token.logo}
                  alt={token.simbolo}
                  width={30}
                  height={30}
                />
              ) : (
                <>
                  <Image
                    className="dark:block hidden"
                    src={"/kairos-main.svg"}
                    alt="Kairos"
                    width={30}
                    height={30}
                  />
                  <Image
                    className="dark:hidden block"
                    src={"/kairos-logo-light.svg"}
                    alt="Kairos"
                    width={30}
                    height={30}
                  />
                </>
              )
            
            }
                  <span>{token.simbolo}</span>
                </div>
              </TableCell>
              <TableCell>$ {token.valorUnitCrypto.toLocaleString()}</TableCell>
              <TableCell>{token.balanceCrypto.toLocaleString()}</TableCell>
              <TableCell>
                $ {token.balanceFiat.toFixed(2).toLocaleString()}
              </TableCell>
              {/* <TableCell>{token.USDValue}</TableCell> */}
            </TableRow>
          );
        })}
    </>
  );
};

export default TokensInfo;
