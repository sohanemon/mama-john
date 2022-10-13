import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCreditCard2BackFill } from "react-icons/bs";
const Summary = () => {
  return (
    <>
      <div className='bg-yellow-500 bg-opacity-30 w-max max-w-md mx-auto p-10 space-y-4 mt-10'>
        <p className='text-4xl text-gray-800'>Order Summary</p>
        <p className='text-lg text-gray-700'>Selected Items: 6</p>
        <p className='text-lg text-gray-700'>Total Price: $1140</p>
        <p className='text-lg text-gray-700'>Total Shipping Charge: $5</p>
        <p className='text-lg text-gray-700'>Tax: $114</p>
        <p className='text-xl text-gray-900'>Grand Total: $1559</p>
        <button className='text-xl text-white bg-red-500 rounded py-3 flex justify-between items-center w-full px-4'>
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
