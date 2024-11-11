import React, { useState } from 'react';

const BasketChilde = ({ b, deleteProduct,decrimentCoun,incrimentCoun }) => {
  const { count } = b;




  return (
    <div>
      <p>{b.title}</p>
      <div>
        <div>Mehsulun qiymeti: {b.price}</div>
        Odenilecek mebleg: {b.price * count}
      </div>
      <div>
        <button onClick={()=>incrimentCoun(b.id)}>+</button>
        <div>{count}</div>
        <button onClick={()=>decrimentCoun(b.id)}>-</button>
      </div>
      <button onClick={() => deleteProduct(b.id)}>Delete</button>
    </div>
  );
};

export default BasketChilde;
