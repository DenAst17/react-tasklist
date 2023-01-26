import { useState } from "react";
import './TaskShowCard.css';

export default function TaskShowCard({
  task,
  onChange,
  onDelete
}) {
    return (
      <div className="card">
        <div className="container">
          <h4><b>{task.title}</b></h4>
        </div>
        <button className = "cancelButton" onClick={() => onDelete(task.id)}>
            Delete
        </button>
      </div>
    );
  }