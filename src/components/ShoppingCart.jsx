import iconCart from '../assets/images/icon-cart.svg'
import { useContext, useState } from 'react'
import SelectedProducts from '../context/SelectedProducts'
import iconDelete from '../assets/images/icon-delete.svg'

import './ShoppingCart.css'

function ShoppingCart(){
    const {selectedProducts, setSelectedProducts} = useContext(SelectedProducts)
    const [active, setActive] = useState(false)
    return (
        <div className="shopping-cart">
            <button className='shopping-cart_btn' onClick={()=>{setActive(!active)}}>
                {selectedProducts?.length > 0 && <span className='shopping-cart_count'>{selectedProducts.length}</span>}
                <img className='shopping-cart_icon' src={iconCart} alt="icon-cart" />
            </button>
            { active && (
                <div className="shopping-cart_content">
                    <div className="shopping-cart_card">
                        <div className="shopping-cart_header">
                            <h3>Cart</h3>
                        </div>
                        <div className="shopping-cart_items">
                            {selectedProducts.length > 0 && ( selectedProducts.map((product, index) => {
                                return (
                                    <div className="shopping-cart_item" key={product.id}>
                                        <img className="shopping-cart_item_image" src={product.image} alt="product" />
                                        <div className="shopping-cart_item-info">
                                            <h4 className='shopping-cart_item_name'>{product.name}</h4>
                                            <p className='shopping-cart_item_unit-price'>{product.currency} {product.price.toFixed(2)}</p>
                                            <span className='shopping-cart_item_count'>x {product.count}</span>
                                            <span className='shopping-cart_item_total'>{product.currency} {(product.price * product.count).toFixed(2)}</span>
                                        </div>
                                        <button onClick={()=>{
                                            console.log(product)
                                            setSelectedProducts(selectedProducts.filter(item => item.id !== product.id))
                                        }} className='shopping-cart_remove-item'><img src={iconDelete} alt="icon-delete" /></button>
                                    </div>
                                )
                            }) )}
                            {selectedProducts.length === 0 && ( <div className='shopping-cart_empty'>Your cart is empty</div> )}
                        </div>
                        {selectedProducts.length > 0 && <div className="shopping-cart_actions">
                            <div className='shopping-cart_btn-checkout'><button>Checkout</button></div>
                        </div>}

                    </div>
                </div>
            )}
        </div>
    )
}

export default ShoppingCart