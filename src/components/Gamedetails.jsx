import React,{useState, useEffect} from 'react'
import list from '../data'
import Card from './Card'
import "../styles/gamedetails.css"

function Gamedetails({handleClick, cart, setCart, handleChange}) {
   const[todos, setTodos]=useState([]);
   const[todoPerPage, setTodoPerPage]=useState(10);
   const[currentPage, setCurrentPage]=useState(1);
   const[showPre, setShowPre]=useState(true);

   const numOfTotalPage=Math.ceil(todos.length/todoPerPage);
   const pages=[...Array(numOfTotalPage + 1).keys()].slice(1);

   
   const indexOfLastTodo=currentPage*todoPerPage;
   const indexOfFirstTodo=indexOfLastTodo-todoPerPage;

   const visibaleTodos=todos.slice(indexOfFirstTodo, indexOfLastTodo);

   const prevPageHandler=()=>{
    if(currentPage !== 1) setCurrentPage(currentPage - 1)
   }
    
   const nextPageHandler=()=>{
    if(currentPage !== numOfTotalPage) setCurrentPage(currentPage + 1)
   }

   useEffect(()=>{
    setTodos(list)
    setShowPre(false)
   })
    
  return (
    <>
    <section>
    {
        visibaleTodos.map((item)=>(
            <Card key={item.id} item={item} handleClick={handleClick} cart={cart} setCart={setCart} handleChange={handleChange}/>
        ))
    }     
    </section>
    <div className="prev_next">
        <div onClick={prevPageHandler}>Go to first</div>
        {
            pages.map((page)=><span key={page} onClick={()=>setCurrentPage(page)} className={`${currentPage===page ? "active": ""}`}>{showPre ? "prev" : "next"}</span>)
        }
        <div onClick={nextPageHandler}>Go to last</div>
      </div>
    </>
  )
}

export default Gamedetails