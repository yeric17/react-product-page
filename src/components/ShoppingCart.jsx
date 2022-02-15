import iconCart from '../assets/images/icon-cart.svg'
import { useContext, useState } from 'react'
import SelectedProducts from '../context/SelectedProducts'
import { ShoppingCartItem } from './ShoppingCartItem'

import './ShoppingCart.css'

function ShoppingCart(){
    const {selectedProducts} = useContext(SelectedProducts)
    const [active, setActive] = useState(false)
    console.log(selectedProducts)
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
                            {selectedProducts.length > 0 && ( selectedProducts.map((product) => {
                                return (
                                    <ShoppingCartItem key={product.id} {...product}/>
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