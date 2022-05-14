import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Products = () => {
  const { isLoading, productsItems } = useSelector((state) => state.products)

  if (isLoading) {
    return (
      <div>
        <h1 className='title'>We are Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper className='section'>
      <div className='container'>
        {productsItems.map((item) => {
          const { id, name, image } = item
          return (
            <article key={id}>
              <div className='img-container'>
                <img className='img' src={image} alt='' />
              </div>
              <div className='img-footer'>
                <p>{name}</p>
                <Link to={`/products/${id}`}>Moreinfo</Link>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .img-footer {
    display: grid;
    place-items: center;
    border-bottom: 2px solid var(--primary-2);
    padding-bottom: 2rem;
    a {
      background-color: var(--primary-5);
      padding: 0.3rem;
      border-radius: var(--borderRadius);
      color: white;
      transition: var(--transition);
      :hover {
        transform: scale(1.1);
      }
    }
  }
`

export default Products
