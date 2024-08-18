document.addEventListener('DOMContentLoaded', () => {
    const wrong = document.querySelector('.wrong');
    const right = document.querySelector('.right');

    const gameSent = document.getElementById('game-sent');
    const difficultyA = document.getElementById('difficulty-a');

    const easyBtn = document.getElementById('easy-btn');
    const checkBxEasy = document.getElementById('easy-checkBx');

    const mediumBtn = document.getElementById('medium-btn');
    const checkBxMedium = document.getElementById('medium-checkBx');

    const hardBtn = document.getElementById('hard-btn');
    const checkBxHard = document.getElementById('hard-checkBx');

    const submitBtn = document.getElementById('submit-btn');
    let scoreElement = document.getElementById('score');
    let score = loadScoreFromLocal() || 0;
    updateScoreDisplay()

    function easy() {
        console.log('Shifted to EASY    (1st Gear)');
        gameSent.textContent = 'Select a number between 0 - 10';
        difficultyA.textContent = 'Easy';
        difficultyA.style.textTransform = 'uppercase';
        checkBxEasy.checked = true;
        submitBtn.addEventListener('click', ckeckEasy);

        function ckeckEasy() {
            const numInput = document.getElementById('number-input').value;
            let randInt10 = Math.floor(Math.random() * 10);
            console.log(`Your Number: ${numInput}`);
            console.log(`Random Number: ${randInt10}`);
            if (numInput == randInt10) {
                right.style.display = 'flex'
                wrong.style.display = 'none'
                console.log('Won')
                score = score + 1
                console.log('Score:', score)
                updateScoreDisplay()
                storeScoreToLocal(score)
            } else {
                console.log('Lose')
                right.style.display = 'none'
                wrong.style.display = 'flex'
                return
            }
        }
    }

    function medium() {
        console.log('Shifted to MEDIUM    (3st Gear)');
        gameSent.textContent = 'Select a number between 0 - 50'
        difficultyA.textContent = 'Medium';
        difficultyA.style.textTransform = 'uppercase';
        checkBxMedium.checked = true;
        submitBtn.addEventListener('click', ckeckMedium);

        function ckeckMedium() {
            const numInput = document.getElementById('number-input').value;
            let randInt50 = Math.floor(Math.random() * 50);
            console.log(`Your Number: ${numInput}`);
            console.log(`Random Number: ${randInt50}`);
            if (numInput == randInt50) {
                right.style.display = 'flex'
                wrong.style.display = 'none'
                console.log('Won')
                score = score + 1
                console.log('Score:', score)
                updateScoreDisplay()
                storeScoreToLocal(score)
            }
            else {
                console.log('Lose')
                right.style.display = 'none'
                wrong.style.display = 'flex'
                return
            }
        }
    }

    function hard() {
        console.log('Shifted to HARD    (5st Gear)');
        gameSent.textContent = 'Select a number between 0 - 100'
        difficultyA.textContent = 'Hard';
        difficultyA.style.textTransform = 'uppercase';
        checkBxMedium.checked = true;
        submitBtn.addEventListener('click', ckeckHard);

        function ckeckHard() {
            const numInput = document.getElementById('number-input').value;
            let randInt100 = Math.floor(Math.random() * 100);
            console.log(`Your Number: ${numInput}`);
            console.log(`Random Number: ${randInt100}`);
            if (numInput == randInt100) {
                right.style.display = 'flex'
                wrong.style.display = 'none'
                console.log('Won')
                score = score + 1
                console.log('Score:', score)
                updateScoreDisplay()
                storeScoreToLocal(score)
            }
            else {
                console.log('Lose')
                right.style.display = 'none'
                wrong.style.display = 'flex'
                return
            }
        }
    }

    easyBtn.addEventListener('click', easy);
    mediumBtn.addEventListener('click', medium);
    hardBtn.addEventListener('click', hard);

    function updateScoreDisplay() {
        if (score < 10) {
            scoreElement.textContent = `0${score}`;
        } else {
            scoreElement.textContent = score;
        }
    }

    function storeScoreToLocal(score) {
        localStorage.setItem('score', score);
    }

    function loadScoreFromLocal() {
        const storedScore = parseInt(localStorage.getItem('score'), 10);
        console.log('Loaded Score from Local:', storedScore);
        return storedScore;
    }
});
