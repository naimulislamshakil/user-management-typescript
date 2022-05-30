import React from "react";
import "./App.css";
import IncressDecress from "./IncressDecress";

function App() {
  // assin variable using typescript

  // when assin variable using let and reassin varible typescript mark down error

  // assin a string type variable
  let book: string = "javascript books";

  // assin a Boolean type variable using book
  // book = true;

  // you can not assin agin variable using book string to another type of variable
  // but you can assin a string type variable
  // example:
  book = "naimul";
  console.log(book);

  // assin a Number type variable
  const number: number = 55;
  console.log(number);

  // assin a Boolean type variable
  const boolian: boolean = true;
  console.log(boolian);

  // assin a function type variable
  // 1. when you return anything
  // I am return a number so i declaire number
  const arr = (): number => 55;
  console.log(arr());

  // 2.when you input some parameter
  // declaire parameter type of variable
  // you can use interface
  const parameterFun = (firstName: string, age: number) => {
    console.log(firstName, age);
  };
  console.log(parameterFun("Naimul", 23));

  // 3. when you cannot return
  const nothing = (): void => {
    console.log("I am using typescript");
  };
  console.log(nothing());

  // assin a array type variable
  const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  console.log(numberArray);

  // assin a string of array type variable
  const stringArray: string[] = ["books", "javascript", "c", "c++"];
  console.log(stringArray);

  // assin a object type variable
  const student: { name: string; age: Number; job: string } = {
    name: "naimul",
    age: 23,
    job: "dev",
  };
  console.log(student);

  interface Person {
    name: string;
    age: number;
    // assin more than one type
    job?: string | number;
  }

  // you can use interfaces assin object type variable
  const person: Person = {
    name: "jolly",
    age: 33,
  };
  console.log(person);

  return (
    <div className="App">
      <IncressDecress></IncressDecress>
    </div>
  );
}

export default App;
