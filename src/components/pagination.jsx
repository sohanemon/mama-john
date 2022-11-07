import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";

const Pagination = () => {
  const { count, setQuery } = useContext(ProductContext);
  const [pageIdx, setPageIdx] = useState(0);
  const [productCount] = useState(count);
  const [productPerView, setProductPerView] = useState(10);
  const [pageCount, setPageCount] = useState();
  useEffect(() => {
    setPageCount(Math.ceil(productCount / parseInt(productPerView)));

    return () => {};
  }, [productCount, productPerView]);

  const handlePageChange = (idx) => {
    setPageIdx(idx);
    setQuery({
      pageIdx: idx,
      productPerView,
    });
  };
  const handleProductCount = (e) => {
    setProductPerView(e.target.value);
    setQuery({
      pageIdx,
      productPerView: e.target.value,
    });
  };
  return (
    <>
      <div className='flex gap-3 justify-center'>
        {[...Array(pageCount).keys()]?.map((_, idx) => (
          <button
            onClick={() => handlePageChange(idx)}
            key={idx}
            className='border rounded  px-3 py-1 hover:border-gray-600 focus:border-gray-600'
          >
            {idx + 1}
          </button>
        ))}
        <select
          defaultValue={10}
          name='productPerView'
          onChange={handleProductCount}
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
      </div>
    </>
  );
};

export default Pagination;
