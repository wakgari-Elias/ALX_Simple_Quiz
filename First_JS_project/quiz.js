
function checkAnswer() {
    const correctAnswer = "4"; 

    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer);
