import { useEffect, useState } from "react";
import { addToDb, loadFromDb } from "../utilities/fakedb";
import Product from "./single-product";
import Summary from "./summary";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addedProduct, setAddedProduct] = useState([]);
  const [cost, setCost] = useState({});
  useEffect(() => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    let totalPrice = addedProduct.reduce((p, c) => p + c.price, 0);
    let shippingPrice = addedProduct.reduce((p, c) => p + c.shipping, 0);
    let tax = parseFloat(totalPrice * 0.1).toFixed(2);
    let items = addedProduct.length;
    let grandTotal = parseFloat(totalPrice + shippingPrice + tax).toFixed(2);
    setCost({ totalPrice, shippingPrice, tax, items, grandTotal });

    return () => {};
  }, [addedProduct]);

  useEffect(() => {
    const storedItems = loadFromDb();
    console.log(storedItems);
    return () => {};
  }, []);

  const handleAddedProduct = (product) => {
    // addedProduct.push(product);
    setAddedProduct((p) => [...p, product]);
    addToDb(product.id);
    //debugger;
  };
  return (
    <div className='grid grid-cols-12  '>
      <div className='grid col-span-10 grid-cols-3 place-content-center gap-4 w-5/6  mt-20  mx-auto'>
        {products.map((el) => (
          <Product
            handleAddedProduct={handleAddedProduct}
            {...el}
            key={el.id}
          />
        ))}
      </div>
      <Summary {...cost} />
    </div>
  );
};

export default Shop;
