import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";
import { addToDb, deleteShoppingCart, loadFromDb } from "../utilities/fakedb";
import Product from "./single-product";
import Summary from "./summary";
const Shop = () => {
  const products = useContext(ProductContext);
  const [addedProduct, setAddedProduct] = useState([]);
  const [cost, setCost] = useState({});

  useEffect(() => {
    let totalPrice = parseFloat(
      addedProduct.reduce((p, c) => p + c?.price * c?.quantity, 0)
    );
    let shippingPrice = addedProduct.reduce((p, c) => p + c?.shipping, 0);
    let tax = parseFloat(parseFloat(totalPrice * 0.1).toFixed(2));
    let items = addedProduct.reduce((p, c) => p + c?.quantity, 0);
    let grandTotal = parseFloat(totalPrice + shippingPrice + tax).toFixed(2);
    setCost({ totalPrice, shippingPrice, tax, items, grandTotal });

    return () => {};
  }, [addedProduct]);

  useEffect(() => {
    //getting data from local storage for first time
    const dbObject = loadFromDb();
    const matchedProduct = Object.keys(dbObject).map((el) =>
      products.find((i) => i.id === el)
    );
    const x = matchedProduct.every((el) => el); //note: let check the data is loaded or not
    x && matchedProduct.forEach((p) => (p.quantity = dbObject[p?.id]));
    setAddedProduct(matchedProduct);
    return () => {};
  }, [products]);
  const handleDeleteCart = () => {
    deleteShoppingCart();
    setCost({});
    window.location.reload();
  };

  const handleAddedProduct = (product) => {
    // addedProduct.push(product);
    if (!product.quantity)
      product.quantity = 1; //because initially quantity is 0 by default
    else ++product.quantity;

    setAddedProduct((p) => [...p, product]);
    addToDb(product.id);
    // console.log(addedProduct);
    //debugger;
  };
  return (
    <div className='grid grid-cols-12 '>
      <div className='grid col-span-10 grid-cols-3 place-content-center gap-4 w-5/6  mt-20  mx-auto'>
        {products.map((el) => (
          <Product
            handleAddedProduct={handleAddedProduct}
            {...el}
            key={el.id}
          />
        ))}
      </div>
      <Summary handleDeleteCart={handleDeleteCart} {...cost} />
    </div>
  );
};

export default Shop;
