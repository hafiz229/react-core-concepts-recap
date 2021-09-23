import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand="Apple" price="5000"></MyComponent>
      <MyComponent brand="Microsoft" price="10000"></MyComponent>
      <MyComponent brand="Google" price="0"></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {users.map((user) => (
        <User name={user.name} phone={user.phone}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="user">
      <h2>Name: {props.name}</h2>
      <p>Cell: {props.phone}</p>
    </div>
  );
}

function MyComponent(props) {
  // using useState to change the state
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: "lightblue",
    border: "3px solid blue",
    margin: "10px",
    padding: "5px",
    borderRadius: "10px",
  };

  // Click handler function
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  };

  // return this style if use <MyComponent></MyComponent>
  return (
    <div style={myStyle}>
      <h1>Brand: {props.brand}</h1>
      <h3>Price: ${props.price}</h3>
      <h3>Bonus Point: {points}</h3>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{ color: "blue", fontWeight: "bold" }}>
        I can write my own component
      </p>
    </div>
  );
}

export default App;
