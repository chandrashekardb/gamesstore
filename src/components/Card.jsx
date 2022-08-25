import React,{useState} from 'react';

function Card({item, handleClick, handleChange}) {
    const [show, setShow]=useState(true);
    const {title, author, price}=item;

    const handlefalse=()=>{
      setShow(false)
    }


  return (
    <div className="cards">
      <div className="image_box">
      <h3>{title}</h3>
      <h4>{author}</h4>
      </div>
      <div className="details">        
        <p> {item.qty ? `$${price}`:"Unavailble"}</p>
        <div onClick={handlefalse} > 
          { (show)?<button disabled={!item.qty? true:""} onClick={()=>handleClick(item)}>Add to Cart</button>:<div>
            <button onClick={() => handleChange(item, 1)}>+</button> 
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div> }                      
        </div>        
      </div>     
    </div>
  )
}

export default Card