const questions = [
    {
        text: "Ви знайшли на вулиці валізу з 1 мільйоном доларів. Ваші дії?",
        options: [
            { text: "Яка валіза? Нічого не бачив", score: 100 },
            { text: "Інвестую в «будівництво доріг»", score: 50 },
            { text: "Віднесу половину, раптом хтось теж хоче жити добре", score: 25 },
            { text: "Віднесу в поліцію, як чесний громадянин", score: 0 }
        ]
    },
    {
        text: "Ваш родич просить влаштувати його на роботу в міністерство, але він не вміє навіть вмикати комп'ютер.",
        options: [
            { text: "Зроблю заступником міністра з діджиталізації", score: 100 },
            { text: "Скажу, що комп'ютер зараз не головне, головне — хороша людина", score: 50 },
            { text: "Влаштую прибиральником", score: 25 },
            { text: "Пораджу йому піти на курси", score: 0 }
        ]
    },
    {
        text: "Вам принесли коробку цукерок, але вона підозріло важка.",
        options: [
            { text: "Перевірю, чи купюри не мічені", score: 100 },
            { text: "Відкрию, раптом там шоколадні злитки", score: 50 },
            { text: "Передам начальнику як подарунок від себе", score: 25 },
            { text: "Відмовлюсь, я на дієті", score: 0 }
        ]
    },
    {
        text: "Як ви ставитесь до тендерів?",
        options: [
            { text: "Це спосіб знайти виконавця, який поділиться", score: 100 },
            { text: "Це коли перемагає кум, але законно", score: 50 },
            { text: "Це щось нудне з паперами", score: 25 },
            { text: "Це прозорий спосіб знайти найкращого виконавця", score: 0 }
        ]
    },
    {
        text: "Поліцейський зупиняє вас за перевищення швидкості.",
        options: [
            { text: "Запропоную «вирішити на місці»", score: 100 },
            { text: "Почну дзвонити знайомому прокурору", score: 50 },
            { text: "Розплачуся і попрошу відпустити", score: 25 },
            { text: "Заплачу штраф офіційно", score: 0 }
        ]
    },
    {
        text: "Що таке «відкат»?",
        options: [
            { text: "Святе правило ведення бізнесу", score: 100 },
            { text: "Невелика комісія за турботу", score: 50 },
            { text: "Те, що буває після невдалого оновлення Windows", score: 25 },
            { text: "Рух автомобіля назад", score: 0 }
        ]
    },
    {
        text: "Вам потрібно отримати довідку, але черга на місяць вперед.",
        options: [
            { text: "Знайду «людину», яка зробить за день", score: 100 },
            { text: "Принесу шоколадку", score: 50 },
            { text: "Піду жалітися в соцмережі", score: 25 },
            { text: "Буду чекати, закон є закон", score: 0 }
        ]
    },
    {
        text: "Ваш улюблений вид спорту?",
        options: [
            { text: "Перетягування бюджету", score: 100 },
            { text: "Біг від відповідальності", score: 50 },
            { text: "Спортивна ходьба по кабінетах", score: 25 },
            { text: "Футбол", score: 0 }
        ]
    },
    {
        text: "Що для вас означає слово «Схема»?",
        options: [
            { text: "Мистецтво заробляти гроші з повітря", score: 100 },
            { text: "Спосіб оптимізації податків", score: 50 },
            { text: "План евакуації при пожежі", score: 25 },
            { text: "Креслення пристрою", score: 0 }
        ]
    },
    {
        text: "Ви стали мером міста. Ваш перший указ?",
        options: [
            { text: "Заміна всієї бруківки на нову від фірми тещі", score: 100 },
            { text: "Підняття зарплати собі", score: 50 },
            { text: "Скорочення апарату чиновників", score: 25 },
            { text: "Ремонт лікарень та шкіл", score: 0 }
        ]
    },
    {
        text: "Чи можна купити щастя?",
        options: [
            { text: "Так, якщо правильно занести", score: 100 },
            { text: "Ні, але можна купити посаду, яка приносить щастя", score: 50 },
            { text: "Дивлячись який курс долара", score: 25 },
            { text: "Ні, щастя в простих речах", score: 0 }
        ]
    },
    {
        text: "Ваш життєвий девіз?",
        options: [
            { text: "Не підмажеш — не поїдеш", score: 100 },
            { text: "Беріть від життя все, поки не взяли вас", score: 50 },
            { text: "Моя хата скраю", score: 25 },
            { text: "Чесність понад усе!", score: 0 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const progressBarEl = document.getElementById('progress-bar');

const resultPercentageEl = document.getElementById('result-percentage');
const circleProgressEl = document.getElementById('circle-progress');
const levelTitleEl = document.getElementById('corruption-level-title');
const resultDescEl = document.getElementById('corruption-desc');
const potentialLootEl = document.getElementById('potential-loot');

// Randomize array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    totalScore = 0;
    startQuiz();
});

function startQuiz() {
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    questionScreen.classList.add('active');
    
    // Optional: shuffle questions if you want them in random order
    // shuffle(questions);
    
    showQuestion();
}

function showQuestion() {
    // Reset state
    optionsContainerEl.innerHTML = '';
    
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBarEl.style.width = `${progress}%`;
    questionNumberEl.textContent = `Питання ${currentQuestionIndex + 1}/${questions.length}`;
    
    questionTextEl.textContent = currentQuestion.text;
    
    // Shuffle options for this question
    const shuffledOptions = shuffle([...currentQuestion.options]);
    
    shuffledOptions.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(option.score));
        optionsContainerEl.appendChild(button);
    });
}

