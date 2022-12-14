import { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeFromDb } from "../../utilities/fakedb";
import { AddedProduct } from "../order-review";
const SingleOrderCard = ({ name, price, shipping, img, _id }) => {
  const { updateMatchedProduct } = useContext(AddedProduct);
  return (
    <div className='h-28 flex mx-auto w-full max-w-md p-2 gap-4 border border-gray-400 rounded-md items-center'>
      <img className='h-24 w-24 rounded-md object-cover' src={img} alt='' />
      <aside className='flex items-center justify-between grow'>
        <section>
          <h1 className='text-xl text-gray-800 font-medium line-clamp-1'>
            {name}
          </h1>
          <h2>
            Price:{" "}
            <span className='text-[#FF9900] font-semibold'>${price}</span>
          </h2>
          <h2>
            shipping{" "}
            <span className='text-[#FF9900] font-semibold'>${shipping}</span>
          </h2>
        </section>
      </aside>
      <aside>
        <RiDeleteBinLine
          onClick={() => {
            removeFromDb(_id);
            updateMatchedProduct();
          }}
          className='bg-red-500/30 rounded-full h-14 w-14 p-3 text-red-500 mr-4 cursor-pointer'
        />
      </aside>
    </div>
  );
};

export default SingleOrderCard;
