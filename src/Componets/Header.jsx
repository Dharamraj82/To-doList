import React, { useState } from 'react'

function Header() {

   
 var userName = prompt("What is Your Name:");
   // var userName;
    function newDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date}-${month}-${year}`;
      }
    const [currentDate, setCurrentDate] = useState(newDate());
    // console.log(currentDate);
    
  return (
    <>  
        <div className="head text-center"> 
            <h1 className='font-semibold text-white'>{userName} To-Do List</h1>
            <h2 className='font-semibold text-white'>Date: {currentDate}</h2>
        </div>
    </>
  )
}

export default Header