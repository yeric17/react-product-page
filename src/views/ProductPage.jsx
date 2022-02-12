
import { useState,useEffect, useContext } from 'react'
import { getProducts } from '../components/products'
import SliderImage from '../components/SliderImage'
import './ProductPage.css'
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import iconCart from '../assets/images/icon-cart.svg'

import SelectedProducts from '../context/SelectedProducts'

const product = getProducts()[0]

const useCounter = (initialValue, minValue, maxValue) => {
  const [count, setCount] = useState(initialValue)

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1)
    }
  }
  const handleDecrement = () => {
    if (count > minValue) {
      setCount(count - 1)
    }
  }
  const handleReset = () => {
    setCount(initialValue)
  }
  return [count, handleIncrement, handleDecrement, handleReset]
}


function ProductPage() {
  const {company, name, description, price, images } = product
  const { currency, value, discount } = price
  const { display, thumbnail } = images
  const newPrice = value - (value * discount)
  const [breakpoint, setBreakpoint] = useState('')
  const [count, handleIncrement, handleDecrement] = useCounter(1, 1, 10)

  const {selectedProducts,setSelectedProducts} = useContext(SelectedProducts)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 425) {
        setBreakpoint('mobile')
      } else {
        setBreakpoint('desktop')
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  return (
    
    <>
      <div className="product-images">
        <SliderImage>
          {display.map( (image, index) => {
            return <img className='product-images_item' src={image} alt={`product image ${index}`} key={index} />
          })}
        </SliderImage>
      </div>
      <div className="product-info">
        <span className='company-name'>{company}</span>
        <h1 className='product-name'>{name}</h1>
        <p className='product-description'>{description}</p>
        <div className='product-price'>
          <span className='currency'>{currency}</span>
          <span className='price'>{newPrice.toFixed(2)}</span>
          <span className='discount'>{discount * 100}%</span>
          <span className='old-price'>{value.toFixed(2)}</span>
        </div>
        <div className='product-actions'>
          <div className="product-counter">
            <button onClick={handleDecrement}><img src={iconMinus} alt="icon-minus" /></button>
            <input onChange={()=>{console.log('new value')}} className='product-counter_input' type='text' value={count}/>
            <button onClick={handleIncrement}><img src={iconPlus} alt="icon-plus" /></button>
          </div>
          <button  onClick={()=>{
            setSelectedProducts([...selectedProducts,{
              name: name,
              currency: currency,
              price: newPrice,
              count: count,
              image: product.images.thumbnail[0],
              //random id text
              id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            }])
            
          }} className='product-btn-add'>
            <img className='icon-cart' src={iconCart} alt="" />
            <span className='btn-text'>Add to cart</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductPage