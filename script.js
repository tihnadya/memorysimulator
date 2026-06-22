// --- Данные (вопросы с 5 вариантами ответов) ---
// Правильные ответы распределены по разным индексам (A, B, C, D, E)
const questions = [
    {
        question: "Что такое итерация?",
        options: [
            "Каждое повторение цикла",                          // A - ПРАВИЛЬНЫЙ (index 0)
            "Однократное выполнение оператора в цикле",
            "Переменная, которая хранит количество повторений",
            "Условный оператор, управляющий выходом из цикла",
            "Завершение работы цикла после первого выполнения"
        ],
        correctIndex: 0
    },
    {
        question: "Что такое цикл с параметром?",
        options: [
            "Цикл, который выполняется до тех пор, пока истинно условие",
            "Цикл с известным количеством повторений",          // B - ПРАВИЛЬНЫЙ (index 1)
            "Цикл, который выполняется хотя бы один раз",
            "Цикл, количество повторений которого зависит от действий пользователя",
            "Цикл, который выполняется бесконечно"
        ],
        correctIndex: 1
    },
    {
        question: "Что такое цикл с предусловием?",
        options: [
            "Сначала выполняется тело цикла, затем проверяется условие",
            "Цикл, который всегда выполняется один раз",
            "Пока выполняется условие, выполняется оператор",  // C - ПРАВИЛЬНЫЙ (index 2)
            "Цикл, условие которого проверяется после каждого выполнения",
            "Цикл с заранее известным количеством повторений"
        ],
        correctIndex: 2
    },
    {
        question: "Что такое цикл с постусловием?",
        options: [
            "Сначала проверяется условие, затем выполняется тело цикла",
            "Цикл, который не выполняется ни разу, если условие ложно",
            "Цикл с фиксированным количеством повторений",
            "Повторять операторы до тех пор, пока выполняется условие", // D - ПРАВИЛЬНЫЙ (index 3)
            "Цикл, в котором условие проверяется в начале"
        ],
        correctIndex: 3
    },
    {
        question: "Что такое функция в программировании?",
        options: [
            "Переменная, которая хранит набор значений",
            "Цикл для многократного выполнения операторов",
            "Условный оператор для проверки логических выражений",
            "Массив, который хранит последовательность данных",
            "Независимая часть программы, которую можно вызывать по имени для выполнения определённых действий" // E - ПРАВИЛЬНЫЙ (index 4)
        ],
        correctIndex: 4
    },
    {
        question: "Что такое перегрузка функций?",
        options: [
            "Разные функции с одинаковыми именами, но с различным набором и типами параметров", // A - ПРАВИЛЬНЫЙ (index 0)
            "Одна функция, которая может вызывать саму себя",
            "Функция, которая переопределяет стандартные операторы",
            "Функция, которая не возвращает никакого значения",
            "Функция, которая может принимать любое количество аргументов"
        ],
        correctIndex: 0
    },
    {
        question: "Что такое формальные параметры?",
        options: [
            "Конкретные значения, переданные в функцию при её вызове",
            "Параметры, определённые в заголовке подпрограммы, обычно при её описании", // B - ПРАВИЛЬНЫЙ (index 1)
            "Переменные, которые изменяются внутри функции",
            "Константы, которые нельзя изменять внутри функции",
            "Параметры, которые передаются по ссылке"
        ],
        correctIndex: 1
    },
    {
        question: "Что такое фактические параметры?",
        options: [
            "Параметры, описанные в заголовке функции при определении",
            "Переменные, которые объявлены внутри функции",
            "Параметры, задающие уже конкретные значения при обращении к подпрограмме", // C - ПРАВИЛЬНЫЙ (index 2)
            "Константы, значения которых задаются один раз",
            "Параметры, которые передаются по значению"
        ],
        correctIndex: 2
    },
    {
        question: "Что такое параметры-переменные?",
        options: [
            "Изменения параметров внутри функции не влияют на внешние переменные",
            "Параметры, которые нельзя изменять внутри функции",
            "Параметры, которые передаются только по значению",
            "Используются тогда, когда необходимо, чтобы изменение значений формальных параметров в теле подпрограммы приводило к изменению соответствующих фактических параметров", // D - ПРАВИЛЬНЫЙ (index 3)
            "Параметры, которые являются константами"
        ],
        correctIndex: 3
    },
    {
        question: "Что такое параметры-значения?",
        options: [
            "Изменения параметров внутри функции влияют на фактические параметры",
            "Параметры, которые передаются по ссылке",
            "Параметры, которые являются глобальными переменными",
            "Параметры, которые нельзя изменять внутри функции",
            "Внутри программы можно производить любые действия с параметрами, но все изменения никак не отражаются на значениях соответствующих фактических параметров" // E - ПРАВИЛЬНЫЙ (index 4)
        ],
        correctIndex: 4
    }
];

