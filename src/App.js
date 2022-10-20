import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/contexts/private-route";
import UserProvider from "./components/contexts/user-provider";
import Header from "./components/header";
import Home from "./components/home";
import Inventory from "./components/inventory";
import Login from "./components/login/login";
import NotFound from "./components/login/notfound";
import Signup from "./components/login/signup";
import OrderReview from "./components/order-review";
import Shop from "./components/shop";
export const ProductContext = createContext([]);
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    if (window.location.pathname !== "/") window.location.pathname = "/";
    //note: go to route page at any cost. Alternative to Netlify's _redirects
    return () => {};
  }, []);
  return (
    <BrowserRouter>
      <UserProvider>
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
            <Route
              path='order'
              element={
                <PrivateRoute>
                  <OrderReview />
                </PrivateRoute>
              }
            />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route
              path='inventory'
              element={
                <PrivateRoute>
                  <Inventory />
                </PrivateRoute>
              }
            >
              <Route path='go' element={<h1>emon nested</h1>} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ProductContext.Provider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
