import React, { useState } from 'react';

const BasketChilde = ({ b, deleteProduct,decrimentCoun,incrimentCoun }) => {
  const { count } = b;




  return (
    <div className='basket_childe'>
      <p className='product_title'>{b.title}</p>
      <div>
        <div className='product_price'>Mehsulun qiymeti: {b.price}</div>
       <div className='product_price'> Odenilecek mebleg: {b.price * count}</div>
      </div>
      <div className='bascet_count'>
        <button onClick={()=>incrimentCoun(b.id)}>+</button>
        <div className='count'>{count}</div>
        <button onClick={()=>decrimentCoun(b.id)}>-</button>
      </div>
      <button className='delete_btn' onClick={() => deleteProduct(b.id)}>Delete</button>
    </div>
  );
};

export default BasketChilde;
