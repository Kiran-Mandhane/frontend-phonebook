const PersonForm = (props) => {
  const { newName, newNumber, handleNameChange, handleNumberChange, addPerson } = props;
    return (
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <button type="submit">add</button>
      </form>
    )
  }
  
  export default PersonForm