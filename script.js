const quizData = [{
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

/* const quiz;
const answerEls;
const questionEl;
const a_text;
const b_text;
const c_text;
const d_text;
const submitBtn; */

let currentQuiz = 0
let score = 0

//question element
let question = document.getElementById("question");
// console.log(question);

//identify the length of array
let randomQuestionLength = quizData.length;
//console.log(randomQuestionLength);

//questions randomly generated
let randomQuestion = Math.floor(Math.random() * randomQuestionLength)
    //console.log(randomQuestion);

let quiz = quizData[randomQuestion];
// console.log(quiz.question);

question.innerText = quiz.question;

//answer a
let aAns = document.getElementById("a_text");
console.log(aAns);
let aResult = quiz.a;
aAns.innerText = aResult;

//answer b
let bAns = document.getElementById("b_text");
console.log(bAns);
let bResult = quiz.b;
bAns.innerText = bResult;

//answer c
let cAns = document.getElementById("c_text");
console.log(cAns);
let cResult = quiz.c;
cAns.innerText = cResult;

//answer d
let dAns = document.getElementById("d_text");
console.log(dAns);
let dResult = quiz.d;
dAns.innerText = dResult;


//correct answer
let correct = quiz.correct;
console.log(correct);

//selected ans
let selectAns = document.querySelector('input[name="answer"]:checked');
// selectAns.addEventListener("click", answerfun);
console.log(selectAns);



loadQuiz()

function loadQuiz() {

}

function deselectAnswers() {}

function getSelected() {

}
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', () => {
    let ans = document.getElementsByName("answer");
    console.log(ans.value);

})