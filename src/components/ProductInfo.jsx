
import './ProductInfo.css';

export const ProductInfo = ({ company = 'Any', name = 'Not named', description = 'Not description', price = {value: 0, currency: '$', discount: 0} }) => {
    const { currency, value, discount } = price
    return (
        <div className="product-info">
            <span className='company-name'>{company}</span>
            <h1 className='product-name'>{name}</h1>
            <p className='product-description'>{description}</p>
            <div className='product-price'>
                <span className='currency'>{currency}</span>
                <span className='price'>{(value * (1 - discount)).toFixed(2)}</span>
                <span className='discount'>{discount * 100}%</span>
                <span className='old-price'>{value.toFixed(2)}</span>
            </div>
        </div>
    )
}