import useSWR from "swr";
import { useMemo } from "react";
import { create } from "zustand";
// import { SelectNetworkProps } from "@/index";

// import { getBalances, getDefiPositions } from "@/services/backend/balances";
// import { BalancesResponse, DefiPositions } from "..";
// import {
//   handleGetBalances,
//   handleGetPositions,
// } from "@/actions/portfolioActions";
import { handleGetWallets } from "@/actions/walletsActions";


export const useWallets = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    [`getWallets`, userId],
    () => handleGetWallets(userId),
  );

//   const portafolio = useMemo(() => data as BalancesResponse, [data]);

  return {
    data,
    isLoading,
    isError: error,
    mutate,
  };
};

// export const useSelectNetwork = create<SelectNetworkProps>((set) => ({
//   network: "arbitrum",
//   setNetwork(newNetwork: string) {
//     set({ network: newNetwork });
//   },
// }));
