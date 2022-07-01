import React from 'react'

import Header from './components/Header.jsx'
import { Translation } from './context/TranslationContext.jsx'
import { Routers } from './router/routes.js'
function App () {
  return (
    <Translation>
      <Header />
      <Routers />
    </Translation>
  )
}

export default App
