//markTwo - CLI Fandom Quiz App for levelOne of neoGcamp

var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

//Input
console.log(chalk.blue("Welcome to the Fandom Quiz about 'Dr. A.P.J. ABDUL KALAM' \n"))

var userName = readlineSync.question("Please Enter your Name: ");

console.log(" \n");
console.log("Welcome " + chalk.green.bold(userName.toUpperCase()) + " ! \n");
console.log("Play the Quiz of 5 Questions");
console.log("*************************** \n");

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You are Right!"));
    score = score + 1;
    
  }
  else {
    console.log(chalk.red("You are Wrong!"));
    //score = score - 1;
   
  }
  console.log("Your current score is: " + score);
  console.log("------------");
}

//questions as objects
var questionOne = {
   question: "1. Dr. A.P.J. Abdul Kalam was called the _______ Man of India \n",
   answer: "Missile"
  }
var questionTwo = {
   question: "2. Dr. A.P.J. Abdul Kalam's Famous Autobiography Book is: ___ \n",
   answer:"Wings of Fire"
  }
var questionThree = {
  question: "3. Birth Year of Dr. A.P.J. Abdul Kalam:___\n",
  answer: "1931"
}
var questionFour = {
  question: "4. Dr. A.P.J. Abdul Kalam was awarded Bharat Ratna in the year:___ \n",
  answer: "1997"
}
var questionFive = {
  question: "5. Dr. A.P.J. Abdul Kalam became the President of India in the year:___\n",
  answer: "2002"
}
//array of questions
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

//for loop to ask questions
for(var i=0 ; i<questions.length; i++) {
   play(questions[i].question, questions[i].answer);
}

console.log("Yay! Your Score is: " + score);

//data of high scores
var highScores = [{
  name: "Zabi",
  score: 5
}, { name: "Shaik", score: 4 }] 

// for loop to print high scores
for(var j=0; j< highScores.length ; j++) {
console.log("The high score is: " + chalk.cyan(highScores[j].score) + " scored by: " + chalk.yellow(highScores[j].name))
}

console.log(chalk.red.bold("If you have beaten the High Score, send the Screenshot to update in the list"));