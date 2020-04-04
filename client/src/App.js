import React, { useState, useEffect } from "react";
import "./App.css";
import { _onGet, _onPost, _onDelete, _onEdit } from "./Methods";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    _onGet().then(res => setData(res));
  }, [data]);

  const useData = () => {
    return data.length ? (
      data.map((item, key) => (
        <tr key={key}>
          <td contentEditable={false}>Name: {item.name} == </td>
          <td contentEditable={false}>
            Age: {item.age}
            <button onClick={() => _onDelete(item._id)}>delete</button>
            <button onClick={() => _onEdit(key, item._id)}>edit</button>
          </td>
        </tr>
      ))
    ) : (
      <p>Loading...</p>
    );
  };
  return (
    <div className="App">
      <form onSubmit={_onPost}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          style={{ marginTop: "2em" }}
        />
        <br />
        <input
          type="text"
          placeholder="Age"
          name="age"
          style={{ width: 105, marginTop: "1em" }}
        />
        <button type="submit">Add Todo</button>
        <table
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "1em"
          }}
        >
          {useData()}
        </table>
      </form>
    </div>
  );
};

export default App;
