import { useState } from "react";
import './AddTaskButton.css'

export default function AddTaskButton({
  showForm
}) {
    return (
      <button 
      className="addTaskButton"
      onClick={() => showForm()}
      >
        Add new task
        </button>
    );
  }