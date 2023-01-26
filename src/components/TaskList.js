import { useState } from 'react';
import TaskShowCard from './TaskShowCard';
import './TaskList.css'

export default function TaskList({
  tasks,
  onChange,
  onDelete
}) {
  return (
    <ol className='taskList'>
      {tasks.map(task => (
        <ul key={task.id}>
          <TaskShowCard cellPadding = "0px"
            task={task}
            onChange={onChange}
            onDelete={onDelete}
          />
        </ul>
      ))}
    </ol>
  );
}