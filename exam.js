const answers = [
    [1,1,1,23,12,1,2,2,2,2,1234,23,1,24,2,4,2,3,1,2,13,1,14,23,14,4,4,2,123,1,2,13,13,2,1,2,1234,23,3,2],
    [1,3,12,1,1,123,13,1,2,2,1,3,1,13,24,2,123,12,124,3,2,2,2,1,124,13,3,1,123,123,1,1,1,2,1,2,13,1,2,2],
    [1,4,1,14,13,1,13,1,24,23,3,2,2,4,1,234,23,3,2,2,3,1,3,13,14,13,1,1,1,13,2,13,134,34,34,34,1,3,34,1],
    [2,123,2,2,2,1,3,2,3,3,2,1,3,24,14,2,14,2,23,1,1,1,2,3,1,3,1,1,13,2,3,3,2,1,1,3,2,1,12,23],
    [2,4,2,2,1,1,1,2,3,13,23,2,1,13,2,14,3,1,3,23,13,14,13,1,2,1,24,4,34,23,2,14,3,1,2,13,124,2,13,13],
    [2,2,2,2,1,12,1,13,13,1,1,14,1,23,1,1,1,24,2,134,23,13,12,3,2,2,3,2,12,1,3,13,2,1,23,1,1,24,1,14],
    [134,123,13,24,134,3,2,13,1,1,2,2,3,3,3,1,1,23,2,13,1,1,24,3,1,13,1,1,3,1,14,1234,234,2,123,1,1,3,1,1],
    [1,3,2,2,3,3,1,3,23,2,24,13,2,2,23,2,23,23,1,124,14,1,2,1,1,2,1,1,1,23,12,1,134,2,2,1,12,2,2,2],
    [1,1,3,2,2,2,1,1,24,1,1,2,2,2,1,2,2,2,3,123,23,2,1,23,2,2,2,1,14,2,2,2,2,1,3,1,1,123,23,2],
    [14,23,1,3,1,1,1,1,2,13,1,2,1,2,2,2,1,1,1,2,1,3,1,2,1,2,2,1,3,3,3,2,1,14,1,12,2,2,1,1],
];

