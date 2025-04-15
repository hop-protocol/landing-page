import React, { FC } from 'react'
import {
  Route,
  Routes as RouterRoutes
} from 'react-router-dom'
import Home from './pages/Home'

type Props = {}

const Routes: FC<Props> = () => {
  return (
    <RouterRoutes>
        <Route path="/" element={<Home />} />
    </RouterRoutes>
  )
}

export default Routes