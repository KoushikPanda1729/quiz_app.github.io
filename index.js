const question = [
    {
        "ques": "Which is the markup language ?",
        "a": "html",
        "b": "php",
        "c": "c++",
        "d": "java",
        "correct": "a",
    },
    {
        "ques": "Which is the tranding language ?",
        "a": "html",
        "b": "php",
        "c": "c++",
        "d": "javascript",
        "correct": "d",
    },
    {
        "ques": "Which has large community  ?",
        "a": "html",
        "b": "php",
        "c": "c++",
        "d": "ruby",
        "correct": "c",
    }
];


let index = 0;
let totalLength = question.length;
let correct = 0;
let right = 0;
let worng = 0;
let uiQuestion = document.querySelector(".uiQuestion");
let Option = document.querySelectorAll(".Option")


const loadQuestion = () => {
    if (index == totalLength) {
        return endQuiz();
    }
    reset();
    const data = question[index]
    uiQuestion.textContent = `${index + 1}) ${data.ques}`;
    Option[1].previousElementSibling.textContent = data.b;
    Option[2].previousElementSibling.textContent = data.c;
    Option[3].previousElementSibling.textContent = data.d;
    Option[0].previousElementSibling.textContent = data.a;
}

let audio = new Audio("a1.mp3");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    audio.play();
    const data = question[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    } else {
        worng++;
    }
    index++;
    loadQuestion();
    return;

})



const getAnswer = () => {
    let checkedOption;
    Option.forEach(input => {
        if (input.checked) {
            checkedOption = input.value;
        }
    });
    return checkedOption;
}




const reset = () => {
    Option.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    document.querySelector(".box").innerHTML = `<h3>Thanks for playing 😊😊</h3>
    <h3>${right} / ${totalLength} is correct</h3>`
}

loadQuestion();