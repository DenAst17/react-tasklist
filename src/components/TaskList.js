import TaskShowCard from './TaskShowCard';
import './TaskList.css'
import { useEffect, useState } from 'react';

export default function TaskList({
  tasks,
  onChange,
  onDelete,
  swapTasks
}) {
  const [dragTask, setDragTask] = useState(null);

  function dragStart(e) {
    this.style.opacity = '0.4';
    e = this;
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
      console.log(this.innerHTML);
      console.log(dragTask.innerHTML);
      const html = this.innerHTML;
      this.innerHTML = dragTask.innerHTML;
      dragTask.innerHTML = html;
      swapTasks(this.dataset.id, dragTask.dataset.id);
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
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
  }
  useEffect(() => {
    var listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, function (item) {
      addEventsDragAndDrop(item);
    });
  })
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