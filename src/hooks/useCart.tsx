import { useContext } from 'react'
import { CartContext } from '../contexts/CoffeeContext'

export function useCart() {
  return useContext(CartContext)
}
