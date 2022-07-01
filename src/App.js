import React from 'react'

import Header from './components/Header.jsx'
import { Routers } from './router/routes.js';
function App () {
  return (
    <div >
      <Header />
      <Routers />
    </div>
  );
}

export default App;
