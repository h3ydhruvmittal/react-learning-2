import React, { Fragment, useState } from "react";

let counter=4;
function App() {
  
  const [todos, setToDos] = useState([{
    id:1,
    title:"work1",
    description:"done1"
  },{
    id:2,
    title:"work2",
    description:"done2"
  },{
    id:3,
    title:"work3",
    description:"done3"
  }
]);

  return (
    <div>
      <button onClick={addToDo}>Add a todo</button>
      {todos.map(todo => <ToDo title={todo.title} description={todo.description} key={todo.id} />)}
    </div>
  );
  
  function addToDo(){
    setToDos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  };
  
}

function ToDo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App;
