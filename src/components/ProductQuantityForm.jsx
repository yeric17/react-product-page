import { useState, useContext } from 'react'
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import iconCart from '../assets/images/icon-cart.svg'
import SelectedProducts from '../context/SelectedProducts'

import './ProductQuantityForm.css'

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
    return [count, handleIncrement, handleDecrement]
}

export const ProductQuantityForm =  ({ name, currency, price, image }) => {
    const { selectedProducts, setSelectedProducts } = useContext(SelectedProducts)

    const [count, handleIncrement, handleDecrement] = useCounter(1, 1, 10);

    return (
        <form className="product-counter">
            <div className="product-counter_controls">
                <button type='button' onClick={handleDecrement}><img src={iconMinus} alt="icon-minus" /></button>
                <input onChange={() => { console.log('new value') }} className='product-counter_input' type='text' value={count} />
                <button type='button' onClick={handleIncrement}><img src={iconPlus} alt="icon-plus" /></button>
            </div>
            <button onClick={(event) => {
                event.preventDefault()
                setSelectedProducts([...selectedProducts, {
                    name: name,
                    currency: currency,
                    price: price.value * (1 - price.discount),
                    count: count,
                    image: image,
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                }])

            }} className='product-counter_btn-add'>
                <img className='icon-cart' src={iconCart} alt="" />
                <span className='btn-text'>Add to cart</span>
            </button>
        </form>
    )
}