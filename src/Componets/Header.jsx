import React, { useState } from 'react'

function Header() {

<<<<<<< HEAD
   
 var userName = prompt("What is Your Name:");
=======
     var userName = prompt("What is Your Name:");
>>>>>>> 84b5c0ccb5b948c3c4fbe632052a6b2f11075c20
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
