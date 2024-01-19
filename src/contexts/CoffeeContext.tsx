import { ReactNode, createContext, useState } from 'react'
import { coffees } from '../../data.json'

export interface Coffee {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

interface CoffeeContextType {}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  return <CoffeeContext.Provider value={{}}>{children}</CoffeeContext.Provider>
}
