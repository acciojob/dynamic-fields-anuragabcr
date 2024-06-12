import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [data, setData] = useState([])

  const addMore = () => {
    setData([...data, {id: data.length+1, name, age}])
    // setName('')
    // setAge('')
  }

  const handleSubmit = () => {
    console.log(data);
  }

  const removeRow = (id) => {
    setData(data => data.filter(row => row.id!=id))
  }

  return (
    <div>
      <form>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" name="age" value={age} onChange={e => setAge(e.target.value)} />
            </form>
        <table border={1}>
          <tbody>
          {data.length > 0 && data.map(row => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td><button onClick={() => removeRow(row.id)}>Remove</button></td>
            </tr>
          ))}
          </tbody>
        </table>
        <div>
          <button onClick={addMore} value="Add More..">Add More..</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default App
