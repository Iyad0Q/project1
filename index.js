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
        question: "أمثلة على نظام تشغيل",
        options: ["cmd", "microsoft", "Iphone", "IOS"],
        answer: "IOS"
    },
    {
        question: "تصنف البرمجيات إلى",
        options: ["لا توجد إجابة صحيحة", "برمجيات الهاردوير - برمجيات السوفتوير", "برمجيات خبيثة - برمجيات نافعة", "برامج تطبيقية - برامج النظام"],
        answer: "برامج تطبيقية - برامج النظام"
    },
    {
        question: "ما الذي يديره نظام الشغيل ؟",
        options: ["جميع ما سبق", "أجهزة الإدخال", "العمليات", "الملفات"],
        answer: "جميع ما سبق"
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
    }
    else {
        resultElement.textContent = "Incorrect. The correct answer is: " + question.answer;
    }
    nextButton.style.display = "block";
    optionsContainer.removeEventListener("click", checkAnswer);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        resultElement.textContent = "";
        nextButton.style.display = "none";
        optionsContainer.addEventListener("click", (event) => {
        });
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "لقد انتهيت";
    optionsContainer.innerHTML = "";
    resultElement.textContent = "نتيجتك: " + score + " من " + currentQuestion;
    nextButton.style.display = "none";
}

showQuestion();

nextButton.addEventListener("click", nextQuestion);


// navbar button

let button = document.querySelector("span");
let navbar = document.querySelector("nav");

button.addEventListener("click", function() {
    navbar.classList.toggle("open");
});

// questions

const hideButtons = document.querySelectorAll(".showAOQ");

hideButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const container = button.parentElement;

        const textElement = container.querySelector(".aoq");
        if (textElement.style.display === "none" || textElement.style.display === "") {
            textElement.style.display = "block";
            hideButtons.innerText = "إخفاء الإجابة"
        } else {
            textElement.style.display = "none";
        }
    });
});
