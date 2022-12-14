import { BiRocket } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";
import { toast } from "react-toastify";
function Product({
  handleAddedProduct,
  img,
  name,
  shipping,
  _id,
  quantity,
  price,
  seller,
  ratings,
  ratingsCount,
}) {
  return (
    <div className='relative flex flex-col w-72 group text-gray-900 text-sm border-gray-400 border rounded  '>
      <img
        className='m-1 h-1/2  object-cover rounded'
        src={img}
        alt={name + " IMAGE"}
      />
      <div className='p-3'>
        <h2 className='text-lg font-semibold line-clamp-1 '>{name}</h2>
        <p className=' font-medium mb-2 group-hover:animate-pulse'>
          Price: ${price}
        </p>
        <p className='text-gray-700'>Manufacturer: {seller}</p>
        <div className='text-gray-700'>
          Rating: {ratings} <span>{ratingsCount}</span>
        </div>
      </div>
      <button
        onClick={() => {
          toast.success("Successfully added.", {
            position: "bottom-right",
            autoClose: 1500,
            closeOnClick: true,
            pauseOnHover: true,
            hideProgressBar: false,
            closeButton: false,
            className: " !text-green-600 !bg-green-100  !font-medium w-max",
            progressClassName: "!bg-green-500",
            icon: <BiRocket className='text-xl animate-bounce' />,
          });
          handleAddedProduct({ _id, name, price, shipping, quantity });
        }}
        className='h-12  bg-yellow-100 hover:bg-yellow-200 border-t rounded-b absolute bottom-0 w-full flex items-center gap-2 text-gray-800 justify-center text-base font-medium'
      >
        Add to cart <BsCartPlusFill className='text-xl' />
      </button>
    </div>
  );
}
export default Product;
