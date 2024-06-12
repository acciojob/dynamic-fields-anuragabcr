// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   const [name, setName] = useState('')
//   const [age, setAge] = useState('')
//   const [data, setData] = useState([])

//   const addMore = () => {
//     setData([...data, {id: data.length+1, name, age}])
//     // setName('')
//     // setAge('')
//   }

//   const handleSubmit = () => {
//     console.log(data);
//   }

//   const removeRow = (id) => {
//     setData(data => data.filter(row => row.id!=id))
//   }

//   return (
//     <div>
//       <form>
//         <input type="number" name="age" value={age} onChange={e => setAge(e.target.value)} />
//         <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
//       </form>
//       <table border={1}>
//         <tbody>
//         {data.length > 0 && data.map(row => (
//           <tr key={row.id}>
//             <td>{row.name}</td>
//             <td>{row.age}</td>
//             <td><button onClick={() => removeRow(row.id)}>Remove</button></td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
//       <div>
//         <button onClick={addMore} value="Add More..">Add More..</button>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';

function App() {
  const [fields, setFields] = useState([
    { id: 1, name: '', age: '' },
  ]);

  const handleAddField = () => {
    const newField = { id: fields.length + 1, name: '', age: '' };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, event) => {
    const updatedFields = [...fields];
    const index = updatedFields.findIndex((field) => field.id === id);
    updatedFields[index][event.target.name] = event.target.value;
    setFields(updatedFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.id} className="field">
          <label htmlFor={`name-${field.id}`}>Name:</label>
          <input
            type="text"
            id={`name-${field.id}`}
            name="name"
            value={field.name}
            onChange={(e) => handleChange(field.id, e)}
          />

          <label htmlFor={`age-${field.id}`}>Age:</label>
          <input
            type="number"
            id={`age-${field.id}`}
            name="age"
            value={field.id}
            onChange={(e) => handleChange(field.id, e)}
          />

          <button type="button" onClick={() => handleRemoveField(field.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField} value="Add More..">
      Add More..
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