function selectOption(score) {
    totalScore += score;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        // Animate out/in
        optionsContainerEl.style.opacity = '0';
        setTimeout(() => {
            showQuestion();
            optionsContainerEl.style.opacity = '1';
        }, 200);
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
    progressBarEl.style.width = '100%';
    
    // Calculate final percentage (max possible is 1200)
    const maxScore = questions.length * 100;
    const finalPercentage = Math.round((totalScore / maxScore) * 100);
    
    // Animate percentage
    animateValue(resultPercentageEl, 0, finalPercentage, 1500);
    
    // Animate circle
    setTimeout(() => {
        const circleStroke = `${finalPercentage}, 100`;
        circleProgressEl.setAttribute('stroke-dasharray', circleStroke);
        
        // Color based on percentage
        if (finalPercentage < 20) {
            circleProgressEl.style.stroke = '#10b981'; // Green
        } else if (finalPercentage < 60) {
            circleProgressEl.style.stroke = '#f59e0b'; // Yellow
        } else {
            circleProgressEl.style.stroke = '#ef4444'; // Red
        }
    }, 100);
    
    // Set text based on score
    setResultText(finalPercentage);
    
    // Calculate loot (Max 1,000,000,000 грн)
    const maxLoot = 1000000000;
    let earnedLoot = (maxLoot * (finalPercentage / 100));
    
    // Add random noise to loot
    if (earnedLoot > 0) {
        earnedLoot += Math.random() * 500000;
    }
    
    const formattedLoot = new Intl.NumberFormat('uk-UA', { 
        style: 'currency', 
        currency: 'UAH',
        maximumFractionDigits: 0
    }).format(earnedLoot);
    
    potentialLootEl.textContent = finalPercentage === 0 ? "0 грн (але чиста совість)" : formattedLoot;
}

function setResultText(percentage) {
    let title = "";
    let desc = "";
    
    if (percentage === 0) {
        title = "Свята людина 😇";
        desc = "Ви настільки чесні, що вам навіть хабарі не пропонують. Ваше місце в музеї антикорупції! Але як ви виживаєте на одну зарплату?";
    } else if (percentage <= 30) {
        title = "Дрібний Несун 🍬";
        desc = "Ваша межа — це коробка цукерок і шоколадка для лікаря. Ви знаєте, що це неправильно, але 'так заведено'.";
    } else if (percentage <= 60) {
        title = "Досвідчений Рішала 🤝";
        desc = "Ви знаєте, кому зателефонувати і скільки занести. Ви ще не олігарх, але вже маєте 'своїх' людей у потрібних місцях.";
    } else if (percentage <= 85) {
        title = "Тіньовий Кардинал 🕵️‍♂️";
        desc = "Схеми, тендери, відкати — ваша стихія. Ви можете пояснити походження будь-якого мільйона, навіть якщо він з'явився з повітря.";
    } else {
        title = "Хрещений Батько Корупції 👑";
        desc = "Ваша фотографія стоїть у кабінетах усіх слідчих, але доказів немає. Ви не крадете гроші — ви їх 'освоюєте'. Вчіть нас, майстре!";
    }
    
    levelTitleEl.textContent = title;
    resultDescEl.textContent = desc;
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
