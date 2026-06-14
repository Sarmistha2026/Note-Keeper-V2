import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [currentNote, SetNote] = useState([]);
  function addData(element) {
    SetNote((prev) => {
      return [...prev, element];
    });
  }

  function DelNote(idx) {
    SetNote((prev) => {
      return prev.filter((item, id) => {
        return id != idx;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addButton={addData} />

      {currentNote.map((eachNote, index) => {
        return (
          <Note
            key={index}
            idx={index}
            deleteContent={DelNote}
            title={eachNote.title}
            content={eachNote.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
