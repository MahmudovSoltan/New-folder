import React from "react";

const ProductChilde = ({ product, products, basket, setbasket}) => {
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
    <div className="basket_childe">
      <div>
        <p className="product_title">{product.title}</p>
        <div className="product_price">{product.price} AZN</div>
        <div>
          <button className="add_btn" onClick={() => addTobasket(product.id)}>Add Basket</button>
        </div>
      </div>
    </div>
  );
};

export default ProductChilde;
