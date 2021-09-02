//This CLI app is a quiz app for checking one's Marvel cinematic universe knowledge

var readlineSync = require('readline-sync');

var score = 0;

var highScores = [
  {
    name: "Koushik",
    score: 5
  },
  {
    name: "Greeshma",
    score: 3
  }
]

var questionsList = [
  {
    question:"Which actor plays the role of IronMan?",
    answer:"Robert Downey Jr"
  },
  {
    question:"In which year did the first Avengers movie release?",
    answer:"2012"
  },
  {
    question: "What is Black panther's suit made from?",
    answer: "Vibranium"
  },
  {
    question: "What does Thor call Racoon?",
    answer: "Rabbit"
  },
  {
    question: "Who is the boyfriend of Scarlett witch?",
    answer: "Vision"
  }
]

//get user name
var userName = readlineSync.question("May I have your name?");

//greet the user
console.log("Welcome " + userName + " to Marvel Cinematic Universe quiz");

//ex08: function to check the answer
function checkAnswer(question, anwser){
  var userAnswer = readlineSync.question(question);
  
  //assuming all answers are of type string
  if(userAnswer.toLowerCase()===anwser.toLowerCase()){
  score+=1;
  console.log(`You are right!
current score: ${score}
-------------`);
  }else{
  score-=1;
  console.log(`You are wrong!
current score: ${score}
-------------`);
  }
}

//quiz
questionsList.forEach((item)=>{
  checkAnswer(item.question, item.answer);
})

//final score
console.log("HURRAY!, Your FINAL SCORE is " + score);

//calculate the highest score
var maxScore = highScores[0].score;
highScores.forEach((item)=>{
  if(item.score>maxScore){
    maxScore = item.score;
  }
});

console.log("The highest score of this quiz is " + maxScore);