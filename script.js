// ДАННЫЕ (ВОПРОСЫ С 5 ВАРИАНТАМИ ОТВЕТОВ)
const questionsData = [
    {
        question: "Что такое итерация в программировании?",
        options: [
            "Однократное выполнение оператора",
            "Один проход (шаг) цикла",
            "Условный оператор",
            "Объявление переменной",
            "Вызов функции"
        ],
        correct: "Один проход (шаг) цикла"
    },
    {
        question: "Какой цикл называется циклом с параметром (for)?",
        options: [
            "Цикл, который выполняется, пока условие истинно",
            "Цикл, который выполняется, пока условие ложно",
            "Цикл с известным заранее количеством повторений",
            "Цикл, который выполняется хотя бы один раз",
            "Бесконечный цикл"
        ],
        correct: "Цикл с известным заранее количеством повторений"
    },
    {
        question: "Как работает цикл с предусловием (while)?",
        options: [
            "Сначала выполняется тело, потом проверяется условие",
            "Условие проверяется до выполнения тела цикла",
            "Тело выполняется строго один раз",
            "Условие проверяется только в конце",
            "Цикл выполняется бесконечно"
        ],
        correct: "Условие проверяется до выполнения тела цикла"
    },
    {
        question: "Как работает цикл с постусловием (do-while)?",
        options: [
            "Условие проверяется перед телом",
            "Сначала выполняется тело, потом проверяется условие",
            "Тело не выполняется ни разу, если условие ложно",
            "Цикл всегда выполняется ровно N раз",
            "Это цикл с параметром"
        ],
        correct: "Сначала выполняется тело, потом проверяется условие"
    },
    {
        question: "Что такое перегрузка функций?",
        options: [
            "Возможность создавать функции с одинаковым именем, но разными параметрами",
            "Вызов функции внутри другой функции",
            "Переопределение стандартной функции",
            "Использование функции без параметров",
            "Замена имени функции во время выполнения"
        ],
        correct: "Возможность создавать функции с одинаковым именем, но разными параметрами"
    },
    {
        question: "Что такое формальные параметры функции?",
        options: [
            "Переменные, переданные в функцию при вызове",
            "Параметры, описанные в заголовке функции",
            "Параметры, переданные по ссылке",
            "Параметры, которые нельзя изменять",
            "Глобальные переменные"
        ],
        correct: "Параметры, описанные в заголовке функции"
    },
    {
        question: "Что такое фактические параметры функции?",
        options: [
            "Параметры, описанные в заголовке функции",
            "Переменные, переданные в функцию при её вызове",
            "Параметры, имеющие значение по умолчанию",
            "Параметры, объявленные внутри функции",
            "Константы"
        ],
        correct: "Переменные, переданные в функцию при её вызове"
    },
    {
        question: "Что такое параметры-переменные (передаваемые по ссылке)?",
        options: [
            "Параметры, передаваемые только по значению",
            "Параметры, изменения которых внутри функции отражаются на исходной переменной",
            "Параметры, которые нельзя изменять",
            "Параметры, передаваемые через глобальные переменные",
            "Параметры, которые автоматически создаются"
        ],
        correct: "Параметры, изменения которых внутри функции отражаются на исходной переменной"
    },
    {
        question: "Что такое параметры-значения (передаваемые по значению)?",
        options: [
            "Параметры, изменения которых внутри функции НЕ отражаются на исходной переменной",
            "Параметры, изменения которых отражаются на исходной переменной",
            "Параметры, переданные по ссылке",
            "Параметры с модификатором out",
            "Параметры с ключевым словом ref"
        ],
        correct: "Параметры, изменения которых внутри функции НЕ отражаются на исходной переменной"
    },
    {
        question: "Что такое функция в программировании?",
        options: [
            "Именованный блок кода, который можно вызывать многократно",
            "Произвольный набор операторов",
            "Переменная специального типа",
            "Оператор ветвления",
            "Цикл с параметром"
        ],
        correct: "Именованный блок кода, который можно вызывать многократно"
    }
];
// ПЕРЕМЕШИВАНИЕ ВАРИАНТОВ ДЛЯ КАЖДОГО ВОПРОСА
// Новый массив, для каждого вопроса варианты перемешаны случайным образом
const questions = questionsData.map(q => {
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    return {
        question: q.question,
        options: shuffled,
        correctIndex: shuffled.indexOf(q.correct)
    };
});
// СОСТОЯНИЕ ПРИЛОЖЕНИЯ
let currentQuestionIndex = 0; // Индекс текущего вопроса
let correctAnswers = 0; // Количество правильных ответов
let incorrectAnswers = 0; // Количество неправильных ответов
let isAnswered = false; // Флаг: отвечен ли текущий вопрос
let selectedOptionIndex = null; // Индекс выбранного варианта
const totalQuestions = questions.length; // Общее количество вопросов
// DOM ЭЛЕМЕНТЫ
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const resultArea = document.getElementById('result-area');
const cardArea = document.getElementById('card');
const finalMessage = document.getElementById('final-message');
const restartBtn = document.getElementById('restart-btn');
// ЭЛЕМЕНТЫ СТАТИСТИКИ
const statsCorrect = document.getElementById('stats-correct');
const statsIncorrect = document.getElementById('stats-incorrect');
// СОХРАНЕНИЕ ПРОГРЕССА В LOCALSTORAGE
// Сохранение текущего индекса вопроса, количество правильных и неправильных ответов
function saveProgress(){
    const progressData = {
        index: currentQuestionIndex,
        correct: correctAnswers,
        incorrect: incorrectAnswers,
        isFinished: (currentQuestionIndex >= totalQuestions)
    };
    localStorage.setItem('termTrainerProgress', JSON.stringify(progressData));
}
// ЗАГРУЗКА ПРОГРЕССА ИЗ LOCALSTORAGE
// Если есть сохранённые данные - восстанавление состояния
function loadProgress(){
    const saved = localStorage.getItem('termTrainerProgress');
    if(saved){
        try{
            const data = JSON.parse(saved);
            if(data.isFinished || data.index >= totalQuestions){
                showResult();
                return true;
            }
            currentQuestionIndex = data.index || 0;
            correctAnswers = data.correct || 0;
            incorrectAnswers = data.incorrect || 0;
            return true;
        }catch(e){
            console.warn("Не удалось загрузить сохранённый прогресс.");
        }
    }
    return false;
}
// ОЧИСТКА СОХРАНЁННОГО ПРОГРЕССА
function clearProgress(){
    localStorage.removeItem('termTrainerProgress');
}
// ОБНОВЛЕНИЕ СТАТИСТИКИ
// Обновление отображения количества правильных и неправильных ответов
// Использование склонения слов (правильный/правильных, неправильный/неправильных)
function updateStats(){
    function getCorrectWord(count){
        if(count === 1) return 'правильный';
        return 'правильных';
    }
    function getIncorrectWord(count){
        if(count === 1) return 'неправильный';
        return 'неправильных';
    }
    statsCorrect.textContent = `${correctAnswers} ${getCorrectWord(correctAnswers)}`;
    statsIncorrect.textContent = `${incorrectAnswers} ${getIncorrectWord(incorrectAnswers)}`;
}
// ОБНОВЛЕНИЕ ПРОГРЕССА
// Обновление полосы прогресса и текста с номером текущего вопроса
function updateProgress(){
    let percent;
    if(currentQuestionIndex >= totalQuestions){
        percent = 100;
    }else{
        percent = (currentQuestionIndex / totalQuestions) * 100;
    }
    progressBar.style.width = `${Math.min(percent, 100)}%`;
    if(currentQuestionIndex < totalQuestions){
        progressText.textContent = `Вопрос ${currentQuestionIndex + 1} из ${totalQuestions}`;
    }else{
        progressText.textContent = 'Завершено! 🎉';
    }
}
// ОТРИСОВКА ВАРИАНТОВ ОТВЕТОВ
// Создание DOM-элементов для каждого варианта с буквами A, B, C, D, E
function renderOptions(questionData){
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
// ОБРАБОТЧИК КЛИКА ПО ВАРИАНТУ
// Выделение выбранного варианта и активация кнопки "Далее"
function handleOptionClick(index){
    if(isAnswered) return;
    const allOptions = document.querySelectorAll('.option-item');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    selectedOptionIndex = index;
    allOptions[index].classList.add('selected');
    nextBtn.disabled = false;
}
// ПОКАЗ ВОПРОСА
// Отображение текущего вопроса, вариантов ответов и сбрасывание состояния
function showQuestion(){
    if(currentQuestionIndex >= totalQuestions){
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
// ПРОВЕРКА ОТВЕТА И ПОКАЗ РЕЗУЛЬТАТА
// Проверка выбранного варианта, подсветка правильный/неправильный,
// Обновление счётчиков и показ обратной связи
function checkAnswerAndShowResult(){
    if(selectedOptionIndex === null) return;
    const q = questions[currentQuestionIndex];
    const isCorrect = (selectedOptionIndex === q.correctIndex);
    const allOptions = document.querySelectorAll('.option-item');
    const letters = ['A', 'B', 'C', 'D', 'E'];
    allOptions.forEach(opt => opt.classList.add('disabled'));
    allOptions.forEach((opt, idx) => {
        if(idx === q.correctIndex){
            opt.classList.add('show-correct');
        }
    });
    if(!isCorrect){
        allOptions[selectedOptionIndex].classList.remove('show-correct');
        allOptions[selectedOptionIndex].classList.add('incorrect');
    }else{
        allOptions[selectedOptionIndex].classList.add('correct');
    }
    const correctLetter = letters[q.correctIndex];
    if(isCorrect){
        correctAnswers++;
        feedbackEl.textContent = `✅ Правильно! Это вариант ${correctLetter}. Отличная работа!`;
        feedbackEl.className = 'feedback correct';
    }else{
        incorrectAnswers++;
        feedbackEl.textContent = `❌ Неправильно. Правильный ответ: вариант ${correctLetter} — "${q.options[q.correctIndex]}"`;
        feedbackEl.className = 'feedback incorrect';
    }
    isAnswered = true;
    nextBtn.disabled = false;
    updateStats();
    saveProgress();
}
// ПЕРЕХОД К СЛЕДУЮЩЕМУ ВОПРОСУ
// Если вопрос отвечен - переходит к следующему.
// Если вариант выбран, но не проверен - запускает проверку.
function goToNextQuestion(){
    if(isAnswered){
        currentQuestionIndex++;
        showQuestion();
        return;
    }
    if(selectedOptionIndex !== null){
        checkAnswerAndShowResult();
        return;
    }
}
// ПОКАЗ РЕЗУЛЬТАТА
// Отображение экрана с итоговым результатом после прохождения всех вопросов
function showResult(){
    cardArea.style.display = 'none';
    resultArea.style.display = 'block';
    progressBar.style.width = '100%';
    progressText.textContent = 'Завершено! 🎉';
    const percent = Math.round((correctAnswers / totalQuestions) * 100);
    let message = '';
    if(percent === 100){
        message = '🌟 Отлично! Вы знаете все термины!';
    }else if(percent >= 80){
        message = '💪 Хороший результат! Вы почти мастер!';
    }else if(percent >= 60){
        message = '📚 Неплохо, но есть куда расти!';
    }else if(percent >= 40){
        message = '📖 Тренировка поможет вам лучше запомнить материал!';
    }else{
        message = '🔄 Попробуйте пройти тест ещё раз!';
    }
    const statsText = `Вы ответили правильно на ${correctAnswers} из ${totalQuestions} (${percent}%).`;
    finalMessage.textContent = `${message}\n${statsText}`;
    clearProgress();
}
// ПЕРЕЗАПУСК ТРЕНАЖЁРА
// Сброс всех счётчиков и начало теста заново
function restartApp(){
    clearProgress();
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    isAnswered = false;
    selectedOptionIndex = null;
    showQuestion();
}
// ОБРАБОТЧИКИ СОБЫТИЙ
nextBtn.addEventListener('click', goToNextQuestion);
restartBtn.addEventListener('click', restartApp);
// ГОРЯЧИЕ КЛАВИШИ
// Enter - переход к следующему вопросу
// Цифры 1-5 - выбор варианта ответа
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && !nextBtn.disabled){
        goToNextQuestion();
    }
    if(e.key >= '1' && e.key <= '5' && !isAnswered){
        const index = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option-item');
        if(options[index]){
            options[index].click();
        }
    }
});
// ИНИЦИАЛИЗАЦИЯ
// Загрузка сохранённого прогресса или показ первого вопроса
function init(){
    const progressLoaded = loadProgress();
    if(progressLoaded && resultArea.style.display === 'none'){
        showQuestion();
    }else{
        showQuestion();
    }
}
init();
