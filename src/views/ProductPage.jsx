

import { getProducts } from '../components/products'
import SliderImage from '../components/SliderImage'
import { DisplayImage } from '../components/DisplayImage'
import { ProductInfo } from '../components/ProductInfo'
import { ProductQuantityForm } from '../components/ProductQuantityForm'
import './ProductPage.css'


function ProductPage() {
	const product = getProducts()[0]
	const { name, price, images } = product
	const { displayImages, thumbImages } = images
	return (

		<div className='product-page'>
			<div className="product-images">
				<SliderImage thumbnails={thumbImages}>
					{displayImages.map(image => (<DisplayImage key={image} image={image} />))}
				</SliderImage>
			</div>
			<div className="product-content">
				<ProductInfo {...product}/>
			</div>
			<div className='product-actions'>
				<ProductQuantityForm 
					name={name}
					price={price}
					image={thumbImages[0]}
				/>
			</div>
		</div>
	)
}

export default ProductPage