// quiz question array

const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    id: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    id: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  
  {
    id: "3",
    question: "What does HTML stand for?",
    options: [
      "Hyperlink Tail Manager Lost",
      "HyperText Mark-up language",
      "HypoText Mark-up language",
      "None of these",
    ],
    answer: "HyperText Mark-up language",
  },
  {
    id: "4",
    question: "What does HTML stand for?",
    options: [
      "Hyperlink Tail Manager Lost",
      "HyperText Mark-up language",
      "HypoText Mark-up language",
      "None of these",
    ],
    answer: "HyperText Mark-up language",
  },
  {
    id: "6",
    question: "What does HTML stand for?",
    options: [
      "Hyperlink Tail Manager Lost",
      "HyperText Mark-up language",
      "HypoText Mark-up language",
      "None of these",
    ],
    answer: "HyperText Mark-up language",
  },
  {
    id: "7",
    question: "What does HTML stand for?",
    options: [
      "Hyperlink Tail Manager Lost",
      "HyperText Mark-up language",
      "HypoText Mark-up language",
      "None of these",
    ],
    answer: "HyperText Mark-up language",
  },
  {
    id: "8",
    question: "What does HTML stand for?",
    options: [
      "Hyperlink Tail Manager Lost",
      "HyperText Mark-up language",
      "HypoText Mark-up language",
      "None of these",
    ],
    answer: "HyperText Mark-up language",
  },
  {
    id: "9",
    question: "What does HTML stand for?",
    options: [
      "Hyperlink Tail Manager Lost",
      "HyperText Mark-up language",
      "HypoText Mark-up language",
      "None of these",
    ],
    answer: "HyperText Mark-up language",
  },
];

// element selector for quiz

const startButton = document.querySelector(".start_btn button");
const infoDiv = document.querySelector(".info_div");
const continueButton = infoDiv.querySelector(".buttons .restart");
const exitButton = infoDiv.querySelector(".buttons .quit");
const quizDiv = document.querySelector(".quiz_div");
const resultDiv = document.querySelector(".result_div");
const restartButton = resultDiv.querySelector(".buttons .restart");
const quitButton = resultDiv.querySelector(".buttons .quit");
const questionOptions = document.querySelector(".question_options");
const timerBar = document.querySelector(".timer_bar");
const timerCount = document.querySelector(".time_count");
const timerLeft = document.querySelector(".time_left");
const nextButton = document.querySelector("footer .next_btn");
const bottomQuestionCounter = document.querySelector("footer .question_total");

// start of quiz onces event handles triggered

startButton.addEventListener("click", () => {
  infoDiv.classList.add("showInfo"); // show info div when clicked
});

// quits quiz onces event handles triggered

exitButton.addEventListener("click", () => {
  infoDiv.classList.remove("showInfo"); // active info div
});

// continue onces event handles triggered
continueButton.addEventListener("click", () => {
  infoDiv.classList.remove("showInfo"); // active info div
  quizDiv.classList.add("showQuiz"); // active Quiz div
  showQuestions(0); //  calling showQuestion
  questionCounter(1); // passing parameter to questionCount
  startTimer(10); // starting timer
  startBarTimer(0); // starting bar timer
});

let timeValue = 10;
let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let counter;
let counterBar;
let barValue = 0;

// restart the quiz on event handles triggered

restartButton.addEventListener("click", () => {
  quizDiv.classList.add("showQuiz"); // active Quiz div
  resultDiv.classList.remove("showResult"); // hides result div
  timeValue = 10;
  questionCount = 0;
  questionNumber = 1;
  userScore = 0;
  barValue = 0;
  showQuestions(questionCount); // calling showQuestion function
  questionCounter(questionCount); // passing parameter value to questionCounter
  clearInterval(counter); // clears the counter
  clearInterval(counterBar); // clearing the bar timer
  startTimer(timeValue); // calls startTimer function
  startBarTimer(barValue); // calls startBarTimer function
  timerLeft.textContent = " Time Left";
  nextButton.classList.remove("show"); // hides next button
});

// quits quiz if handle clicked
quitButton.addEventListener("click", () => {
  window.location.reload(); //  reloads the current window
});

// when the next button is triggered with click
nextButton.addEventListener("click", () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    questionNumber++;
    showQuestions(questionCount);
    questionCounter(questionNumber);
    clearInterval(counter); // clears the counter
    clearInterval(counterBar); // clearing the bar timer
    startTimer(timeValue); // calls startTimer function
    startBarTimer(barValue); // calls startBarTimer function
    timerLeft.textContent = " Time Left";
    nextButton.classList.remove("show"); // hides next button
  } else {
    clearInterval(counter); // clears the counter
    clearInterval(counterBar); // clearing the bar timer
    showResult(); // calling showResult function
  }
});


function showQuestions(index) {
  const questionText = document.querySelector(".question_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let questionTag =
    "<span>" +
    questions[index].id +
    ". " +
    questions[index].question +
    "</span>";
  let optionTag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  questionText.innerHTML = questionTag; //adding new span tag inside questionTag
  questionOptions.innerHTML = optionTag; //adding new div tag inside optionTag

  const option = questionOptions.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterBar); //clear counterbar
  let userAnswer = answer.textContent; //getting user selected option
  let correctAnswer = questions[questionCount].answer; //getting correct answer from array
  const allOptions = questionOptions.children.length; //getting all option items

  if (userAnswer == correctAnswer) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("wrong"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (questionOptions.children[i].textContent == correctAnswer) {
        //if there is an option which is matched to an array answer
        questionOptions.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        questionOptions.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    questionOptions.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  nextButton.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  infoDiv.classList.remove("showInfo"); //hide info box
  quizDiv.classList.remove("showQuiz"); //hide quiz box
  resultDiv.classList.add("showResult"); //show result box
  const scoreText = resultDiv.querySelector(".finished_score");
  if (userScore > 8) {
    // if user scored more than 8
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span> Congrats and well done! You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside finished_score
  } else if (userScore > 6) {
    // if user scored more than 1
    let scoreTag =
      "<span> Not to bad, You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<span> Maybe you should study more <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timerCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) {
      //if timer is less than 9
      let addZero = timerCount.textContent;
      timerCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timerLeft.textContent = "Time Off"; //change the time text to time off
      const allOptions = questionOptions.children.length; //getting all option items
      let correctAnswer = questions[questionCount].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (questionOptions.children[i].textContent == correctAnswer) {
          //if there is an option which is matched to an array answer
          questionOptions.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          questionOptions.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        questionOptions.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      nextButton.classList.add("show"); //show the next button if user selected any option
    }
  }
}

function startBarTimer(time) {
  counterBar = setInterval(timer, 20);
  function timer() {
    time += 1; //upgrading time value with 1
    timerBar.style.width = time + "px"; //increasing width of timerBar with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterBar); //clear counterBar
    }
  }
}

function questionCounter(index) {
  let totalQuestionCountTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
    bottomQuestionCounter.innerHTML = totalQuestionCountTag;
}
