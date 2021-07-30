import React, { FC } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'

type Props = {}

const Routes: FC<Props> = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default Routes