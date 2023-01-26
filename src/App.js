import './App.css';
import AddTaskButton from './components/AddTaskButton';
import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskAddForm from './components/TaskAddForm';

let nextId = 3;
const initialTasks = [
  { id: 0, title: 'Short task', done: true },
  { id: 1, title: 'Loooooo ooooooooooo oooooooooooo oooooooooong task', done: false },
  { id: 2, title: 'Midddddd dddddddle task', done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(title) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
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
    setTasks(
      tasks.filter(t => t.id !== taskId)
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <AddTaskButton />
      </header>
      
      <TaskList tasks={tasks}
            onChange={handleChangeTask}
            onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
