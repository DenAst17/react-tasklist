import './TaskAddForm.css';

export default function TaskAddForm() {
  return (
    <div className = "formWrapper">
      <form className="formCard">
        <div className="container">
          <h4><b>Some useful info</b></h4>
        </div>
        <button className="cancelButton">
          Delete
        </button>
      </form>
    </div>
  );
}