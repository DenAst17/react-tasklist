import { useState } from "react";

export default function DefaultButton() {
    const [number, setnumber] = useState(0);
    function plusPlus() {
        setnumber(number + 1);
    }
    return (
      <button 
      className="button-plus"
      onClick={plusPlus}
      >
        I'm a button {number}
        </button>
    );
  }