// Tableau contenant les chemins vers les images des questions pour chaque série
const questionImages = [
    ["./s1/1.jpg","./s1/2.jpg","./s1/3.jpg","./s1/4.jpg","./s1/5.jpg","./s1/6.jpg","./s1/7.jpg","./s1/8.jpg","./s1/9.jpg","./s1/10.jpg","./s1/11.jpg","./s1/12.jpg","./s1/13.jpg","./s1/14.jpg","./s1/15.jpg","./s1/16.jpg","./s1/17.jpg","./s1/18.jpg","./s1/19.jpg","./s1/20.jpg","./s1/21.jpg","./s1/22.jpg","./s1/23.jpg","./s1/24.jpg","./s1/25.jpg","./s1/26.jpg","./s1/27.jpg","./s1/28.jpg","./s1/29.jpg","./s1/30.jpg","./s1/31.jpg","./s1/32.jpg","./s1/33.jpg","./s1/34.jpg","./s1/35.jpg","./s1/36.jpg","./s1/37.jpg","./s1/38.jpg","./s1/39.jpg","./s1/40.jpg"],
    ["./s2/1.jpg","./s2/2.jpg","./s2/3.jpg","./s2/4.jpg","./s2/5.jpg","./s2/6.jpg","./s2/7.jpg","./s2/8.jpg","./s2/9.jpg","./s2/10.jpg","./s2/11.jpg","./s2/12.jpg","./s2/13.jpg","./s2/14.jpg","./s2/15.jpg","./s2/16.jpg","./s2/17.jpg","./s2/18.jpg","./s2/19.jpg","./s2/20.jpg","./s2/21.jpg","./s2/22.jpg","./s2/23.jpg","./s2/24.jpg","./s2/25.jpg","./s2/26.jpg","./s2/27.jpg","./s2/28.jpg","./s2/29.jpg","./s2/30.jpg","./s2/31.jpg","./s2/32.jpg","./s2/33.jpg","./s2/34.jpg","./s2/35.jpg","./s2/36.jpg","./s2/37.jpg","./s2/38.jpg","./s2/39.jpg","./s2/40.jpg"],
    ["./s3/1.jpg","./s3/2.jpg","./s3/3.jpg","./s3/4.jpg","./s3/5.jpg","./s3/6.jpg","./s3/7.jpg","./s3/8.jpg","./s3/9.jpg","./s3/10.jpg","./s3/11.jpg","./s3/12.jpg","./s3/13.jpg","./s3/14.jpg","./s3/15.jpg","./s3/16.jpg","./s3/17.jpg","./s3/18.jpg","./s3/19.jpg","./s3/20.jpg","./s3/21.jpg","./s3/22.jpg","./s3/23.jpg","./s3/24.jpg","./s3/25.jpg","./s3/26.jpg","./s3/27.jpg","./s3/28.jpg","./s3/29.jpg","./s3/30.jpg","./s3/31.jpg","./s3/32.jpg","./s3/33.jpg","./s3/34.jpg","./s3/35.jpg","./s3/36.jpg","./s3/37.jpg","./s3/38.jpg","./s3/39.jpg","./s3/40.jpg"],
    ["./s4/1.jpg","./s4/2.jpg","./s4/3.jpg","./s4/4.jpg","./s4/5.jpg","./s4/6.jpg","./s4/7.jpg","./s4/8.jpg","./s4/9.jpg","./s4/10.jpg","./s4/11.jpg","./s4/12.jpg","./s4/13.jpg","./s4/14.jpg","./s4/15.jpg","./s4/16.jpg","./s4/17.jpg","./s4/18.jpg","./s4/19.jpg","./s4/20.jpg","./s4/21.jpg","./s4/22.jpg","./s4/23.jpg","./s4/24.jpg","./s4/25.jpg","./s4/26.jpg","./s4/27.jpg","./s4/28.jpg","./s4/29.jpg","./s4/30.jpg","./s4/31.jpg","./s4/32.jpg","./s4/33.jpg","./s4/34.jpg","./s4/35.jpg","./s4/36.jpg","./s4/37.jpg","./s4/38.jpg","./s4/39.jpg","./s4/40.jpg"],
    ["./s5/1.jpg","./s5/2.jpg","./s5/3.jpg","./s5/4.jpg","./s5/5.jpg","./s5/6.jpg","./s5/7.jpg","./s5/8.jpg","./s5/9.jpg","./s5/10.jpg","./s5/11.jpg","./s5/12.jpg","./s5/13.jpg","./s5/14.jpg","./s5/15.jpg","./s5/16.jpg","./s5/17.jpg","./s5/18.jpg","./s5/19.jpg","./s5/20.jpg","./s5/21.jpg","./s5/22.jpg","./s5/23.jpg","./s5/24.jpg","./s5/25.jpg","./s5/26.jpg","./s5/27.jpg","./s5/28.jpg","./s5/29.jpg","./s5/30.jpg","./s5/31.jpg","./s5/32.jpg","./s5/33.jpg","./s5/34.jpg","./s5/35.jpg","./s5/36.jpg","./s5/37.jpg","./s5/38.jpg","./s5/39.jpg","./s5/40.jpg"],
    ["./s6/1.jpg","./s6/2.jpg","./s6/3.jpg","./s6/4.jpg","./s6/5.jpg","./s6/6.jpg","./s6/7.jpg","./s6/8.jpg","./s6/9.jpg","./s6/10.jpg","./s6/11.jpg","./s6/12.jpg","./s6/13.jpg","./s6/14.jpg","./s6/15.jpg","./s6/16.jpg","./s6/17.jpg","./s6/18.jpg","./s6/19.jpg","./s6/20.jpg","./s6/21.jpg","./s6/22.jpg","./s6/23.jpg","./s6/24.jpg","./s6/25.jpg","./s6/26.jpg","./s6/27.jpg","./s6/28.jpg","./s6/29.jpg","./s6/30.jpg","./s6/31.jpg","./s6/32.jpg","./s6/33.jpg","./s6/34.jpg","./s6/35.jpg","./s6/36.jpg","./s6/37.jpg","./s6/38.jpg","./s6/39.jpg","./s6/40.jpg"],
    ["./s7/1.jpg","./s7/2.jpg","./s7/3.jpg","./s7/4.jpg","./s7/5.jpg","./s7/6.jpg","./s7/7.jpg","./s7/8.jpg","./s7/9.jpg","./s7/10.jpg","./s7/11.jpg","./s7/12.jpg","./s7/13.jpg","./s7/14.jpg","./s7/15.jpg","./s7/16.jpg","./s7/17.jpg","./s7/18.jpg","./s7/19.jpg","./s7/20.jpg","./s7/21.jpg","./s7/22.jpg","./s7/23.jpg","./s7/24.jpg","./s7/25.jpg","./s7/26.jpg","./s7/27.jpg","./s7/28.jpg","./s7/29.jpg","./s7/30.jpg","./s7/31.jpg","./s7/32.jpg","./s7/33.jpg","./s7/34.jpg","./s7/35.jpg","./s7/36.jpg","./s7/37.jpg","./s7/38.jpg","./s7/39.jpg","./s7/40.jpg"],
    ["./s8/1.jpg","./s8/2.jpg","./s8/3.jpg","./s8/4.jpg","./s8/5.jpg","./s8/6.jpg","./s8/7.jpg","./s8/8.jpg","./s8/9.jpg","./s8/10.jpg","./s8/11.jpg","./s8/12.jpg","./s8/13.jpg","./s8/14.jpg","./s8/15.jpg","./s8/16.jpg","./s8/17.jpg","./s8/18.jpg","./s8/19.jpg","./s8/20.jpg","./s8/21.jpg","./s8/22.jpg","./s8/23.jpg","./s8/24.jpg","./s8/25.jpg","./s8/26.jpg","./s8/27.jpg","./s8/28.jpg","./s8/29.jpg","./s8/30.jpg","./s8/31.jpg","./s8/32.jpg","./s8/33.jpg","./s8/34.jpg","./s8/35.jpg","./s8/36.jpg","./s8/37.jpg","./s8/38.jpg","./s8/39.jpg","./s8/40.jpg"],
    ["./s9/1.jpg","./s9/2.jpg","./s9/3.jpg","./s9/4.jpg","./s9/5.jpg","./s9/6.jpg","./s9/7.jpg","./s9/8.jpg","./s9/9.jpg","./s9/10.jpg","./s9/11.jpg","./s9/12.jpg","./s9/13.jpg","./s9/14.jpg","./s9/15.jpg","./s9/16.jpg","./s9/17.jpg","./s9/18.jpg","./s9/19.jpg","./s9/20.jpg","./s9/21.jpg","./s9/22.jpg","./s9/23.jpg","./s9/24.jpg","./s9/25.jpg","./s9/26.jpg","./s9/27.jpg","./s9/28.jpg","./s9/29.jpg","./s9/30.jpg","./s9/31.jpg","./s9/32.jpg","./s9/33.jpg","./s9/34.jpg","./s9/35.jpg","./s9/36.jpg","./s9/37.jpg","./s9/38.jpg","./s9/39.jpg","./s9/40.jpg"],
    ["./s10/1.jpg","./s10/2.jpg","./s10/3.jpg","./s10/4.jpg","./s10/5.jpg","./s10/6.jpg","./s10/7.jpg","./s10/8.jpg","./s10/9.jpg","./s10/10.jpg","./s10/11.jpg","./s10/12.jpg","./s10/13.jpg","./s10/14.jpg","./s10/15.jpg","./s10/16.jpg","./s10/17.jpg","./s10/18.jpg","./s10/19.jpg","./s10/20.jpg","./s10/21.jpg","./s10/22.jpg","./s10/23.jpg","./s10/24.jpg","./s10/25.jpg","./s10/26.jpg","./s10/27.jpg","./s10/28.jpg","./s10/29.jpg","./s10/30.jpg","./s10/31.jpg","./s10/32.jpg","./s10/33.jpg","./s10/34.jpg","./s10/35.jpg","./s10/36.jpg","./s10/37.jpg","./s10/38.jpg","./s10/39.jpg","./s10/40.jpg"],
];
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'auto'
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
}
const questionContainer = document.getElementById('questions');
const resultContainer = document.getElementById('result');
let etud = Array(40).fill(0);


