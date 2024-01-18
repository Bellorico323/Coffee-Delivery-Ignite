import { ReactNode, createContext, useState } from 'react'
import { CoffeeProps } from '../pages/Home/components/Card'

interface ProductsList {
  coffeeData: CoffeeProps
  quantity: number
}

interface CoffeeContextType {
  coffeeList: ProductsList[]
  setCoffeeList: (state: ProductsList[]) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<ProductsList[]>([])

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        setCoffeeList,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
