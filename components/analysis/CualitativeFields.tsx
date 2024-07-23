
import React from 'react'
import { Input } from "@/components/ui/input";
import { CustomField } from "@/components/shared/CustomField";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { AnalisysCatalogs } from '@/index';

interface CualitativeFieldsProps {
    mode: "edit" | "add";
    data: AnalisysCatalogs;
    setValuesToCalculate: (value: any) => void;
}

const CualitativeFields = ({mode, data, setValuesToCalculate}: CualitativeFieldsProps) => {
   
    const fieldsMapping = [
        { name: "alianzas", formLabel: "Alianzas" },
        { name: "auditorias", formLabel: "Auditorias" },
        { name: "equipo", formLabel: "Equipo" },
        { name: "comunidad", formLabel: "Comunidad" },
        { name: "financeCual", formLabel: "Financiamientos" },
        { name: "casosUso", formLabel: "Casos de uso" },
        { name: "roadmap", formLabel: "Roadmap" },
        { name: "whitepaper", formLabel: "Whitepaper" },
      ];
  return (


    <>
    {
        data.map((item, index: number) => (
            <CustomField
            key={index}
                type={mode}
                name={fieldsMapping[index] ? fieldsMapping[index].name : "defaultName"}
                formLabel={""}
                className=" w-10/12 text-left"
                render={({ field }) => (
                    <Select onValueChange={(value) => {
                        field.onChange(value);
                        // const a = item.find((item: any) => item.id === value)?.value  as number
                        // console.log(a)
                        setValuesToCalculate((prevValues: number[] = []) => { // Asigna un valor predeterminado a prevValues
                            const a = item.find((item) => String(item.id) === value)?.value as number;
                          
                            console.log(a);
                            // Asegúrate de que el valor no esté ya en el arreglo
                            if (!prevValues.includes(a)) {
                              return [...prevValues, a];
                            }
                            return prevValues;
                          });
                        
                      }
                        } defaultValue={field.value}>
                    <SelectTrigger >
                        <SelectValue placeholder={fieldsMapping[index] ? fieldsMapping[index].formLabel : field.value}/>
                        
                        
                    </SelectTrigger>
                    <SelectContent>
                        {
                            item.map((item) => (
                                <SelectItem
                                className='hover:bg-primary/20'
                                    key={item.id}
                                    value={String(item.id)}
                                >
                                    {item.item}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                    </Select>
                )}
            />
        ))
    }
        
       
    </>
  )
}

export default CualitativeFields