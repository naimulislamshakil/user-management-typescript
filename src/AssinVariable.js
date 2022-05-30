import React from "react";

const AssinVariable = () => {
  // assin variable using javascript

  // when assin variable using let and reassin varible javascript can not mind

  // assin a string type variable
  let book = "javascript books";

  // assin a Boolean type variable using book
  book = true;

  // assin a Number type variable using book
  book = 55;

  // assin a function type variable using book
  book = () => 55;

  // assin a array type variable using book
  book = [1, 2, 3, 4, 5, 6, 7];

  // assin a string of array type variable using book
  book = ["books", "javascript", "c", "c++"];

  // assin a object type variable using book
  book = {
    name: "naimul",
    age: 23,
    job: "dev",
  };

  console.log(book);

  // javascript can not mind this
  return (
    <div>
      <h2>JavaScript Assinment variable</h2>
    </div>
  );
};

export default AssinVariable;
