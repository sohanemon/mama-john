const NotFound = () => {
  return (
    <>
      <div
        className='inline-flex space-x-96 items-center justify-end'
        style={{ width: 704, height: 74 }}
      >
        <p className='text-6xl font-light text-gray-700'>404</p>
        <p className='text-6xl font-light text-gray-700'>Nothing here to see</p>
        <div className='transform -rotate-90 w-16 h-1 border-2 border-yellow-500' />
      </div>
    </>
  );
};

export default NotFound;
