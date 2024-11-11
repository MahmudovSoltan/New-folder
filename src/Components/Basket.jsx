import React from 'react'
import BasketChilde from './BasketChilde'

const Basket = ({basket,count,deleteProduct , deleteAllProducts,decrimentCoun,incrimentCoun}) => {
  
  
  
  return (
    <>
    <div className='basket_items'>
        {
            basket?.map((b,i)=>{
                return <BasketChilde  b={b} key={i} count={count} deleteProduct={deleteProduct} decrimentCoun={decrimentCoun} incrimentCoun={incrimentCoun} />
            })
        }

    </div>
  
    <div className='clear_cart'>
        <button className='' onClick={deleteAllProducts}>DeletAll</button>

    </div>
    </>
  )
}

export default Basket