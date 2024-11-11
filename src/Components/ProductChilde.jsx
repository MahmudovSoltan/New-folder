import React from "react";

const ProductChilde = ({ product, products, basket, setbasket ,setCount,count}) => {
  let newBasket = [...basket];


  const addTobasket = (x) => {
    let checkProduct = newBasket.find((a) => a.id == x);
    if (checkProduct) {
      checkProduct.count+=1;
    } else {
      let checkPro = products.find((data) => data.id === x);
      checkPro.count=1;
      newBasket = [...newBasket, checkPro];
    }
    setbasket(newBasket)
    localStorage.setItem("basket",JSON.stringify(newBasket))
  };
  return (
    <div>
      <div>
        <p>{product.title}</p>
        <div>{product.price}</div>
        <div>
          <button onClick={() => addTobasket(product.id)}>Sebete at</button>
        </div>
      </div>
    </div>
  );
};

export default ProductChilde;
