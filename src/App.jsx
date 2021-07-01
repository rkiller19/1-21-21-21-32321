import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ConnectWallet from './pages/connectWallet'
import Staking from './pages/staking'
import Farming from './pages/farming'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ConnectWallet} exact />
          <Route path="/farming" component={Farming} />
          <Route path="/staking" component={Staking} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App