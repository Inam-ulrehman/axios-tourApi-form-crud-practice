import { React, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { getProductsItems } from '../features/products/productsSlice'
import { useDispatch } from 'react-redux'

const SharedLayout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsItems())
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default SharedLayout
