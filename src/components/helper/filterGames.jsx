export const filterGames = (gamesInfo, filterParameter) => {
  return gamesInfo.filter((game) => game.Name.includes(filterParameter))
}
export const fiterGamesAccordingToCategories = (gamesInfo, filterParameter) => {
  console.log('filter', filterParameter)
  return gamesInfo.filter((game) => game.Categories.includes(filterParameter))
}
