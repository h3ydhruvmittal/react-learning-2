import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "work1",
      description: "done1",
      completed: false,
    },
  ]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        console.log(json.todos);
        setTodos(json.todos);
      })
    }, 10000)
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <ToDo title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function ToDo({ title, description }) {
  return (
    <div>
      <h1>Today's topic is UseEffect</h1>
      <h5>
        Write a todo application by fetching data from an API and wrap it inside
        a useEffect Hook
      </h5>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
