"use client";
import React from 'react'
import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';
import Image from 'next/image';

const PortfolioLink = () => {
    const { user } = usePrivy();
    const wallet = user?.wallet?.address;
  return (
    <>
        <Link className="header-nav_text" href={`/portfolio/${wallet}`}>
                    <Image
                      src="/icons/navigation/wallet-fill.svg"
                      alt="wallet"
                      height={25}
                      width={25}
                      className="dark:inline hidden "
                    />
                    <Image
                      src="/dark/icons/navigation/wallet.png"
                      alt="wallet"
                      height={25}
                      width={25}
                      className="inline dark:hidden"
                    />
                    Portafolio
                  </Link>
    </>
  )
}

export default PortfolioLink