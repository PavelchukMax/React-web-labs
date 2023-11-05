import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import useGlobalStore from "./store/store";
import Landing from "./pages/Landing";
import LandingLayout from "./Layouts/LandingLayout";
import { useEffect } from "react";
import Cart from './pages/cart';
function App() {
  const setCheckedTovars = useGlobalStore((state) => state.setCheckedTovars);
  useEffect(() => {
    setCheckedTovars();
  }, []);
  return (
    <>
    <BrowserRouter>
   <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
