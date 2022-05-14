import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <Wrapper>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/products'}>Products</NavLink>
      <NavLink to={'/cart'}>Cart</NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  a {
    padding: 1rem;
  }
`

export default Navbar
