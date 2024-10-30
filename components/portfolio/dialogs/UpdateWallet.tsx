import React from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle,
    DialogClose
 } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { EditIcon } from 'lucide-react';

const UpdateWallet = () => {
  return (
    <>
    <Dialog>
        <DialogTrigger>
        <EditIcon/>

        </DialogTrigger>
        <DialogContent className="max-h-[50vh] md:max-h-full md:min-w-[70%] overflow-auto px-12">
            <DialogTitle className="mb-7 font-bold text-2xl">
                Renombrar wallet 
            </DialogTitle>
            
                    <div className="mb-3 w-full">
                        <h2 className="mt-0 mb-3">
                            Nombre antiguo

                        </h2>
                        <Input type="text" disabled className="w-full border dark:placeholder:text-white placeholder:text-primary" placeholder="00000000000000000000000000x00000000000x000000"/>


                    </div>
                    
                    
                        
                        
                        <div className='w-full'>
                                <h2 className="mt-0 mb-3">
                                    Nuevo nombre
                                </h2>
                            
                            <Input type="text" className="w-full border dark:placeholder:text-white placeholder:text-primary" placeholder="Wallets de Airdrop EVM"/>
                        </div>
                    
                    
                
                <div className="grid md:grid-cols-2 gap-7">
                    <DialogClose className="border rounded-md dark:border-input border-foreground bg-background hover:bg-primary/10 hover:text-accent-foreground ">
                        Cancelar
                    </DialogClose>
                    <Button className='bg-green-dark '>
                        Aceptar
                    </Button>
                </div>

            
            
           
                
                
                    
            
            {/* Cancelar boton */}
            
        </DialogContent>
    </Dialog>
</>
  )
}

export default UpdateWallet