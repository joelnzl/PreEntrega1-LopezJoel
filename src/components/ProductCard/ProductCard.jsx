

import ProductImage from "../ProductImage/ProductImage.jsx"
import ProductInfo from "../ProductInfo/ProductInfo.jsx"
import ProductButton from "../ProductButton/ProductButton.jsx"
import "./ProductCard.css"


const ProductCard = () => {
  return (

    <div className='product-card'>    
    
    <ProductImage/>
    <ProductInfo/>
    <ProductButton/>
    
    </div>

  )
}

export default ProductCard