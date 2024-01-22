import Person from './Person'

const Display = (props) => {
    const {persons, deletePersonFunc} = props;
    console.log("display is running")
    persons.map(person => console.log(person.id))
      return (
        <div>
        {persons.map(person => 
              <Person 
              key={person.name}
              name={person.name} 
              number={person.number} 
              deletePerson={
                () => {deletePersonFunc(person.id)}
                //the prop is a function that when invoked, calls the deletePersonFunc function on the person.id
              } 
              />
        )}
        </div>
      )
    }
    
export default Display