import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const addItem = item => {
    setList([...list, item]);
  };

  function handleSubmit(event) {
    if (task) {
      alert('task submitted: ' + task);
      console.log(task);
      addItem(task);
      event.preventDefault();
    } else {
      alert('please type something before submitting');
    }
    
  }
  function handleChange(event) {
    setTask(event.target.value);
    console.log(event.target.value);
  }
  const removeItem = index => {
    setList(list.filter((item, i) => i !== index));
  };
  return (
  <>
    <h1>Welcome!</h1>
    <h1>To do list:</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Enter to do list:
        <input type="text" onChange={handleChange} name="todo" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
          ))}
      </ul>
  </>);
  
    
}

export default App;
