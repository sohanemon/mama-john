import { useEffect, useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log(products);
    return () => {};
  }, []);

  return (
    <div className='grid grid-cols-12  '>
      <div className='grid col-span-10 grid-cols-3 gap-4 w-5/6  mt-20  mx-auto'>
        {products.map((el) => (
          <Product {...el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

function Product({ img, name, price, seller, ratings, ratingsCount }) {
  return (
    <div className='relative flex flex-col text-gray-900 text-sm border-gray-400 border rounded  '>
      <img
        className='m-1 h-1/2 object-cover rounded'
        src={img}
        alt={name + " IMAGE"}
      />
      <div className='p-3'>
        <h2 className='text-lg font-semibold line-clamp-1 '>{name}</h2>
        <p className=' font-medium mb-2'>Price: ${price}</p>
        <p className='text-gray-700'>Manufacturer: {seller}</p>
        <div className='text-gray-700'>
          Rating: {ratings} <span>{ratingsCount}</span>
        </div>
      </div>
      <button className='h-12 bg-yellow-100 border-t rounded-b absolute bottom-0 w-full flex items-center gap-2 text-gray-800 justify-center text-base font-medium'>
        Add to cart <BsCartPlusFill className='text-xl' />
      </button>
    </div>
  );
}
