import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/header";
import Home from "./components/home";
import Inventory from "./components/inventory";
import OrderReview from "./components/order-review";
import Shop from "./components/shop";
export const ProductContext = createContext([]);
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    return () => {};
  }, []);
  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/shop'
            element={
              <>
                {" "}
                <div className=''>
                  <h1 className='sr-only'>
                    Author: Sohanur Rahman Emon @sohanemon
                  </h1>

                  <Shop />
                </div>
              </>
            }
          />
          <Route path='order' element={<OrderReview />} />
          <Route path='inventory' element={<Inventory />}>
            <Route path='go' element={<h1>emon nested</h1>} />
          </Route>
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
