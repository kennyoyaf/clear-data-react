import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="items">
            <h4>{name}</h4>
            <button className="remove" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <div className="btn">
        <button onClick={() => setPeople([])} className="clear">
          Clear Items
        </button>
      </div>
    </>
  );
}

export default App;
