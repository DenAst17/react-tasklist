import { useEffect, useState } from 'react';
import { useRef } from 'react';
import './AddTaskForm.css';

export default function AddTaskForm({
  closeForm,
  handleSubmit
}) {

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
    colorInput.defaultValue = "#D1D1D1"
    var card = document.getElementById("addTaskForm");
    var color = colorInput.value;
    card.style.backgroundColor = color;
  });
  const [containerClassName, setContainerClassName] = useState('formDescription');

  function changeColor() {
    var colorInput = document.getElementById("formColorInput");
    var card = document.getElementById("addTaskForm");
    var color = colorInput.value;
    card.style.backgroundColor = color;
    if (isDarkColor(color)) {
      setContainerClassName('formDescription whiteColor');
    }
    else {
      setContainerClassName('formDescription');
    }
  }

  return (
    <form id = "addTaskForm" className = "addTaskForm" onSubmit={handleSubmit}>
      <header className={containerClassName}>
        Type the task below:
      </header>
      <section className="formCard">
        <label className="taskInputContainer">
          <input type = "text" placeholder='Go to the shop' name="taskText">
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
          defaultValue="12:00"
          >
          </input>
        </label>
        <button className="cancelAddButton" onClick={closeForm}>
          Cancel
        </button>
        <button className="oKButton">
          Add
        </button>
      </footer>
    </form>
  );
}