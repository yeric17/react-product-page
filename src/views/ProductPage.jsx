import prodDisImage_1 from '../assets/images/image-product-1.jpg'
import prodDisImage_2 from '../assets/images/image-product-2.jpg'
import prodDisImage_3 from '../assets/images/image-product-3.jpg'
import prodDisImage_4 from '../assets/images/image-product-4.jpg'
import prodThumImage_1 from '../assets/images/image-product-1-thumbnail.jpg'
import prodThumImage_2 from '../assets/images/image-product-2-thumbnail.jpg'
import prodThumImage_3 from '../assets/images/image-product-3-thumbnail.jpg'
import prodThumImage_4 from '../assets/images/image-product-4-thumbnail.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState,useEffect } from 'react'
import './ProductPage.css'

const product = 
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer',
    price: {
      currency: '$',
      value: 250.00,
      discount: 0.5
    },
    images: {
      display: [prodDisImage_1, prodDisImage_2, prodDisImage_3, prodDisImage_4],
      thumbnail: [prodThumImage_1, prodThumImage_2, prodThumImage_3, prodThumImage_4]
    }
  }

function ProductPage() {
  const {company, name, description, price, images } = product
  const { currency, value, discount } = price
  const { display, thumbnail } = images
  const newPrice = value - (value * discount)
  const [breakpoint, setBreakpoint] = useState('')
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
        <Carousel showArrows={true} axis='horizontal' showThumbs={breakpoint === 'desktop'} showStatus={false} showIndicators={false} infiniteLoop={true}>
          {display.map((image, index) => {
            return (
                <img src={image} alt={`product-${index}`} key={index} />
            )  
          })}
        </Carousel>
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
            <button>-</button>
            <input type="text" value="0" />
            <button>+</button>
          </div>
          <button className='add-to-cart'>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductPage