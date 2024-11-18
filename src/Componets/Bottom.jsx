import React, { useState } from 'react'


function Bottom(data) {

  const colors = [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9YRlUKGc2DSkpL4OxtLp93O9f5UzkaCjfQ&s"
      },
      {
        image: "https://htmlcolorcodes.com/assets/images/colors/yellow-color-solid-background-1920x1080.png"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreKX6dYfKSvbq9DUhJVOGN5sYmhSCk86uIBL0clbHSsAUoPX--uO2BgjnG9NF91B1Gu8&usqp=CAU"
      },
      {
        image: "https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
      },
      {
        image: "https://htmlcolorcodes.com/assets/images/colors/bright-red-color-solid-background-1920x1080.png"
      }
  ];


  const [change, setchange] = useState("")
  const changeColor=(e)=>{
        let color = e.target.src;
        setchange(color);
    }
  return (
    <>
        <div className="bottom-div">
        <div className="bottom" style={{
        backgroundImage: `url(${change})`
          }}>
          <ul>{data.send}</ul>
        </div>
          <div className='colors'>
          {colors.map((data, indx) => (
          <img key={indx} src={data.image}
          alt="" 
          onClick={(e)=>{
            changeColor(e)
          }} /> 
           ))}
        
          </div>
        </div>
    </>
  )
} 
export default Bottom