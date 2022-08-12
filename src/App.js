import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(10000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div>
      <Header total={total} money={money} />
      {
        <Basket
          resetBasket={resetBasket}
          total={total}
          products={products}
          basket={basket}
        />
      }
      <div className="container products">
        {products.map((item) => (
          <Product
            key={products.id}
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            product={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
