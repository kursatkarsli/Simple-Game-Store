import React, { createContext, useContext, useState } from 'react'
import { addToLocalStorage } from '../components/helper/addToLocalStorage'
import { getDataFromLocalStorage } from '../components/helper/getFromLocalStorage'
import { InformationContext } from './informationContext'

export const BasketContext = createContext()

export const Basket = ({ children }) => {
  const [basket, setBasket] = useState([])
  const { setGamesInfo } = useContext(InformationContext)
  const addToBasket = (game) => {
    addToLocalStorage(
      'games',
      getDataFromLocalStorage('games')?.map((singleGame) =>
        singleGame.Id === game.Id
          ? { ...singleGame, inBasket: true }
          : singleGame
      )
    )
    setGamesInfo(true)
  }
  const removeFromBasket = (game) => {
    addToLocalStorage(
      'games',
      getDataFromLocalStorage('games')?.map((singleGame) =>
        singleGame.Id === game.Id
          ? { ...singleGame, inBasket: false }
          : singleGame
      )
    )
    setGamesInfo(false)
  }

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  )
}
