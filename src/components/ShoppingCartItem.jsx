import './ShoppingCartItem.css';
import SelectedProducts from '../context/SelectedProducts'
import { useContext } from 'react'
import iconDelete from '../assets/images/icon-delete.svg'

export const ShoppingCartItem = ({id, image, name, price = {currency:"$", value:0, discount:0}, count }) => {
    const {selectedProducts, setSelectedProducts} = useContext(SelectedProducts)
    const {currency, value, discount} = price
    const newValue = value - (value * discount)
    console.log(price)
    return (
        <div className="shopping-cart_item" key={id}>
            <img className="shopping-cart_item_image" src={image} alt="product" />
            <div className="shopping-cart_item-info">
                <h4 className='shopping-cart_item_name'>{name}</h4>
                <p className='shopping-cart_item_unit-price'>{currency} {newValue.toFixed(2)}</p>
                <span className='shopping-cart_item_count'>x {count}</span>
                <span className='shopping-cart_item_total'>{currency} {(newValue * count).toFixed(2)}</span>
            </div>
            <button onClick={() => {
                setSelectedProducts(selectedProducts.filter(item => item.id !== id))
            }} className='shopping-cart_remove-item'><img src={iconDelete} alt="icon-delete" /></button>
        </div>
    )
}