 import React from "react";
 import './taskcolumn.css';
 

 const TaskColumn = ({ image,title}) => {
    
    return (
        <section className='task_column'>
       <h2><img src={image} alt="" className="task-icon" /> {title}</h2>    
        
        </section>
    )
 }

 export default TaskColumn