import React, { useState } from "react";
import Todo from "./Todo";
import Text from "./Text";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inp, sett) {
    setItems(prevItems => {
      return [...prevItems, inp];
    });
    sett("");
  }

  function onclick(id) {
    setItems((pre) => {
      return pre.filter((item, index) => {
        return index !== id;
      })
    })

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Text bclick={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Todo key={index} id={index} text={todoItem} click={onclick} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
