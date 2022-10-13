import { RiDeleteBinLine } from "react-icons/ri";
const SingleOrderCard = ({ name, price, shipping }) => {
  return (
    <div className='h-28 flex mx-auto w-full max-w-md p-2 gap-4 border border-gray-400 rounded-md items-center'>
      <img
        className='h-24 w-24 rounded-md object-cover'
        src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80'
        alt=''
      />
      <aside className='flex items-center justify-between grow'>
        <section>
          <h1 className='text-xl text-gray-800 font-medium line-clamp-1'>
            {name}
          </h1>
          <h2>
            Price: <span>{price}</span>
          </h2>
          <h2>
            shipping <span>{shipping}</span>
          </h2>
        </section>
      </aside>
      <aside>
        <RiDeleteBinLine className='bg-red-500/30 rounded-full h-14 w-14 p-3 text-red-500 mr-4 cursor-pointer' />
      </aside>
    </div>
  );
};

export default SingleOrderCard;
