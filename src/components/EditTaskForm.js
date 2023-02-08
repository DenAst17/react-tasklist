import { useEffect, useState } from 'react';
import { useRef } from 'react';
import './EditTaskForm.css';

export default function EditTaskForm({
  closeForm,
  handleSubmit,
  editedTask
}) {
  const [containerClassName, setContainerClassName] = useState('formDescription');
  const [taskText, setTaskText] = useState(editedTask.title)
  const [taskColor, setTaskColor] = useState(editedTask.color)
  const [taskTime, setTaskTime] = useState(editedTask.time)

  function isDarkColor(color) {
    let redPart = color.slice(1, 3);
    let greenPart = color.slice(3, 5);
    let bluePart = color.slice(5, 7);
    if(redPart < "80" && greenPart < "80" && bluePart < "80") {
      return true;
    }
    else {
      return false;
    }
  }

  useEffect(() => {
    var colorInput = document.getElementById("formColorInput");
    colorInput.defaultValue = editedTask.color
    var card = document.getElementById("editTaskForm");
    var color = colorInput.value;
    card.style.backgroundColor = color;
  });

  function changeColor() {
    var colorInput = document.getElementById("formColorInput");
    var card = document.getElementById("editTaskForm");
    var color = colorInput.value;
    card.style.backgroundColor = color;
    if (isDarkColor(color)) {
      setContainerClassName('formDescription whiteColor');
    }
    else {
      setContainerClassName('formDescription');
    }
  }

  function changeTaskText(event) {
    setTaskText(event.target.value);
  }

  return (
    <form id = "editTaskForm" className = "editTaskForm" onSubmit={handleSubmit}>
      <header className={containerClassName}>
        Type the task below:
      </header>
      <section className="formCard">
        <label className="taskInputContainer">
          <input type = "text" placeholder='Go to the shop' name="taskText" value = {taskText} onChange={changeTaskText}>
          </input>
        </label>
      </section >
      <section className="formCard colorCard">
        <header className={containerClassName}>
          Task color:
        </header>
        <label className="taskInputContainer">
            <input
            id = "formColorInput"
            type = "color" 
            name="taskColor" 
            onChange={changeColor}
            >
            </input>
          </label>
      </section>
      <footer className="formCard">
      <label className="taskInputContainer">
          <input
          id = "formTimeInput"
          type = "time" 
          name="taskTime"
          defaultValue={editedTask.time}
          >
          </input>
        </label>
        <button className="cancelAddButton" onClick={closeForm}>
          Cancel
        </button>
        <button className="oKButton">
          Update
        </button>
      </footer>
    </form>
  );
}