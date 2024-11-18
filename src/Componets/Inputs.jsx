import React, { useState } from 'react'
import Bottom from './Bottom';
import { RiCloseCircleFill } from "react-icons/ri";

function Inputs() {

    const [task, settask] = useState("");
    const [details, setdetails] = useState("");
    const [addTask, setaddTask] = useState([])
    const formSubmit=(e)=>{
        e.preventDefault();
        setaddTask([...addTask, {task, details}])
        // console.log(task);
        // console.log(details);
        console.log(addTask);
        settask("");
        setdetails("");
    }
    const deleteData =(indx)=>{
        let saveTask = [...addTask]
        saveTask.splice(indx, 1);
        setaddTask(saveTask);
    }
    let resderTasks = <h2>No Available</h2>
    if(addTask.length>0){
        resderTasks = addTask.map((val, indx)=>{
            return(
                <li key={indx}>
                    <div className='task'>
                    <h2>{val.task}</h2>
                    <h3>{val.details}</h3>
                </div>
                <div id='button' className="ri-close-circle-fill "onClick={()=>{
                    deleteData(indx);
                }}>
                     <RiCloseCircleFill size={30} color="red"  style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        }} />
                     </div>
                </li>
                
            )
        })
    }
  return (
    <>
        <form onSubmit={formSubmit}>
        <div className="inputs">
            <input className='text-2xl px-7 py-4' type="text" placeholder='Task' required
            value={task}
            onChange={(task)=>{
                settask(task.target.value)
            }}    />
            <textarea placeholder='Details' className='text-2xl px-7 py-4' 
            value={details} 
            onChange={(details)=>{
                setdetails(details.target.value)
            }}> 
                  </textarea>
           
            <button className='px-5 py-3 text-2xl font-bold text--600'>Add Task +</button>
        </div>
        </form>
        <Bottom send = {resderTasks}/>
    </>
  )
}

export default Inputs