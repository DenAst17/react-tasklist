import './App.css';
import AddTaskButton from './components/AddTaskButton';
import { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import BackgroundDim from './components/BackgroundDim';
import "./assets/Gmail_icon_(2020).svg.png";

let nextId = 2;

let initialTasks = [
  { 
    id: 0, 
    title: 'Task list created by denast', 
    done: false, 
    color: "#f7efd2", 
    time: "15:00"
  },
  { 
    id: 1, 
    title: 'Click the add button to add new task or delete button to delete any existing one', 
    done: false, 
    color: "#ecd06a", 
    time: "15:20"
  }
];

function App() {
  let localstorageTasks = [];
  if(localStorage.getItem('tasks')) {
    JSON.parse(localStorage.getItem('tasks')).forEach(task => {
      localstorageTasks.push(task);
    });
  }
  else {
    localstorageTasks = null;
  }
  initialTasks = localstorageTasks || initialTasks;
  initialTasks.sort((a, b) => {
     if(a.time < b.time) {
      return -1;
     }
     else if(a.time > b.time) {
      return 1;
     }
     else {
      return 0;
     }
    });
  console.log(initialTasks);
  nextId = localStorage.getItem('nextId') || nextId;
  //localStorage.clear();
  const [tasks, setTasks] = useState(initialTasks);
  const [isAddForm, setIsAddForm] = useState(false);

  function handleAddTask(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson.taskTime);

    if(formJson.taskText === '' || !formJson.taskText) {
      formJson.taskText = '-Empty task-';
    }
    let resTasks = [
      ...tasks,
      {
        id: nextId++,
        title: formJson.taskText,
        done: false,
        color: formJson.taskColor,
        time: formJson.taskTime
      }
    ]
    setTasks(
      resTasks
    );
    setFormInvisible();
    localStorage.setItem('tasks', JSON.stringify(resTasks));
    localStorage.setItem('nextId', nextId);
  }
  function handleChangeTask(nextTask) {
    setTasks(tasks.map(t => {
      if (t.id === nextTask.id) {
        return nextTask;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTask(taskId) {
    var remainingTasks = tasks.filter(t => t.id !== taskId);
    setTasks(
      remainingTasks
    );
    localStorage.setItem('tasks', JSON.stringify(remainingTasks));
  }

  function setFormVisible() {
    setIsAddForm(true);
  }
  function setFormInvisible() {
    setIsAddForm(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddTaskButton 
          showForm={setFormVisible}
        />
      </header>
      
      <TaskList tasks={tasks}
            onChange={handleChangeTask}
            onDelete={handleDeleteTask}/>

      <footer className="App-footer">
        <h4 className='footerText'>Task list made by denast</h4>
        <a href="mailto:denis2004ast@gmail.com" className='gmailImageLink'> 
          <img alt="My google" className='gmailImage' src={require("./assets/Gmail_icon_(2020).svg.png")}/> 
        </a>
        <a href="https://t.me/imdenast" className='telegramImageLink'> 
          <img alt="My telegram" className='telegramImage' src={require("./assets/Telegram_icon.png")}/> 
        </a>
      </footer>
      
      {
        isAddForm && (
          <>
            <AddTaskForm 
              closeForm={setFormInvisible}
              handleSubmit={handleAddTask}
            />
            <BackgroundDim />
          </>
        )
      }
    </div>
  );
}

export default App;
