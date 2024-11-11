import React, { useState } from "react";
import Product from "./Components/Product";
import Basket from "./Components/Basket";

const App = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      title: "Iphone 13 pro max",
      price: 1300,
    },
    {
      id: 2,
      title: "Samsung A54",
      price: 800,
    },
    {
      id: 3,
      title: "Iphone 14",
      price: 1600,
    },
  ]);

  const [basket, setbasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const [count, setCount] = useState(1);
  const deleteProduct = (id) => {
    setbasket((prevBasket) => {
      const updatedBasket = prevBasket.filter((prevPro) => prevPro.id !== id);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const deleteAllProducts = () => {
    setbasket([]);
    localStorage.removeItem("basket");
  };

  const decrimentCoun = (id) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setbasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const incrimentCoun = (id) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setbasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  return (
    <div>
      <Product
        basket={basket}
        products={products}
        setbasket={setbasket}
        setCount={setCount}
        count={count}
      />
      <hr />
      <Basket
        basket={basket}
        count={count}
        deleteProduct={deleteProduct}
        deleteAllProducts={deleteAllProducts}
        decrimentCoun={decrimentCoun}
        incrimentCoun={incrimentCoun}
      />
    </div>
  );
};

export default App;
