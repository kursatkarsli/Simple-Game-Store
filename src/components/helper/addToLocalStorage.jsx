export const addToLocalStorage = (key, value) => {
  console.table(key, value)
  localStorage.setItem(key, JSON.stringify(value))
}
