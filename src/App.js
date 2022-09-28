import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Shop from "./components/shop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {" "}
        <Route path='/' element={<h1>Itx imon</h1>} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
