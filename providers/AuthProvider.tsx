"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/actions/login";
import { handleRegister } from "@/actions/register";
// import { useUserData} from "@/hooks/useUserData"
import { useDialogInstructions, useDialogNotifications } from "@/hooks/useDialogs";
import { useAuthLoadingStatus } from "@/hooks/useLoading";
import { useWallets } from "@privy-io/react-auth";

function PrivyProviderWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // const {setUserId} = useUserData();
  const { setIsOpenInstr } = useDialogInstructions();
  const { setNumberOfAccess } = useDialogNotifications();
  const { setIsLoading } = useAuthLoadingStatus();
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      onSuccess={(user, isNewUser) => {
        const id = user?.id;
        const name =
          user?.wallet?.address ||
          user?.google?.email ||
          user?.email?.address ||
          user?.twitter?.username ||
          user?.github?.username ||
          user?.linkedin?.name ||
          user?.discord?.username;

        const foo = async () => {
          setIsLoading(true);
          try {
            if (isNewUser) {
              const data = await handleRegister(id, name);
              if (data === false) {
                router.push("/completed");
              } else {
                if (typeof window !== "undefined" && data !== null) {
                  window.localStorage.setItem("guzma", data.toString());
                  if (user.wallet?.address) {
                    window.localStorage.setItem("wallet", user.wallet.address);
                  }
                }
                setIsOpenInstr(true);
                router.push("/dashboard");
              }
            }
            //If user is not a new user:
            else {
              const data = await handleLogin(id, name);
              if (data === false) {
                router.push("/completed");
              } else {
                if (typeof window !== "undefined" && data !== null) {
                  window.localStorage.setItem("guzma", data.toString());

                  if(window.localStorage.getItem("sessionNumberVersion9") === null) {
                    window.localStorage.setItem("sessionNumberVersion9", "0");
                    window.localStorage.removeItem("sessionNumberVersion1");
                    setNumberOfAccess(0);
                  } else{
                    setNumberOfAccess(1)
                  }
                  
                  
                  if (user.wallet?.address) {
                    window.localStorage.setItem("wallet", user.wallet.address);
                  }
                }
                router.push("/dashboard");
              }
            }
          } catch (error) {
            alert("Error al logear al usuario");
          }
          setIsLoading(false);
        };
        foo();
      }}
    >
      {children}
    </PrivyProvider>
  );
}

export default PrivyProviderWrapper;
