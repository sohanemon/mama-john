import { useNavigate } from "react-router-dom";
import model from "../images/austin.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='grid grid-cols-2 container mx-auto'>
        <div className='flex  flex-col h-[calc(100vh-88px)] gap-10 justify-center'>
          <p className='text-base text-yellow-500'>Sale up to 70% off</p>
          <div>
            <p className='text-6xl font-bold text-gray-800'>
              New Collection For Fall
            </p>
            <p className='text-2xl text-gray-700'>
              Discover all the new arrivals of ready-to-wear collection.
            </p>
          </div>
          <button
            onClick={() => navigate("shop")}
            className='w-max px-5 py-3 rounded-md text-gray-900 text-2xl bg-yellow-400 hover:bg-yellow-500 font-semibold active:scale-x-95 '
          >
            Shop Now
          </button>
        </div>
        <div className='grid place-content-center'>
          <div className='relative'>
            <div className='w-5/6 absolute -z-10 h-full -left-2 top-3 rounded-md bg-yellow-100 '></div>
            <img
              className=' h-full w-5/6  object-cover  rounded-lg'
              src={model}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
