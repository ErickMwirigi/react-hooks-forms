import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [firstName2, setFirstName2] =useState("Erick")
  const [lastName2, setLastName2] = useState("Mwirigi")

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <>
     <form>
       <input type="text" onChange={handleFirstNameChange} value={firstName} />
       <input type="text" onChange={handleLastNameChange} value={lastName} />
       <button type="submit">Submit</button>
     </form>
     <form>
        <input type="text" value={firstName2}/>
        <input type="text" value={lastName2}/>
        <button type="submit">Submit</button>
     </form>
    </>
  );
}

export default Form;
