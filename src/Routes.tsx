import React, { FC } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Careers from './pages/Careers'
import FEDeveloper from './pages/FEDeveloper'

type Props = {}

const Routes: FC<Props> = () => {
  return (
    <>
      <Switch>
        <Route path="/careers/senior-frontend-developer">
          <FEDeveloper />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default Routes