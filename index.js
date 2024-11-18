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

