import './TaskShowCard.css';

export default function TaskShowCard({
  task,
  onChange,
  onDelete
}) {
    //console.log(task.color);

    let containerClassName = 'container';

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

    if (isDarkColor(task.color)) {
      containerClassName += ' whiteColor';
    }

    return (
      <div className="card" style={{backgroundColor:task.color}}>
        <section className={containerClassName}>
          <header>
            <h3 className = "taskTime"><b>{task.time}</b></h3>
          </header>
          <h4 className = "taskTitle"><b>{task.title}</b></h4>
        </section>
        <button className = "cancelButton" onClick={() => onDelete(task.id)} > 
            Delete
        </button>
      </div>
    );
  }