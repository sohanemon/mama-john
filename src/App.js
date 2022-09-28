import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/header";
import Home from "./components/home";
import Inventory from "./components/inventory";
import Shop from "./components/shop";

function App() {
  return (
    <BrowserRouter>
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
        <Route path='order' element={<h1>ok order herer</h1>} />
        <Route path='inventory' element={<Inventory />}>
          <Route path='go' element={<h1>emon nested</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
