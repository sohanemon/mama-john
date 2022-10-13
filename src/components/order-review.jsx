import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";
import { loadFromDb } from "../utilities/fakedb";
import SingleOrderCard from "./Order-review/single-order-card";
import Summary from "./Order-review/summary";

const OrderReview = () => {
  const [localStorage, setLocalStorage] = useState({});
  useEffect(() => {
    setLocalStorage(loadFromDb());
    return () => {};
  }, []);

  const products = useContext(ProductContext);

  let matchedProduct = [];
  for (const i in localStorage) {
    const matched = products.find((el) => el.id === i);
    matched.quantity = localStorage[i];
    matchedProduct.push(matched);
  }
  console.log(matchedProduct);
  return (
    <div className=''>
      <div className='grid grid-cols-2'>
        <div className='space-y-5 flex flex-col justify-center'>
          {matchedProduct.map((el) => (
            <SingleOrderCard {...el} key={el.id} />
          ))}
        </div>
        <div>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default OrderReview;