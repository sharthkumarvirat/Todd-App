import React, { useEffect, useState } from "react";
// import img from "../components/image.jpg";
import todoBackground from "../components/todoList.jpeg";

function TodoHome() {
    
  const getItems = () => {
    const lcl = localStorage.getItem("todo");
    if (lcl) {
      return JSON.parse(lcl);
    } else {
      return [];
    }
  };

  const [add, setAdd] = useState("");
  const [items, setItems] = useState(getItems);

  const addTask = () => {
    if (add !== "") {
      const newTask = { add };
      setItems([...items, newTask]);
      setAdd("");
    } else {
      alert("Enter something");
    }
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(items));
  }, [items]);

  const deleteItems = (id) => {
    let update = items.filter((ele, index) => {
      return index !== id;
    });
    setItems(update);
  };

  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center mx-auto sm:items-center sm:justify-between main-container  ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <img
          className="w-full"
          src={todoBackground}
          style={{height:"50%"}}
        />
        <input
          type="text"
          className="input-box-todo"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <span>
          <button className="add-btn" onClick={addTask}>
            +
          </button>
        </span>
        <div className="px-6 py-4 bg-slate-300">
          <div className="font-bold text-xl h-full">Things to do</div>
        </div>
        <hr />
        <div className="px-6 py-4 bg-slate-300 sub-container overflow-scroll ">
          {items.map((ele, index) => {
            return (
              <li className="list-item">
                {ele.add}
                <span className="icons">
                  {" "}
                  <button onClick={() => deleteItems(index)}>🗑️</button>
                  {/* <i className="fa-solid fa-trash-can icon-delete" /> */}
                </span>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoHome;
