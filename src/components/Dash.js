import React, { useEffect, useState } from "react";

function Dash() {
  const getItems = () => {
    let lcl = localStorage.getItem("todo");
    if (lcl) {
      return JSON.parse(lcl);
    } else {
      return [];
    }
  };

  const [add, setAdd] = useState("");
  const [list, setList] = useState(getItems);
  const [color,setColor]=useState("")

  const submit = (e) => {
    if (add === "") {
      alert("Please enter something");
    } else {
      const newTask = { add:add,color:color};
      setList([...list, newTask]);
      setAdd("");
      setColor("")
    }
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));
  }, [list]);

  const deleteItems = (id) => {
    const update = list.filter((ele, index) => {
      return index !== id;
    });
    setList(update);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
       
        <span> <input type="color" onChange={(e)=>setColor(e.target.value)}/></span>
        <span>
          <button onClick={(e) => submit()}>Add</button>
        </span>
      </div>
      <div>
        <h2>Things to do</h2>
      </div>
      {list.map((ele,index)=>{
        return(
          <li style={{color:ele.color}}>
            {ele.add}
            <span><button onClick={()=>deleteItems(index)}>Delete</button></span>
          </li>
        )
      })}
    </div>
  );
}

export default Dash;
