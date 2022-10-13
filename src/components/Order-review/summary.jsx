import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { AddedProduct } from "../order-review";
import { useContext } from "react";
import { deleteShoppingCart } from "../../utilities/fakedb";
const Summary = () => {
  const { matchedProduct } = useContext(AddedProduct);
  return (
    <>
      <div className='bg-yellow-500 bg-opacity-30 w-max max-w-md mx-auto p-10 space-y-4 rounded-md mt-10 sticky top-[130px]'>
        <p className='text-4xl text-gray-800'>Order Summary</p>
        <p className='text-lg text-gray-700'>
          Selected Items: {matchedProduct.length}
        </p>
        <p className='text-lg text-gray-700'>
          Total Price: ${matchedProduct.reduce((p, c) => p + c.price, 0)}
        </p>
        <p className='text-lg text-gray-700'>
          Total Shipping Charge: $
          {matchedProduct.reduce((p, c) => p + c.shipping, 0)}
        </p>
        <p className='text-lg text-gray-700'>
          Tax: $
          {(matchedProduct.reduce((p, c) => p + c.price, 0) * 0.1).toFixed(1)}
        </p>
        <p className='text-xl text-gray-900'>
          Grand Total: $
          {(
            matchedProduct.reduce((p, c) => p + c.price, 0) +
            matchedProduct.reduce((p, c) => p + c.shipping, 0) +
            matchedProduct.reduce((p, c) => p + c.price, 0) * 0.1
          ).toFixed(2)}
        </p>
        <button
          onClick={deleteShoppingCart}
          className='text-xl text-white bg-red-500 rounded py-3 flex justify-between items-center w-full px-4'
        >
          Clear Cart <RiDeleteBin5Fill />
        </button>
        <button className='text-xl text-white bg-yellow-500  rounded py-3 flex justify-between items-center w-full px-4 !mt-4'>
          Checkout <BsCreditCard2BackFill />
        </button>
      </div>
    </>
  );
};

export default Summary;
