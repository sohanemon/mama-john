import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { UserContext } from "../contexts/user-provider";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { sliceError } from "../../utilities/slice-error";
const Common = ({ signup: s, pathname }) => {
  const { loginWithGoogle, loginWithEmail, createUserWithEmail } =
    useContext(UserContext);
  const [message, setMessage] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setMessage(null);

    if (s) {
      if (data.password !== data.confirmpassword) {
        setMessage("Password doesn't match");
        return;
      }
      createUserWithEmail(data.email, data.password, pathname).catch((error) =>
        setMessage(sliceError(error))
      );
    } else {
      loginWithEmail(data.email, data.password, pathname).catch((err) =>
        setMessage(sliceError(err))
      );
    }
  };

  return (
    <>
      {" "}
      <div className=''>
        <section>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4 mx-auto flex relative flex-col ring-2 ring-gray-300 w-96 p-10 rounded-md mt-10  before:w-full before:h-full before:bg-yellow-100 before:absolute before:-left-3 before:top-3 before:rounded-lg before:-z-10 bg-white'
          >
            <p className='text-4xl text-gray-700 text-center'>
              {s ? "Sign Up" : "Login"}
            </p>
            <InputBox register={register} name='email' />
            <InputBox register={register} name='password' />
            {s && <InputBox register={register} name='confirmpassword' />}{" "}
            <p className='text-red-500 capitalize'>{message && message}.</p>
            <button className='rounded h-12 bg-yellow-100 hover:bg-yellow-200 text-gray-800 font-semibold'>
              {s ? "Sign Up" : "Login"}
            </button>
            {!s ? (
              <p className=''>
                New to Mama-john?{" "}
                <Link
                  to={"/signup"}
                  className='text-orange-500 hover:underline'
                >
                  Create New Account
                </Link>
              </p>
            ) : (
              <p className=''>
                Already a member?{" "}
                <Link to={"/login"} className='text-orange-500 hover:underline'>
                  Log in
                </Link>
              </p>
            )}
            <div className='relative flex flex-col items-center justify-center'>
              <span className=' w-min bg-white text-gray-500 z-10 px-5'>
                or
              </span>
              <hr className=' w-full border-t-2 border-gray-300 -translate-y-[10px]' />
            </div>
            <button
              onClick={() => loginWithGoogle(pathname)}
              className='rounded h-12 border border-gray-400 hover:border-orange-400 hover:text-orange-400 group text-gray-800  flex items-center justify-center gap-x-2'
            >
              <FcGoogle className='text-2xl group-hover:animate-mySpin' />
              <p className=' tracking-wide '>Continue with Google</p>
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Common;

function InputBox({ name, register }) {
  return (
    <>
      <div className='inline-flex flex-col space-y-2 items-center justify-end'>
        <div className='flex flex-col w-full'>
          <label
            htmlFor={name}
            className='text-base text-gray-700 capitalize pl-2 pb-1'
          >
            {name}
          </label>
          <input
            {...register(name)}
            type={name.includes("password") ? "password" : name}
            id={name}
            className='border rounded h-12 border-gray-400 w-full pl-3 text-lg '
          />
        </div>
      </div>
    </>
  );
}
