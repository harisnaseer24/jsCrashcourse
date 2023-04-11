// let userAge= +prompt("Enter your Age");
// if(userAge<=10){
//     console.log('You Are Welcome');
// }
// else{
//     console.log('You are Not Allowed');
// }

//Assignment no 1
let number1=prompt('Enter 1st Number');
let number2=prompt('Enter 1st Number');
if(number1>number2){
    console.log("1st number is greater than 2nd number that is: " + number1)
}
else{
    console.log("2nd number is greater than 1st number that is: " +  number2)
}

//Assignmnet no 2
let number= prompt('Enter a Number');
let test= Math.sign(no1)
if(test==-1){
   alert('Sign is - ')
}
else{
     alert('Sign is + ')
}

// Assignmnet no 3
let num1= +prompt('Enter a Number');
let num2= prompt('Enter a Number');
let num3= +prompt('Enter a Number');
let num4= prompt('Enter a Number');
let num5= +prompt('Enter a Number');
let largest=0;

if(num1 > num2 && num1>num3 && num1>num4 && num1>num5){
  largest=num1;
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
    largest=num2;
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
    largest=num3;
}
else if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
    largest=num4;
}
else {
    largest= num5;
}


console.log(largest)

//Assignment no 4
for(let i=0;i<=15;i++){ if(i%2===0){


    document.write(i+" is even number<br>");}

else{
    document.write(i+" is odd number<br>");
}}

// Assignment no 5
let eng= +prompt("Enter marks in English out of 100: ")
let urdu= +prompt("Enter marks in Urdu out of 100: ")
let science= +prompt("Enter marks in Science out of 100: ")
let total=300;
let percentage=(eng+urdu+science)/total * 100;
if(percentage<60){
    alert("F Grade")
}
else if(percentage<70){
    alert("E Grade")
}
else if(percentage<70){
    alert("D Grade")
}
else if(percentage<80){
    alert("C Grade")
}
else if(percentage<90){
    alert("B Grade")
}
else if(percentage<=100){
    alert("A Grade")
}
else{
    alert("Enter numbers out of 100")
}
//Assignment no 6
for (let i=0; i<=100;i++){
    if(i%5==0 && i%3==0){
        document.write("FizzBuzz<br>")
        console.log("FizzBuzz")
}
    else if(i%3==0){
        document.write("Fizz<br>")
        console.log("Fizz")
    }
    else if(i%5==0){
        document.write("Buzz<br>")
    console.log("Buzz")}
else{
    document.write(i+"<br>")
        console.log(i)
}
}

//Assignment no 7
for(let i=1;i<=5;i++){
    for(let j=0;j<i;j++){
        document.write("*")
    }
    document.write("<br>")
}