import React from 'react'
import ProductChilde from './ProductChilde'

const Product = ({products,basket,setbasket,setCount,count}) => {
  return (
    <div className='basket_product'>
        {
            products?.map((product,index)=>{
              return  <ProductChilde key={index} product={product} basket={basket} products={products}  setbasket={setbasket} setCount={setCount} count={count}/>
            })
        }
    </div>
  )
}

export default Product