document.getElementById("serie").addEventListener("keydown", function(event) {
    // Vérifier si la touche pressée est "Entrée"
    if (event.key === "Enter") {
        event.preventDefault(); // Empêcher l'action par défaut (facultatif)
        document.getElementById("myButton").click(); // Simuler un clic sur le bouton
    }
});



function startExam() {
    const serie = parseInt(document.getElementById('serie').value);
    if (isNaN(serie) || serie < 1 || serie > 10) {
        alert('Veuillez entrer une série valide (1-10).');
        return;
    }

    questionContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    for (let i = 0; i < 40; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <img id="qi${i + 1}" class="imgae" src="${questionImages[serie - 1][i]}" alt="Question ${i + 1}">
            <label for="q${i + 1}">${i + 1} - </label>
            <input type="number" id="q${i + 1}" min="1" max="4" readonly>
            <div class="button-container">
                <button class="answer-button" onclick="selectAnswer(${i}, 1)">1</button>
                <button class="answer-button" onclick="selectAnswer(${i}, 2)">2</button>
                <button class="answer-button" onclick="selectAnswer(${i}, 3)">3</button>
                <button class="answer-button" onclick="selectAnswer(${i}, 4)">4</button>
                <button class="clear-button" onclick="clearAnswer(${i})">Effacer</button>
                ${i > 0 ? `<button title="precedent" class="prev-button" onclick="navigateToQuestion(${i})"><</button>` : ''}
                ${i < 39 ? `<button title="suivant" class="next-button" onclick="navigateToQuestion(${i + 2})">></button>` : ''}
                <button title="Allez au dessous de la page" class="sc-button" onclick="scrollToBottom()">Allez en bas</button>
            </div>
        `;
        questionContainer.appendChild(questionDiv);
    }
}

function navigateToQuestion(questionIndex) {
    const questionElement = document.getElementById(`qi${questionIndex}`);
    if (questionElement) {
        questionElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert(`Question ${questionIndex} non trouvée`);
    }
}

function selectAnswer(questionIndex, answer) {
    const input = document.getElementById(`q${questionIndex + 1}`);
    let currentAnswer = input.value.split('').sort().join('');
    if (!currentAnswer.includes(answer.toString())) {
        currentAnswer += answer;
    }
    input.value = currentAnswer.split('').sort().join('');
}

function clearAnswer(questionIndex) {
    const input = document.getElementById(`q${questionIndex + 1}`);
    input.value = '';
}

function displayIncorrectAnswers(incorrectAnswers, corrections) {
    const container = document.getElementById('incorrectAnswersContainer');
    container.innerHTML = ''; // Clear existing buttons and corrections

    incorrectAnswers.forEach(questionNumber => {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttn-container'); // Add class for styling
        
        const button = document.createElement('button');
        button.textContent = `Question ${questionNumber}`;
        button.onclick = () => goToIncorrectAnswer(questionNumber);
        button.classList.add('incorrect-button'); // Add class for styling
        
        const correctionText = document.createElement('div');
        correctionText.innerHTML = `<strong>${corrections[questionNumber]}</strong>`;
        correctionText.classList.add('correction-text'); // Add class for styling
        
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(correctionText);
        container.appendChild(buttonContainer);
    });
}

function goToIncorrectAnswer(questionIndex) {
    const questionElement = document.getElementById(`qi${questionIndex}`);
    if (questionElement) {
        questionElement.scrollIntoView({ behavior: 'auto' });
    } else {
        alert(`Question ${questionIndex} non trouvée`);
    }
}

function submitAnswers() {
    const serie = parseInt(document.getElementById('serie').value);
    if (isNaN(serie) || serie < 1 || serie > 10) {
        alert('Veuillez entrer une série valide (1-10).');
        return;
    }

    for (let i = 0; i < 40; i++) {
        const answer = document.getElementById(`q${i + 1}`).value;
        etud[i] = answer === "" ? 0 : parseInt(answer);
    }

    const correctAnswers = answers[serie - 1];
    let score = 0;
    let incorrectAnswers = [];
    let corrections = {};
    let fullCorrections = {};

    const questionsDiv = document.getElementById('result');

    for (let i = 0; i < 40; i++) {
        fullCorrections[i + 1] = correctAnswers[i];
        if (etud[i] === correctAnswers[i]) {
            score++;
        } else {
            incorrectAnswers.push(i + 1);
            corrections[i + 1] = correctAnswers[i];
        }
    }
    if (score>=32) {
    resultContainer.innerHTML = `
        <p class="para"><strong>Bravo, vous etes admis</strong><p>
        <p class="para">VOTRE SCORE EST : ${score}/40</p>
        <p>Vos fautes sont dans les questions suivantes :</p>
        <div id="incorrectAnswersContainer"></div>
    `;
    questionsDiv.style.backgroundColor = '#4dff00';
} else {
        resultContainer.innerHTML = `
        <p class="para"><strong>Perdu, Hard luck</strong><p>
        <p class="para">VOTRE SCORE EST : ${score}/40</p>
        <p>Vos fautes sont dans les questions suivantes :</p>
        <div id="incorrectAnswersContainer"></div>
    `;
    questionsDiv.style.backgroundColor = '#ff6100';
    }
    displayIncorrectAnswers(incorrectAnswers, corrections)
}
