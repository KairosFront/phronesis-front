import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="flex flex-col justify-center items-center mx-auto w-4/5 md:w-3/5 2xl:w-1/2 min-h-screen">
        <Image
          className="xl:mb-20 mb-6 hidden dark:block"
          alt="kairos"
          src="/backgrounds/kairos-login.svg"
          width={250}
          height={150}
        ></Image>

        <Image
          className="xl:mb-20 mb-6 dark:hidden"
          alt="kairos"
          src="/img-login-light.png"
          width={250}
          height={150}
        ></Image>

        {children}
      </div>
  );
};

export default Layout;
