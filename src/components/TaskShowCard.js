import { useState } from "react";
import './TaskShowCard.css';

export default function TaskShowCard({
  task,
  onChange,
  onDelete
}) {
    //console.log(task.color);
    return (
      <div className="card" style={{backgroundColor:task.color}}>
        <div className="container">
          <h4><b>{task.title}</b></h4>
        </div>
        <button className = "cancelButton" onClick={() => onDelete(task.id)} > 
            Delete
        </button>
      </div>
    );
  }