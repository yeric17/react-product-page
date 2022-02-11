
import { useState,useEffect } from 'react'
import { getProducts } from '../components/products'
import SliderImage from '../components/SliderImage'
import './ProductPage.css'
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import iconCart from '../assets/images/icon-cart.svg'

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
  const [count, handleIncrement, handleDecrement] = useCounter(0, 0, 10)
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
            <input className='product-counter_input' type='text' value={count}/>
            <button onClick={handleIncrement}><img src={iconPlus} alt="icon-plus" /></button>
          </div>
          <button className='product-btn-add'>
            <img class='icon-cart' src={iconCart} alt="" />
            <span class='btn-text'>Add to cart</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductPage