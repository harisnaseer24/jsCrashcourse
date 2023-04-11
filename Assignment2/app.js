//Assignment 01

function closureFunction(num) {

  function add(numberFromClosure, number) {
    console.log(num + number)
  }
  return add(num, 5);
}
closureFunction(10);

//Assignment 02

let arr = ["haris", "hassan", "shakeel", "faizan"]
let x = 0;
function findVal(name, array) {
  for (let i = 0; i < arr.length; i++)
    if (x < arr.length) {


      if (array[x] === name) {
        return true + " at " + x
      } else {
        x++;

        findVal("faizan", arr)
      }

    }
    else { return false }
}

let findName1 = findVal("faizan", arr);
let findName2 = findVal("harry", arr);

console.log(findName1);
console.log(findName2);

//Assignment 03

function addPara(content, id) {
  document.write("<p id=" + id + ">" + content + "</p>")
}

addPara("Hello Haris. How Are You...?")

//Assignment 04

function addListItem(content) {
  let ulist = document.getElementById('days');
  let li = document.createElement('li');
  let text = document.createTextNode(content);

  li.appendChild(text);
  ulist.appendChild(li);


}
addListItem("Saturday");
addListItem("Sunday");


//Assignment 05

function changeBgColor(id, color) {
  document.getElementById(id).style.backgroundColor = color;

}
changeBgColor("main", "lightBlue")

//Assignment 06

let student = {
  fname: "Haris",
  lname: " Naseer",
  age: 22,
}
function storeInLocal(key, object) {
  let stringify = JSON.stringify(object);
  localStorage.setItem(key, stringify);
  console.log(localStorage);

}

storeInLocal("StudentData", student);

//Assignment 07

function getFromLocalStorage(key) {
  let getItem = localStorage.getItem(key);
  let parseObj = JSON.parse(getItem);
  console.log(parseObj);
}
getFromLocalStorage("StudentData")

//Assignment 08

let person = {
  name: "khurram",
  age: 19,
  height: "5ft 11inches"
}
function setIteminLocal(object) {
  localStorage.setItem("name", object.name)
  localStorage.setItem("age", object.age)
  localStorage.setItem("height", object.height)
}
function getItemfromLocal(key1, key2, key3) {
  let newPerson = {
    name: localStorage.getItem(key1),
    age: localStorage.getItem(key2),
    height: localStorage.getItem(key3)
  };
  return newPerson;
}

setIteminLocal(person);
console.log(getItemfromLocal("name", "age", "height"));
