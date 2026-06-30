import {useState} from "react";
import "./List.css";

const List = () =>{
    const [List,setList] = useState([]);
    const [input,setInput] = useState("");


    // logic here
    const handleAddItem = () => {
        if(input.trim() === "") return;

      // my logic for checking if the item already exists in the list
      if(List.includes(input)){
        alert("Item already exists in the list!");
        return;
      }

        setList([...List,input]);

        setInput("");
    }
    
return(
     <div className="list">
        <h2>problem 1:</h2>
        <h3>Item List Manager</h3>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />

        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>

        <ul data-testid="item-list">
          {List.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
)
}
export default List;