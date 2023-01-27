import './AddTaskForm.css';

export default function AddTaskForm({
  closeForm,
  handleSubmit
}) {
  return (
    <form className = "addTaskForm" onSubmit={handleSubmit}>
      <header className='formDescription'>
        Type the task below:
      </header>
      <section className="formCard">
        <label className="taskInputContainer">
          <input type = "color" name="taskColor">
          </input>
        </label>
        <label className="taskInputContainer">
          <input type = "text" placeholder='Go to the shop' name="taskText">
          </input>
        </label>
        <button className="cancelAddButton" onClick={closeForm}>
          Cancel
        </button>
        <button className="oKButton">
          Add
        </button>
      </section >
    </form>
  );
}