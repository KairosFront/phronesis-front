'use client'
import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle,
    DialogClose
 } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'

//server action


//Shadcn staff for forms
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { handleCreateWallet } from '@/actions/walletsActions'
import { useWallets } from '@/hooks/useWallets'



const AddWallet = () => {

    const [guzma, setGuzma] = React.useState('');
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [open, setOpen] = React.useState(false);


    

    useEffect(() => {
        if (
          typeof window !== "undefined" &&
          window.localStorage.getItem("guzma") !== null
        ) {
          setGuzma(window.localStorage.getItem("guzma")?? '');
        }
        setSuccess(false);
        setError(false);
      }, []);

    const formSchema = z.object({
        wallet: z.string({
            required_error: "Este campo es requerido",
        })
      });


        //Initial values for the form
    const initialValues = { 
        wallet: "",
    };

    
    //Defining the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    const {mutate} = useWallets(guzma);

    async function submitHandler(data: z.infer<typeof formSchema>) {
        setError(false)
        console.log(data);
        try {
            const uId = Number(guzma);
            const response = await handleCreateWallet(uId, data.wallet);

            if(response){
                console.log('Wallet added');
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setOpen(false);
                }, 2000);
                
                mutate();
            } else {
                setError(true);
                console.log('Error al guardar la wallet');
            }
            console.log(response);
        } catch (error: any) {
            console.log(error);
        }
    }

    // const openPrivyModal = () => {
    //     console.log('Open privy modal');
    // }



  return (

    
    <>
        <Dialog open={open}>
            <DialogTrigger onClick={() => setOpen(true)}>
            
            <Card>
                <CardContent className="flex flex-col items-center justify-center gap-5 min-h-56 w-48 border-grey-light/90 dark:bg-grey-light/10 dark:border-white/45">
                    <Plus className='h-28 w-28'/>
                    
                    Agregar wallet
                    
                    
                </CardContent>
            </Card>

            </DialogTrigger>
            <DialogContent className="max-h-[50vh] md:max-h-full md:min-w-[70%] overflow-auto px-12">
                {
                    error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                          
                            <span className="block sm:inline">Error al guardar la wallet!</span>
                        </div>
                    )
                }
                {
                    success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                           
                            <span className="block sm:inline">Wallet guardada correctamente!</span>
                        </div> 
                    )
                }

                <DialogTitle className="mb-7 font-bold text-2xl">
                    Añadir wallet
                </DialogTitle>
                <section className='w-full'>
                <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(submitHandler)}>
                <div className="flex gap-7 items-center mb-7">


                    <FormField
                        control={form.control}
                        name="wallet"
                        render={({ field }) => (
                            <FormItem className="w-full mt-6">
                            
                            <FormControl>
                                <Input
                                {...field}
                                type="text"
                                className="w-full border dark:placeholder:text-white placeholder:text-primary" 
                                placeholder="Pega tu dirección pública, llave de billetera HD o ENS"
                               
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                   
                        
                        
                        {/* <div className='w-72'>
                            
                            <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Selecciona la cadena"/>
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="eth">
                                    Ethereum
                                </SelectItem>
                                <SelectItem value="cad2">
                                    Cadena 2
                                </SelectItem>
                                <SelectItem value="cad3"> 
                                    Cadena 3
                                </SelectItem>

                                </SelectContent>
                                
                            </Select>
                        </div> */}
                    
                    
                </div>
                    <div className="grid md:grid-cols-2 gap-7">
                    <DialogClose className="border rounded-md dark:border-input border-foreground bg-background hover:bg-primary/10 hover:text-accent-foreground ">
                        Cancelar
                    </DialogClose>
                    <Button className='bg-green-dark ' type='submit'>
                        Añadir
                    </Button>

                       
                       
                           
                          
                    </div>
                    </form>
                        
                    </Form>

                </section>
                 
               
                    
                    
                        
                
                {/* Cancelar boton  */}
                
            </DialogContent>
        </Dialog>
    </>
  )
}

export default AddWallet