import prodDisImage_1 from '../assets/images/image-product-1.jpg'
import prodDisImage_2 from '../assets/images/image-product-2.jpg'
import prodDisImage_3 from '../assets/images/image-product-3.jpg'
import prodDisImage_4 from '../assets/images/image-product-4.jpg'
import prodThumImage_1 from '../assets/images/image-product-1-thumbnail.jpg'
import prodThumImage_2 from '../assets/images/image-product-2-thumbnail.jpg'
import prodThumImage_3 from '../assets/images/image-product-3-thumbnail.jpg'
import prodThumImage_4 from '../assets/images/image-product-4-thumbnail.jpg'

const products = [
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
            displayImages: [prodDisImage_1, prodDisImage_2, prodDisImage_3, prodDisImage_4],
            thumbImages: [prodThumImage_1, prodThumImage_2, prodThumImage_3, prodThumImage_4]
        }
    }
]

function getProducts() {
    return products;
}

export { getProducts };