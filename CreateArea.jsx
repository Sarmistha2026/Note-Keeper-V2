import React, { useState } from "react";

function CreateArea(props) {
  const [InputText, SetText] = useState({
    title: "",
    content: "",
  });
  function EditHandler(event) {
    const { name, value } = event.target; //destructuring
    SetText((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    props.addButton(InputText);
  }
  return (
    <div>
      <form>
        <input name="title" onChange={EditHandler} placeholder="Title" />
        <textarea
          name="content"
          onChange={EditHandler}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
