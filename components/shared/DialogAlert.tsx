"use client";
import React from "react";
//types:
import { DialogAlertProps } from "@/index";

//Hooks:
import { useUserTableData } from "@/hooks/useUserData";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { handleDeleteProyect } from "@/actions/proyectActions";

const DialogAlert = (props: DialogAlertProps) => {
  //to modify the global state
  const { setUserTableData } = useUserTableData();

  const [count, setCount] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onDeleteProject = async () => {
    const deleted = await handleDeleteProyect(props.id);
    console.log(deleted);
    if (deleted.error) {
      setError(deleted.error);
    } else {
      setCount(count + 1);
      console.log(count);
      setUserTableData(["Cambio" + count]);
      props.close();
    }
  };
  return (
    <>
      {props.action === "deleteProyect" ? (
        <AlertDialog>
          <AlertDialogTrigger>
            <span className="md:hidden text-xs text-red-500">Eliminar</span>
            <Button variant={"destructive"} className="hidden md:inline">
              Eliminar
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-96">
            <AlertDialogHeader>
              <AlertDialogTitle>
                ¿Seguro que quieres eliminar el proyecto {props.name}?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Vas a eliminar este proyecto de tu Dashboard de seguimiento
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="my-3">
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>
                <Button
                  variant="destructive"
                  onClick={onDeleteProject}
                  className="w-full"
                >
                  Sí, eliminar
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="destructive">Logout</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-96">
            <AlertDialogHeader>
              <AlertDialogTitle>
                Seguro que quieres cerrar sesión
              </AlertDialogTitle>
              <AlertDialogDescription>
                Cerrarás tu sesión y tendrás que volver a iniciar sesión
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="my-3">
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>
                <Button variant="destructive" className="w-full">
                  Si, cerrar sesión
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default DialogAlert;
