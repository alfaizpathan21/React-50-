import React from 'react'

const ProductInfo = () => {
    const product = {
        name:"laptop",
        price: 999.99,
        description: "A high-performance laptop for all your computing needs."
    }
  return (
    <div>
        <h2>Product Information</h2>
        <p>Name: {product.name}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      
    </div>
  )
}

export default ProductInfo
