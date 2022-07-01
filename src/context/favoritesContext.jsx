import React, { createContext, useContext } from 'react'
import { addToLocalStorage } from '../components/helper/addToLocalStorage'
import { getDataFromLocalStorage } from '../components/helper/getFromLocalStorage'
import { InformationContext } from './informationContext'

export const FavoritesContext = createContext()

export const Favorites = ({ children }) => {
  const { setIsLoading, isLoading } = useContext(InformationContext)

  const addToFavorite = (game) => {
    addToLocalStorage(
      'games',
      getDataFromLocalStorage('games').map((singleGame) =>
        singleGame.Id === game.Id
          ? {
              ...singleGame,
              isFavorite: true,
              Likes: singleGame.Likes + 1,
            }
          : singleGame
      )
    )
    setIsLoading(!isLoading)
  }
  const removeFromFavorite = (game) => {
    addToLocalStorage(
      'games',
      getDataFromLocalStorage('games').map((singleGame) =>
        singleGame.Id === game.Id
          ? {
              ...singleGame,
              isFavorite: false,
              Likes: singleGame.Likes - 1,
            }
          : singleGame
      )
    )
    setIsLoading(!isLoading)
  }

  return (
    <FavoritesContext.Provider value={{ addToFavorite, removeFromFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
