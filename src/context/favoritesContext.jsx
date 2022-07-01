import React, { createContext, useState } from 'react'

export const FavoritesContext = createContext()

export const Favorites = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const addToFavorite = (game) => {
    setFavorites([...favorites, game])
  }
  const removeFromFavorite = (game) => {
    setFavorites(favorites.filter((item) => game.Id === item.Id))
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
