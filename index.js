const words = ['apple', 'banana', 'grape', 'cherry', 'orange']; // Add more words
let randomWord;
let score = 0;
let time = 10; // Initial time, adjustable based on difficulty

const input = document.getElementById('text');
const timerInterval = setInterval(updateTime, 1000);

// Add a random word to the DOM
function addWordToDOM() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word').textContent = randomWord;
}

// Update the score
function updateScore() {
    score++;
    document.getElementById('score').textContent = score;
}

// Update the timer in the DOM
function updateTimeDOM() {
    document.getElementById('time').textContent = `${time}s`;
}

//timer update
function updateTime() {
    time--;
    updateTimeDOM();

    if (time === 0) {
        clearInterval(timerInterval);
        gameOver();
    }
}

// game over
function gameOver() {
    const endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = `
        <h1>Time's up!</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Restart</button>
        `  ;
    endGameContainer.style.display = 'flex';
}

// event listener for text input
input.addEventListener('input', () => {
    const typedWord = input.value.trim();
    if (typedWord === randomWord) {
        updateScore();
        addWordToDOM();
        input.value = '';
        time += 5; 
        updateTimeDOM();
    }
});

