// handwriter effect code

const textElement = document.getElementById("title");
const text = textElement.innerText;
textElement.innerText = "";

let charIndex = 0;

function typeText() {
    textElement.innerText += text[charIndex];
    charIndex++;

    if (charIndex < text.length) {
        setTimeout(typeText, 100); // Adjust the delay to control the typing speed
    }
}

typeText();




// quiz code

const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Rome", "Paris"],
        answer: "Paris"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
        score++;                 
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect. The correct answer is: " + question.answer;
    }
    nextButton.style.display = "block";
    optionsContainer.removeEventListener("click", checkAnswer);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion <= questions.length) {
        showQuestion();
        resultElement.textContent = "";
        nextButton.style.display = "none";
        optionsContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("option")) {
                checkAnswer(event.target.textContent);
            }
        });
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz completed!";
    optionsContainer.innerHTML = "";
    resultElement.textContent = "Your Score: " + score + " out of " + 6;
    nextButton.style.display = "none";
}

showQuestion();

nextButton.addEventListener("click", nextQuestion);


// navbar button

let button = document.querySelector("span");
let navbar = document.querySelector("nav");

button.addEventListener("click", function() {
    navbar.classList.toggle("open");
})