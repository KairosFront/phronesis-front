"use client";

import React, { useEffect } from "react";
// import {getBalances} from '@/services/backend/balances'
import { usePortafolio, useDefiPositions } from "@/hooks/usePortafolio";
import Loading from "../shared/Loading";
import { useSelectNetwork } from "@/hooks/usePortafolio";

interface TotalBalanceProps {
  section: "wallet" | "defi";
  wallet: string
}

const TotalBalance = ({ section, wallet }: TotalBalanceProps) => {
  const { network } = useSelectNetwork();

  const [balance, setBalance] = React.useState(0);
  // const [address, setAddress] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  // useEffect(() => {
  //   const addr = window.localStorage.getItem("wallet");
  //   if (typeof window !== "undefined" && addr != null) {
  //     setAddress(addr);
  //   }
  // }, []);

  const { portafolio, isLoading } = usePortafolio(wallet);
  const { defiPositions, isLoading: isLoadingDefi } = useDefiPositions(wallet);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (section === "wallet" && portafolio) {
      switch (network) {
        case "ethereum":
          setBalance(portafolio.ethereum.TotalBalance);
          break;
        case "arbitrum":
          setBalance(portafolio.arbitrum.TotalBalance);
          break;
        // case "scroll":
        //   setBalance(portafolio.scroll.TotalBalance);
        //   break;
        case "polygon":
          setBalance(portafolio.polygon.TotalBalance);
          break;
        case "optimism":
          setBalance(portafolio.optimism.TotalBalance);
          break;
        case "base":
          setBalance(portafolio.base.TotalBalance);
          break;
        case "linea":
          setBalance(portafolio.linea.TotalBalance);
          break;
        case "avalanche":
          setBalance(portafolio.avalanche.TotalBalance);
          break;
        case "gnosis":
          setBalance(portafolio.gnosis.TotalBalance);
          break;
      }
    }
    if (section === "defi" && defiPositions) {
      switch (network) {
        case "ethereum":
          setBalance(defiPositions.ethereum.totalBalance);
          break;
        case "arbitrum":
          setBalance(defiPositions.arbitrum.totalBalance);
          break;
        // case "scroll":
        //   setBalance(defiPositions.scroll.totalBalance);
        //   break;
        case "base":
          setBalance(defiPositions.base.totalBalance);
          break;
        case "polygon":
          setBalance(defiPositions.polygon.totalBalance);
          break;
        case "optimism":
          setBalance(defiPositions.optimism.totalBalance);
          break;
        case "linea":
          setBalance(defiPositions.linea.totalBalance);
          break;
        case "avalanche":
          setBalance(defiPositions.avalanche.totalBalance);
          break;
        case "gnosis":
          setBalance(defiPositions.gnosis.totalBalance);
          break;  
      }
    }
  }, [portafolio, network]);

  return (
    <div>
      {loading && <Loading />}$ {balance.toLocaleString()}
    </div>
  );
};

export default TotalBalance;