// --- Состояние приложения ---
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let isAnswered = false;
let selectedOptionIndex = null;
const totalQuestions = questions.length;

// --- DOM элементы ---
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const resultArea = document.getElementById('result-area');
const cardArea = document.getElementById('card');
const finalMessage = document.getElementById('final-message');
const restartBtn = document.getElementById('restart-btn');

// --- Вспомогательные функции ---
function saveProgress() {
    const progressData = {
        index: currentQuestionIndex,
        correct: correctAnswers,
        incorrect: incorrectAnswers,
        isFinished: (currentQuestionIndex >= totalQuestions)
    };
    localStorage.setItem('termTrainerProgress', JSON.stringify(progressData));
}

function loadProgress() {
    const saved = localStorage.getItem('termTrainerProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.isFinished || data.index >= totalQuestions) {
                showResult();
                return true;
            }
            currentQuestionIndex = data.index || 0;
            correctAnswers = data.correct || 0;
            incorrectAnswers = data.incorrect || 0;
            return true;
        } catch (e) {
            console.warn("Не удалось загрузить сохранённый прогресс.");
        }
    }
    return false;
}

function clearProgress() {
    localStorage.removeItem('termTrainerProgress');
}

function updateStats() {
    correctCountEl.textContent = `✅ ${correctAnswers}`;
    incorrectCountEl.textContent = `❌ ${incorrectAnswers}`;
}

function updateProgress() {
    let percent;
    if (currentQuestionIndex >= totalQuestions) {
        percent = 100;
    } else {
        percent = (currentQuestionIndex / totalQuestions) * 100;
    }
    progressBar.style.width = `${Math.min(percent, 100)}%`;
    
    if (currentQuestionIndex < totalQuestions) {
        progressText.textContent = `Вопрос ${currentQuestionIndex + 1} из ${totalQuestions}`;
    } else {
        progressText.textContent = 'Завершено! 🎉';
    }
}

function renderOptions(questionData) {
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E'];
    
    questionData.options.forEach((optionText, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-item';
        optionDiv.dataset.index = index;

        const radioDiv = document.createElement('div');
        radioDiv.className = 'radio-circle';
        const dotDiv = document.createElement('div');
        dotDiv.className = 'inner-dot';
        radioDiv.appendChild(dotDiv);

        const textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = `${letters[index]}. ${optionText}`;

        optionDiv.appendChild(radioDiv);
        optionDiv.appendChild(textSpan);

        optionDiv.addEventListener('click', () => handleOptionClick(index));

        optionsContainer.appendChild(optionDiv);
    });
}

function handleOptionClick(index) {
    if (isAnswered) return;

    const allOptions = document.querySelectorAll('.option-item');
    allOptions.forEach(opt => opt.classList.remove('selected'));

    selectedOptionIndex = index;
    allOptions[index].classList.add('selected');

    nextBtn.disabled = false;
}

function showQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        showResult();
        return;
    }

    const q = questions[currentQuestionIndex];
    questionEl.textContent = q.question;

    renderOptions(q);
    selectedOptionIndex = null;
    isAnswered = false;
    nextBtn.disabled = true;
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';

    updateStats();
    updateProgress();
    saveProgress();

    resultArea.style.display = 'none';
    cardArea.style.display = 'block';

    document.querySelectorAll('.option-item').forEach(el => {
        el.classList.remove('correct', 'incorrect', 'show-correct', 'disabled');
    });
}

function checkAnswerAndShowResult() {
    if (selectedOptionIndex === null) return;

    const q = questions[currentQuestionIndex];
    const isCorrect = (selectedOptionIndex === q.correctIndex);

    const allOptions = document.querySelectorAll('.option-item');
    const letters = ['A', 'B', 'C', 'D', 'E'];

    allOptions.forEach(opt => opt.classList.add('disabled'));

    allOptions.forEach((opt, idx) => {
        if (idx === q.correctIndex) {
            opt.classList.add('show-correct');
        }
    });

    if (!isCorrect) {
        allOptions[selectedOptionIndex].classList.remove('show-correct');
        allOptions[selectedOptionIndex].classList.add('incorrect');
    } else {
        allOptions[selectedOptionIndex].classList.add('correct');
    }

    const correctLetter = letters[q.correctIndex];

    if (isCorrect) {
        correctAnswers++;
        feedbackEl.textContent = `✅ Правильно! Это вариант ${correctLetter}. Отличная работа!`;
        feedbackEl.className = 'feedback correct';
    } else {
        incorrectAnswers++;
        feedbackEl.textContent = `❌ Неправильно. Правильный ответ: вариант ${correctLetter} — "${q.options[q.correctIndex]}"`;
        feedbackEl.className = 'feedback incorrect';
    }

    isAnswered = true;
    nextBtn.disabled = false;
    updateStats();
    saveProgress();
}

function goToNextQuestion() {
    if (isAnswered) {
        currentQuestionIndex++;
        showQuestion();
        return;
    }
    
    if (selectedOptionIndex !== null) {
        checkAnswerAndShowResult();
        return;
    }
    
    feedbackEl.textContent = '⚠️ Пожалуйста, выберите вариант ответа.';
    feedbackEl.className = 'feedback incorrect';
}

function showResult() {
    cardArea.style.display = 'none';
    resultArea.style.display = 'block';
    
    progressBar.style.width = '100%';
    progressText.textContent = 'Завершено! 🎉';
    
    const percent = Math.round((correctAnswers / totalQuestions) * 100);
    
    let message = '';
    if (percent === 100) {
        message = '🌟 Отлично! Вы знаете все термины!';
    } else if (percent >= 80) {
        message = '💪 Хороший результат! Вы почти мастер!';
    } else if (percent >= 60) {
        message = '📚 Неплохо, но есть куда расти!';
    } else if (percent >= 40) {
        message = '📖 Тренировка поможет вам лучше запомнить материал!';
    } else {
        message = '🔄 Попробуйте пройти тест ещё раз!';
    }
    
    const statsText = `Вы ответили правильно на ${correctAnswers} из ${totalQuestions} (${percent}%).`;
    finalMessage.textContent = `${message}\n${statsText}`;
    
    clearProgress();
}

function restartApp() {
    clearProgress();
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    isAnswered = false;
    selectedOptionIndex = null;
    showQuestion();
}

// --- Обработчики событий ---
nextBtn.addEventListener('click', goToNextQuestion);
restartBtn.addEventListener('click', restartApp);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !nextBtn.disabled) {
        goToNextQuestion();
    }
    if (e.key >= '1' && e.key <= '5' && !isAnswered) {
        const index = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option-item');
        if (options[index]) {
            options[index].click();
        }
    }
});

// --- Инициализация ---
function init() {
    const progressLoaded = loadProgress();
    if (progressLoaded && resultArea.style.display === 'none') {
        showQuestion();
    } else {
        showQuestion();
    }
}

init();