const allQuestions = [
    { text: "Ви знайшли на вулиці валізу з 1 мільйоном доларів. Ваші дії?", options: [ { text: "Яка валіза? Нічого не бачив", score: 100 }, { text: "Інвестую в «будівництво доріг»", score: 50 }, { text: "Віднесу половину, раптом хтось теж хоче жити добре", score: 25 }, { text: "Віднесу в поліцію", score: 0 } ] },
    { text: "Ваш родич просить влаштувати його на роботу в міністерство, але він не вміє навіть вмикати комп'ютер.", options: [ { text: "Зроблю заступником міністра з діджиталізації", score: 100 }, { text: "Скажу, що комп'ютер зараз не головне, головне — хороша людина", score: 50 }, { text: "Влаштую прибиральником", score: 25 }, { text: "Пораджу йому піти на курси", score: 0 } ] },
    { text: "Вам принесли коробку цукерок, але вона підозріло важка.", options: [ { text: "Перевірю, чи купюри не мічені", score: 100 }, { text: "Відкрию, раптом там шоколадні злитки", score: 50 }, { text: "Передам начальнику як подарунок від себе", score: 25 }, { text: "Відмовлюсь, я на дієті", score: 0 } ] },
    { text: "Як ви ставитесь до тендерів?", options: [ { text: "Це спосіб знайти виконавця, який поділиться", score: 100 }, { text: "Це коли перемагає кум, але законно", score: 50 }, { text: "Це щось нудне з паперами", score: 25 }, { text: "Це прозорий спосіб знайти найкращого виконавця", score: 0 } ] },
    { text: "Поліцейський зупиняє вас за перевищення швидкості.", options: [ { text: "Запропоную «вирішити на місці»", score: 100 }, { text: "Почну дзвонити знайомому прокурору", score: 50 }, { text: "Розплачуся і попрошу відпустити", score: 25 }, { text: "Заплачу штраф офіційно", score: 0 } ] },
    { text: "Що таке «відкат»?", options: [ { text: "Святе правило ведення бізнесу", score: 100 }, { text: "Невелика комісія за турботу", score: 50 }, { text: "Те, що буває після невдалого оновлення Windows", score: 25 }, { text: "Рух автомобіля назад", score: 0 } ] },
    { text: "Вам потрібно отримати довідку, але черга на місяць вперед.", options: [ { text: "Знайду «людину», яка зробить за день", score: 100 }, { text: "Принесу шоколадку", score: 50 }, { text: "Піду жалітися в соцмережі", score: 25 }, { text: "Буду чекати, закон є закон", score: 0 } ] },
    { text: "Ваш улюблений вид спорту?", options: [ { text: "Перетягування бюджету", score: 100 }, { text: "Біг від відповідальності", score: 50 }, { text: "Спортивна ходьба по кабінетах", score: 25 }, { text: "Футбол", score: 0 } ] },
    { text: "Що для вас означає слово «Схема»?", options: [ { text: "Мистецтво заробляти гроші з повітря", score: 100 }, { text: "Спосіб оптимізації податків", score: 50 }, { text: "План евакуації при пожежі", score: 25 }, { text: "Креслення пристрою", score: 0 } ] },
    { text: "Ви стали мером міста. Ваш перший указ?", options: [ { text: "Заміна всієї бруківки на нову від фірми тещі", score: 100 }, { text: "Підняття зарплати собі", score: 50 }, { text: "Скорочення апарату чиновників", score: 25 }, { text: "Ремонт лікарень та шкіл", score: 0 } ] },
    { text: "Чи можна купити щастя?", options: [ { text: "Так, якщо правильно занести", score: 100 }, { text: "Ні, але можна купити посаду, яка приносить щастя", score: 50 }, { text: "Дивлячись який курс долара", score: 25 }, { text: "Ні, щастя в простих речах", score: 0 } ] },
    { text: "Ваш життєвий девіз?", options: [ { text: "Не підмажеш — не поїдеш", score: 100 }, { text: "Беріть від життя все, поки не взяли вас", score: 50 }, { text: "Моя хата скраю", score: 25 }, { text: "Чесність понад усе!", score: 0 } ] },
    { text: "Вам запропонували відкат 30% з бюджету на ремонт даху. Ваші дії?", options: [ { text: "Я вимагаю 50%, інакше не домовимось", score: 100 }, { text: "Візьму 30%, але дах нехай зроблять добре", score: 50 }, { text: "Відмовлюсь, але промовчу", score: 25 }, { text: "Звернусь до НАБУ", score: 0 } ] },
    { text: "Куди ви поїдете у відпустку?", options: [ { text: "На Мальдіви, але оформлю як службове відрядження", score: 100 }, { text: "В Монако, на свої кревні", score: 50 }, { text: "В Туреччину (за гарячою путівкою)", score: 25 }, { text: "В Карпати з наметом", score: 0 } ] },
    { text: "Ваша думка щодо декларування майна?", options: [ { text: "Перепишу все на кота і маму", score: 100 }, { text: "Задекларую тільки те, що видно з космосу", score: 50 }, { text: "Складно розібратись, але спробую", score: 25 }, { text: "Декларуватиму все чесно", score: 0 } ] },
    { text: "Як ви вирішуєте проблеми на митниці?", options: [ { text: "Я сам можу вирішити чужі проблеми на митниці. За відсоток.", score: 100 }, { text: "Знаю до кого підійти і що сказати", score: 50 }, { text: "Прошу знайомого допомогти", score: 25 }, { text: "Плачу всі мита офіційно", score: 0 } ] },
    { text: "Що ви подаруєте судді на день народження?", options: [ { text: "Ключі від нового позашляховика", score: 100 }, { text: "Картину невідомого художника... за 100 000 доларів", score: 50 }, { text: "Дорогий коньяк", score: 25 }, { text: "Книгу 'Конституція України'", score: 0 } ] },
    { text: "Що таке офшор?", options: [ { text: "Моя друга батьківщина", score: 100 }, { text: "Корисна річ, треба завести парочку", score: 50 }, { text: "Щось із географії", score: 25 }, { text: "Місце, де ховають вкрадене", score: 0 } ] },
    { text: "Як ви ставитесь до кумівства?", options: [ { text: "А кому ще довіряти, якщо не куму?", score: 100 }, { text: "Тільки якщо він компетентний", score: 50 }, { text: "Всі так роблять", score: 25 }, { text: "Категорично проти", score: 0 } ] },
    { text: "Якщо вас зловлять 'на гарячому'?", options: [ { text: "Раптово захворію і поїду лікуватись за кордон", score: 100 }, { text: "Знайду хорошого адвоката і вийду під заставу", score: 50 }, { text: "Скажу, що це провокація!", score: 25 }, { text: "Визнаю провину", score: 0 } ] },
    { text: "Держава виділила кошти на озеленення міста. Ваш план?", options: [ { text: "Куплю пластикові дерева, а різницю — в кишеню", score: 100 }, { text: "Куплю найдешевші саджанці, спишу як елітні", score: 50 }, { text: "Посаджу дерева біля свого будинку", score: 25 }, { text: "Зроблю гарний парк для людей", score: 0 } ] },
    { text: "До вас прийшла перевірка з пожежної безпеки.", options: [ { text: "Запрошу їх в сауну на 'переговори'", score: 100 }, { text: "Дам хабар, щоб не чіплялися", score: 50 }, { text: "Подзвоню 'наверх', щоб їх відкликали", score: 25 }, { text: "Покажу вогнегасники і плани евакуації", score: 0 } ] },
    { text: "Ви плануєте закупити канцелярію для відомства.", options: [ { text: "Олівці по 1500 грн за штуку — ідеально", score: 100 }, { text: "Куплю в фірми дружини втридорога", score: 50 }, { text: "Візьму трохи дорожче, щоб отримати бонус від постачальника", score: 25 }, { text: "Знайду найвигіднішу ціну на ProZorro", score: 0 } ] },
    { text: "Чию машину ви використовуєте у вихідні?", options: [ { text: "Службовий Мерседес, а бензин списую на відрядження", score: 100 }, { text: "Машину, зареєстровану на 90-річну бабусю", score: 50 }, { text: "Власну, але заправляю талонами з роботи", score: 25 }, { text: "Свою особисту", score: 0 } ] },
    { text: "Що робитимете, якщо ваш заступник попадеться на хабарі?", options: [ { text: "Скажу, що звільнив його ще вчора заднім числом", score: 100 }, { text: "Спробую зам'яти справу", score: 50 }, { text: "Публічно засуджу, а в СІЗО передам передачу", score: 25 }, { text: "Буду сприяти слідству", score: 0 } ] },
    { text: "В місті випав сніг. Як будете прибирати?", options: [ { text: "Сам розтане, а гроші на прибирання вже списані", score: 100 }, { text: "Вижену дві старі машини для виду", score: 50 }, { text: "Змушу підприємців чистити вулиці за свій рахунок", score: 25 }, { text: "Виведу всю техніку на розчистку", score: 0 } ] },
    { text: "Як проходить ваш типовий робочий день?", options: [ { text: "Дві години в кабінеті, решта — в ресторанах на 'переговорах'", score: 100 }, { text: "Підписую не дивлячись те, що приносять 'свої' люди", score: 50 }, { text: "Перекладаю папірці і чекаю 18:00", score: 25 }, { text: "Працюю на благо громади з ранку до вечора", score: 0 } ] },
    { text: "Як ви ставитесь до електронного документообігу?", options: [ { text: "Це жах! Як тепер непомітно замінити сторінку в договорі?", score: 100 }, { text: "Не користуюсь, бо забув пароль", score: 50 }, { text: "Роздруковую всі е-документи і ставлю мокру печатку", score: 25 }, { text: "Це зручно і прозоро", score: 0 } ] },
    { text: "Син закінчив школу. Де буде вчитися?", options: [ { text: "В Лондоні за кошти 'благодійного фонду'", score: 100 }, { text: "Куплю йому диплом, навіщо втрачати 5 років", score: 50 }, { text: "Влаштую по блату в найкращий університет Києва", score: 25 }, { text: "Там, куди сам вступить за балами ЗНО", score: 0 } ] },
    { text: "Що ви робите, коли бачите журналіста-розслідувача?", options: [ { text: "Тікаю через чорний хід", score: 100 }, { text: "Кажу 'без коментарів' і закриваю обличчя рукою", score: 50 }, { text: "Обіцяю подати на нього в суд за наклеп", score: 25 }, { text: "Спокійно відповідаю на всі питання", score: 0 } ] },
    { text: "У вас виявили незадекларовану віллу в Іспанії.", options: [ { text: "Це вілла мого водія, він просто багато працює", score: 100 }, { text: "Я її орендую за 1 євро на рік", score: 50 }, { text: "Я забув про неї, бо вона маленька", score: 25 }, { text: "Такого не може бути, я живу в хрущовці", score: 0 } ] },
    { text: "Як ви вибираєте підрядника для будівництва моста?", options: [ { text: "Того, хто запропонує найбільший 'кешбек'", score: 100 }, { text: "Того, чиїм власником є мій однокласник", score: 50 }, { text: "Того, хто гарніше розкаже", score: 25 }, { text: "Найкращого за співвідношенням ціна/якість", score: 0 } ] },
    { text: "Вас призначили керувати митницею. Ваші перші слова?", options: [ { text: "Так, тарифи зростають, працюємо за новою схемою!", score: 100 }, { text: "Треба замінити всіх начальників змін на 'своїх' людей", score: 50 }, { text: "Хто тут за що відповідає?", score: 25 }, { text: "Зупинимо контрабанду назавжди!", score: 0 } ] },
    { text: "Ваше ставлення до благодійності?", options: [ { text: "Створю фонд на своє ім'я і буду через нього відмивати гроші", score: 100 }, { text: "Даю гроші перед виборами на гречку", score: 50 }, { text: "Допомагаю тільки тим, хто може бути корисним", score: 25 }, { text: "Допомагаю ЗСУ та хворим дітям", score: 0 } ] },
    { text: "Що ви робите з державним майном?", options: [ { text: "Приватизую за копійки через підставних осіб", score: 100 }, { text: "Здаю в оренду 'своїм' за безцінь", score: 50 }, { text: "Використовую як власне", score: 25 }, { text: "Оберігаю і примножую", score: 0 } ] }
];

