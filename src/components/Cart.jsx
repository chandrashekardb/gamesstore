import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [quty, setQuty]=useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handleRemoveAll=(id)=>{
    const rem=cart.filter((item)=>item.id===id);
    setCart(rem);
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.qty * item.price));
    setPrice(ans);
  };

  const handleQty=()=>{
    let tqty=0;
    cart.map((item)=>(tqty +=item.qty))
    setQuty(tqty)
  }

  useEffect(() => {
    handlePrice();
    handleQty();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
         <div className="rem_box">
            <button onClick={() => handleRemove(item.id)}> X </button>
            <div>{item.title}</div>
            <div>{item.qty} x {item.price}</div> 
          </div>

          <div>
            $ {item.qty*item.price}
          </div>
         
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>        
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          
        </div>
      ))}
      <div className="total">
        <span>Total</span>
        <span>{quty} speciman</span>
        <span>$ {price}</span>
        <button onClick={(item)=>handleRemoveAll(item.id)}> Clear cart </button>
      </div>
    </article>
  );
};

export default Cart;