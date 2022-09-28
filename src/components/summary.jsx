import { ImBin } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import { deleteShoppingCart } from "../utilities/fakedb";
function Summary({ shippingPrice, totalPrice, grandTotal, tax, items }) {
  return (
    <div className='sticky h-[calc(100vh-88px)] shadow-md top-[88px] bg-yellow-500 bg-opacity-30 w-full col-span-2 p-4 text-gray-700 space-y-6 '>
      <h2 className='text-xl font-semibold text-gray-900 text-center'>
        Order Summary
      </h2>
      <p>Selected Item: {items}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total shipping charge: ${shippingPrice}</p>
      <p>TAX: ${tax}</p>
      <h3 className='text-gray-900  text-xl'>Grand Total: ${grandTotal}</h3>
      <button
        onClick={() => deleteShoppingCart()}
        className='flex items-center gap-4 justify-center active:scale-95 w-full text-white !mt-16 !-mb-4 rounded-md font-medium py-2 bg-red-500 '
      >
        Clear Cart
        <ImBin />
      </button>
      <button className='flex items-center gap-4 justify-center active:scale-95 w-full text-white py-2 rounded-md font-medium bg-yellow-500 '>
        Review Order <FaArrowRight />
      </button>
    </div>
  );
}
export default Summary;
