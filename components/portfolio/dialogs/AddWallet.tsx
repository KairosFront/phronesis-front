import React from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle,
    DialogClose
 } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'


const AddWallet = () => {
  return (
    <>
        <Dialog>
            <DialogTrigger>
            <Button className='bg-green-dark '>
                    Agregar wallet de otra cadena + 
                </Button>

            </DialogTrigger>
            <DialogContent className="max-h-[50vh] md:max-h-full md:min-w-[70%] overflow-auto px-12">
                <DialogTitle className="mb-7 font-bold text-2xl">
                    Añadir wallet
                </DialogTitle>
                <section className='w-full'>
                <div className="flex gap-7 items-center mb-7">
                       
                           
                            <Input type="text" className="w-full border dark:placeholder:text-white placeholder:text-primary" placeholder="Pega tu dirección pública, llave de billetera HD o ENS"/>
                        
                        <div className='w-72'>
                            
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
                        </div>
                    
                    
                    </div>
                    <div className="grid md:grid-cols-2 gap-7">
                    <DialogClose className="border rounded-md dark:border-input border-foreground bg-background hover:bg-primary/10 hover:text-accent-foreground ">
                        Cancelar
                    </DialogClose>
                    <Button className='bg-green-dark '>
                        Añadir
                    </Button>
                    </div>

                </section>
                
               
                    
                    
                        
                
                {/* Cancelar boton */}
                
            </DialogContent>
        </Dialog>
    </>
  )
}

export default AddWallet