let questions = []; // This will hold the random 12
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

const certPercentageEl = document.getElementById('cert-percentage');
const certPositionEl = document.getElementById('cert-position');
const certTitleEl = document.getElementById('cert-title');
const certificateContainer = document.getElementById('certificate-container');

// Randomize array
function shuffle(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    totalScore = 0;
    certificateContainer.style.display = 'none';
    startQuiz();
});

function startQuiz() {
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    questionScreen.classList.add('active');
    
    // Pick 12 random questions from the pool
    const shuffledPool = shuffle(allQuestions);
    questions = shuffledPool.slice(0, 12);
    
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
    const shuffledOptions = shuffle(currentQuestion.options);
    
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
    
    // Calculate final percentage
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
    
    // Set text and certificate based on score
    setResultData(finalPercentage);
    
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
    
    // Show certificate
    setTimeout(() => {
        certificateContainer.style.display = 'block';
    }, 1500);
}

function setResultData(percentage) {
    let title = "";
    let desc = "";
    let position = "";
    
    if (percentage === 0) {
        title = "Свята людина 😇";
        desc = "Ви настільки чесні, що вам навіть хабарі не пропонують. Ваше місце в музеї антикорупції! Але як ви виживаєте на одну зарплату?";
        position = "Волонтер або активіст громадської організації";
    } else if (percentage <= 15) {
        title = "Дрібний Несун 🍬";
        desc = "Ваша межа — це коробка цукерок і шоколадка для лікаря. Ви знаєте, що це неправильно, але 'так заведено'.";
        position = "Спеціаліст молодшої ланки";
    } else if (percentage <= 30) {
        title = "Співчуваючий 'Системі' 🤷‍♂️";
        desc = "Ви ще не берете по-крупному, але вже з розумінням ставитесь до тих, хто бере. 'Всі ми люди', так?";
        position = "Начальник невеликого відділу";
    } else if (percentage <= 45) {
        title = "Перспективний Кадр 📈";
        desc = "Ви швидко вчитесь правилам гри. Ви вже знаєте як оформити відрядження так, щоб вистачило на ремонт у ванній.";
        position = "Заступник директора комунального підприємства";
    } else if (percentage <= 60) {
        title = "Досвідчений Рішала 🤝";
        desc = "Ви знаєте, кому зателефонувати і скільки занести. Ви ще не олігарх, але вже маєте 'своїх' людей у потрібних місцях.";
        position = "Керівник департаменту або місцевий депутат";
    } else if (percentage <= 75) {
        title = "Тіньовий Кардинал 🕵️‍♂️";
        desc = "Схеми, тендери, відкати — ваша стихія. Ви можете пояснити походження будь-якого мільйона, навіть якщо він з'явився з повітря.";
        position = "Заступник міністра / Голова ОДА";
    } else if (percentage <= 90) {
        title = "Олігарх-Початківець 💰";
        desc = "Закони пишуться для інших, а для вас існують лише 'домовленості'. Ваш капітал вже давно в надійних офшорах.";
        position = "Народний депутат, лідер фракції";
    } else {
        title = "Хрещений Батько Корупції 👑";
        desc = "Ваша фотографія стоїть у кабінетах усіх слідчих, але доказів немає. Ви не крадете гроші — ви їх 'освоюєте'. Вчіть нас, майстре!";
        position = "Людина, яка призначає міністрів";
    }
    
    levelTitleEl.textContent = title;
    resultDescEl.textContent = desc;
    
    // Update Certificate
    certTitleEl.textContent = title;
    certPercentageEl.textContent = percentage + "%";
    certPositionEl.textContent = position;
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
