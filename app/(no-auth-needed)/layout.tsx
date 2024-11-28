import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-background via-darkerBackground to-primary  dark:bg-hero-pattern bg-no-repeat md:bg-cover ">
      
        {children}
      
    </div>
  );
};

export default Layout;
