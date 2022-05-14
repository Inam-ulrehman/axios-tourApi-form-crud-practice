import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
  const { productID } = useParams()
  const { productsItems, isLoading } = useSelector((state) => state.products)
  const singleProduct = productsItems.find((item) => item.id === productID)
  const { name, info, price, image } = singleProduct
  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )
  }
  return (
    <Wrapper>
      <div className='container'>
        <div className='image'>
          <img className='img' src={image} alt='' />
        </div>
        <div className='text'>
          <h4>{name}</h4>
          <p>Price : $ {price}</p>
          <Link to={'/products'}>Back to products</Link>
        </div>
      </div>
      <hr />
      <div className='description'>
        <h1 className='title'>Description</h1>
        <div className='title-underline'></div>
        <p>{info}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  img {
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
    h4 {
    }
    a {
      background: var(--primary-1);
      padding: 0.8rem;
      border-radius: var(--borderRadius);
      color: var(--primary-5);
    }
  }
  .description {
    display: grid;
    place-items: center;
  }
`

export default SingleProduct
