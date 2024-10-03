import React from 'react'

import "./TaskCard.css"
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = () => {
    return (
    
        <article className='task_card'>
            <p className='task_text'>Its amazing creating this app</p>
            <div className='task_card_bottom_line'></div>
            <div className='task_card_tags'></div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <div className='task_delete'>
                <img src={deleteIcon} className='delete_icon' alt='' />
            </div>
        </article>
    );
}

export default TaskCard;