import { useEffect, useState } from "react";
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
    setCost({ totalPrice });
    return () => {};
  }, [addedProduct]);

  const handleAddedProduct = (product) => {
    // addedProduct.push(product);
    setAddedProduct((p) => [...p, product]);
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
      <Summary cost={cost} addedProduct={addedProduct} />
    </div>
  );
};

export default Shop;
