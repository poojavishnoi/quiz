var readlineSync = require('readline-sync');
var score = 0;
var name = readlineSync.question("What is your name?");
console.log("Hi!!" + name)
console.log("I am Pooja Vishnoi")

console.log("---------------------")
console.log("Lets play a quiz")
console.log("How much you know me...")

console.log("---------------------")
var questionOne  = {
  question: "What is my favorite food?",
  answer: "pav bhaji"
}

var questionTwo = {
  question: "What would i prefer a walk at night or staying in?",
  answer: "walk"
}

var questionThree = {
  question: "When is my birthday?(ex:12 Jan 2000)",
  answer: "18 Nov 2001"

}



var question = [questionOne, questionTwo, questionThree];

for(var i=0; i < question.length; i++){
  var currentQuestion = question[i];

  var userAnswer=readlineSync.question(currentQuestion.question);

  if(userAnswer === currentQuestion.answer){
    console.log("Correct!")
    score++
  }else{
    console.log("Wrong")
  }
  console.log("score is "+ score)
}