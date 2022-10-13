import { createContext, useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";
import { loadFromDb } from "../utilities/fakedb";
import SingleOrderCard from "./Order-review/single-order-card";
import Summary from "./Order-review/summary";
export const AddedProduct = createContext([]);
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
  return (
    <AddedProduct.Provider value={{ matchedProduct, localStorage }}>
      <div className=''>
        <div className='grid grid-cols-2'>
          <div className='space-y-5 flex my-10 flex-col justify-center'>
            {matchedProduct.map((el) => (
              <SingleOrderCard {...el} key={el.id} />
            ))}
          </div>
          <div>
            <Summary />
          </div>
        </div>
      </div>
    </AddedProduct.Provider>
  );
};

export default OrderReview;
