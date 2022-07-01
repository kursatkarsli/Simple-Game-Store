import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { addToLocalStorage } from '../components/helper/addToLocalStorage'
import { getDataFromLocalStorage } from '../components/helper/getFromLocalStorage'
export const InformationContext = createContext()

export const Information = ({ children }) => {
  const [gamesInfo, setGamesInfo] = useState([])
  const [InputValue, setInputValue] = useState('')
  const [categoryInputValue, setCategoryInputValue] = useState('')
  const [inputType, setInputType] = useState('')

  useEffect(() => {
    ;(async function getDataFromJSON() {
      const response = await axios.get('simple_game_store_db.json')
      const data = await response.data

      addToLocalStorage(
        'games',
        data.map((item) => ({
          ...item,
          inBasket:
            getDataFromLocalStorage('games').find((game) => game.Id === item.Id)
              .inBasket === true
              ? true
              : false,
        }))
      )
    })()

    setGamesInfo(getDataFromLocalStorage('games'))
  }, [])

  return (
    <InformationContext.Provider
      value={{
        gamesInfo,
        InputValue,
        setGamesInfo,
        setInputValue,
        inputType,
        setInputType,
        categoryInputValue,
        setCategoryInputValue,
      }}
    >
      {children}
    </InformationContext.Provider>
  )
}
