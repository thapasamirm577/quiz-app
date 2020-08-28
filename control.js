const questions =[
    {
      question1: "What is the file name of javascript?",
      guess: [".js",".py",".exe",".css"],
      answer: ".js"
     },
    {
      question1: "what is the name of your brother?",
      guess: ["saroj","ram","suman","shyam"],
      answer: "saroj"
    },
    {
      question1: "What do you do?",
      guess: ["programmer","student",".doctor","engineer"],
      answer: "sutdent"
    },
    {
      question1: "What is the full form of js ",
      guess: ["javascript", "python", "java", "ruby"],
      answer: "javascript"
    }
]
const Q1 = document.getElementById("question");
const guess0 = document.getElementById("guess0");
const guess1 = document.getElementById("guess1");
const guess2 = document.getElementById("guess2");
const guess3 = document.getElementById("guess3");
const nextBtn = document.getElementById("next-btn");
const doneBtn = document.getElementById("done-btn");
const x = document.getElementById("question-box");
const qguess = document.getElementsByClassName("qguess");

let questionIndex = 0;

window.addEventListener("DOMContentLoaded", function(){
    showQuestion(questionIndex);
});

function showQuestion(){
    const item = questions[questionIndex];
    Q1.textContent = item.question1;
    guess0.textContent = item.guess[0];
    guess1.textContent = item.guess[1];
    guess2.textContent = item.guess[2];
    guess3.textContent = item.guess[3];
}

nextBtn.addEventListener("click", function(){
    questionIndex++;
    
    if(questionIndex > questions.length){
        endQuiz();
    }
    showQuestion(questionIndex);

});

function endQuiz(){
    doneBtn.addEventListener("click", function(){
        x.style.display = "none";
        if(x.style.display === "none"){
            const empty = document.getElementById("enddiv");
            empty.innerHTML = "<h1>You have done all of your questions!</h1>";
        }
    });
    
}

