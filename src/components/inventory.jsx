import { Outlet, Route, Routes } from "react-router-dom";
import { Lol } from "./lol";

const Inventory = () => {
  return (
    <div>
      <Lol />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Inventory;
