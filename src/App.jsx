import React,{useState} from 'react'
import Cart from "./components/Cart"
import Gamedetails from "./components/Gamedetails"
import Navbar from "./components/Navbar"

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].qty += d;

    if (arr[ind].qty === 0) arr[ind].qty = 1;
    setCart([...arr]);
  };



  return (
    <>
      <Navbar />
      <Gamedetails handleClick={handleClick} cart={cart} setCart={setCart} handleChange={handleChange}/>
      <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
    </>
  )
}

export default App
