import React from 'react'
import User from './components/User'
const Practice = () => {
     const arr = [10, 20, 30, 40];
     const array = [
       { user: "Sanket ", age: "23" },
       { user: "Anika ", age: "25" },
       { user: "Pooja ", age: "22" },
     ];
  return (
    <div>
    
      <User name={arr[0]} />
      <User name="Anika" />
      <User name="Pooja" />
      {arr.map(function (val) {
        return <h1>{val}</h1>;
      })}
      {array.map(function (elem) {
        return elem.user;
      })}
    </div>
  );
}

export default Practice