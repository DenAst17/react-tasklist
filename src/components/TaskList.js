import TaskShowCard from './TaskShowCard';
import './TaskList.css'
import { useEffect, useState, componentDidMount } from 'react';

export default function TaskList({
  tasks,
  onChange,
  onDelete,
  swapTasks
}) {
  const [dragTask, setDragTask] = useState(null);

  function dragStart(e) {
    this.style.opacity = '0.4';
    setDragTask(this);
  };

  function dragEnter(e) {
    this.classList.add('over');
  }

  function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
  }

  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function dragDrop(e) {
    if (dragTask != this) {
      setTimeout(() => {
        const html = this.innerHTML;
        this.innerHTML = dragTask.innerHTML;
        dragTask.innerHTML = html;
        swapTasks(this.dataset.id, dragTask.dataset.id);
      }, 100);
    }
    return false;
  }

  function dragEnd(e) {
    var listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function (item) {
      item.classList.remove('over');
    });
    this.style.opacity = '1';
  }

  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, true);
    el.addEventListener('dragenter', dragEnter, true);
    el.addEventListener('dragover', dragOver, true);
    el.addEventListener('dragleave', dragLeave, true);
    el.addEventListener('drop', dragDrop, true);
    el.addEventListener('dragend', dragEnd, true);
  }
  function removeEventsDragAndDrop(el) {
    el.removeEventListener('dragstart', dragStart, true);
    el.removeEventListener('dragenter', dragEnter, true);
    el.removeEventListener('dragover', dragOver, true);
    el.removeEventListener('dragleave', dragLeave, true);
    el.removeEventListener('drop', dragDrop, true);
    el.removeEventListener('dragend', dragEnd, true);
  }
  useEffect(() => {
    var listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function (item) {
      removeEventsDragAndDrop(item);
      addEventsDragAndDrop(item);
    });
  });
  
  return (
    <ol className='taskList'>
      {tasks.map(task => (
        <ul data-id={task.id} className="draggable" draggable="true" key={task.id}>
          <TaskShowCard cellPadding="0px"
            task={task}
            onChange={onChange}
            onDelete={onDelete}
          />
        </ul>
      ))}
    </ol>
  );
}