import './App.css';
import Header from './components/head';
import Body from './components/body';
import Footer from './components/footer';
import Cart from './components/cart';
import { useState } from 'react';

function App() {
  const [isInCart, setIsInCart] = useState(false);
  const rateUSDToUAH = 36;
  const [tovars, setTovars] = useState([ 
    {name:'Iphone15', 
     checked: false,
     desc:"..........................",
     price: 800,
     valuta: "USD"},
     {name:'Iphone14',
     checked: false,
     desc:"..........................",
     price: 700,
     valuta: "USD"},
    {name: 'Airpods',
    checked: false,
    desc:"..........................",
    price: 130,
    valuta: "USD"},
    {name: 'Samsung S21',
    checked: false,
    desc:"..........................",
    price: 250,
    valuta: "USD"}, 
    {name: 'Pixel 7 pro',
    checked: false,
    desc:"..........................",
    price: 700,
    valuta: "USD"}]);
  
  return (
    <>
      <Header tovarCheckedAmount={tovars.filter((value)=>value.checked).length}
      setIsInCart={setIsInCart}
      isInCart={isInCart}></Header>
      {isInCart ? (
      <Cart checkedTovar={tovars.filter((value)=>value.checked)} rateUSDToUAH={rateUSDToUAH} ></Cart>
       ):(<Body  tovars={tovars} setTovars={setTovars} rateUSDToUAH={rateUSDToUAH}></Body>)}
    </>
  );
}

export default App;
