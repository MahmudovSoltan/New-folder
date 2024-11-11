import React from 'react'
import BasketChilde from './BasketChilde'

const Basket = ({basket,count,deleteProduct , deleteAllProducts,decrimentCoun,incrimentCoun}) => {
  console.log(basket);
  
  return (
    <div>
        {
            basket?.map((b,i)=>{
                return <BasketChilde  b={b} key={i} count={count} deleteProduct={deleteProduct} decrimentCoun={decrimentCoun} incrimentCoun={incrimentCoun} />
            })
        }

        <button onClick={deleteAllProducts}>DeletAll</button>
    </div>
  )
}

export default Basket