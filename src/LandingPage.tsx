import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { Outlet } from 'react-router-dom'

type Props = {}

const LandingPage: React.FC = (_props: Props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default LandingPage
