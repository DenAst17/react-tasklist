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
      console.log(redPart, greenPart, bluePart);
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
        <div className={containerClassName}>
          <h4><b>{task.title}</b></h4>
        </div>
        <button className = "cancelButton" onClick={() => onDelete(task.id)} > 
            Delete
        </button>
      </div>
    );
  }