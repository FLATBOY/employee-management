import React from 'react'
import getCurrentDate from '../../utils/CurrentDate.js'

const Header = () => {
  return (
    <>
        <h1>Employee Table</h1>
        <getCurrentDate />
    </>
  )
}

export default Header