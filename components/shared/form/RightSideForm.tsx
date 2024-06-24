import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Input } from "../../ui/input";
import { CustomField } from "../CustomField";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../ui/select";
import EditablePrecio from './EditablePrecio';

//Types:
interface RightSideForm{
    type: 'create' | 'update' | null,
    editablePrecio: number,
    setEditablePrecio: any,
    errors: any,
    clearErrors: any,
    decision: {
        value: number;
        label: string;
    }[],
    exchange: {
        value: number;
        label: string;
    }[],
    sector: {
        value: number;
        label: string;
    }[]
}

const RightSideForm = (
    {
        type,
        editablePrecio,
        setEditablePrecio,
        errors,
        clearErrors,
        decision,
        exchange,
        sector
    }: RightSideForm
) => {
  return (
    <div
   
  >
    <div className='hidden md:block'>
      <EditablePrecio 
          type={type}
          editablePrecio={editablePrecio}
          setEditablePrecio={setEditablePrecio}
        />  
    </div>

      

    {/**Decision */}
    <CustomField
      type={type}
      name="id_decision_proyecto"
      formLabel="Decision"
      className={` w-[90%] md:w-full ${type === "update" ? "sm:mt-6 " : "mt-0 mb-2 md:mb-0"}`}
      render={({ field }) => (
        <>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              clearErrors("id_decision_proyecto");
            }}
            defaultValue={field.value}
          >
            <SelectTrigger
              className={`${errors.id_decision_proyecto ? "border-red-500 text-red-500" : ""}`}
            >
              <SelectValue placeholder="Decision sobre el proyecto" />
            </SelectTrigger>  
            <SelectContent>
              {decision.map((decision) => (
                <SelectItem
                  key={decision.value}
                  value={String(decision.value)}
                >
                  <Badge
                    variant={
                      decision.label === "Watchlist"
                        ? "decisionWatchlist"
                        : decision.label === "Descartar"
                          ? "desicionLeave"
                          : "desicionInvest"
                    }
                  >
                    {decision.label}
                  </Badge>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.id_decision_proyecto && (
            <p className="text-red-500 text-sm mt-2">
              Decision es obligatorio
            </p>
          )}
        </>
      )}
    />
    {/**Exchange */}
    <CustomField
      type={type}
      name="idExchange"
      formLabel="Exchange"
      className=" w-[90%] md:w-full"
      render={({ field }) => (
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {exchange.map((exchange) => (
              <SelectItem
                key={exchange.value}
                value={String(exchange.value)}
              >
                <Badge
                  variant={
                    exchange.value === 1
                      ? "binance"
                      : exchange.value === 2
                        ? "coinbase"
                        : "kraken"
                  }
                >
                  {exchange.label}
                </Badge>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />

    {/**Sector */}

    <CustomField
      type={type}
      name="idSector"
      formLabel="Sector"
      className=" w-[90%] md:w-full"
      render={({ field }) => (
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sector.map((sector) => (
              <SelectItem
                key={sector.value}
                value={String(sector.value)}
              >
                <Badge>{sector.label}</Badge>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  </div>
  )
}

export default RightSideForm