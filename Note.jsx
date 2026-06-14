import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  function delHandler() {
    props.deleteContent(props.idx);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={delHandler}>
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;
