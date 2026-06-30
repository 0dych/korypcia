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
    { text: "Що ви робите з державним майном?", options: [ { text: "Приватизую за копійки через підставних осіб", score: 100 }, { text: "Здаю в оренду 'своїм' за безцінь", score: 50 }, { text: "Використовую як власне", score: 25 }, { text: "Оберігаю і примножую", score: 0 } ] },
    { text: "Потрібно закупити парти для школи.", options: [ { text: "Куплю звичайні, але за документами вони будуть з червоного дерева", score: 100 }, { text: "Змушу батьків скинутися 'до фонду школи'", score: 50 }, { text: "Куплю найдешевші, які зламаються за місяць", score: 25 }, { text: "Проведу відкритий конкурс і закуплю якісні", score: 0 } ] },
    { text: "Забудовник хоче знести історичну будівлю і збудувати ТРЦ.", options: [ { text: "Видам дозвіл за 'частку' в цьому ТРЦ", score: 100 }, { text: "Визнаю будівлю аварійною, нехай зносить", score: 50 }, { text: "Буду ігнорувати протести активістів", score: 25 }, { text: "Захищатиму будівлю в суді", score: 0 } ] },
    { text: "Ваша теща несподівано купила пентхаус.", options: [ { text: "Так, вона все життя відкладала з пенсії", score: 100 }, { text: "Вона просто виграла в лотерею, я тут ні до чого", score: 50 }, { text: "Попрошу її не світити документами", score: 25 }, { text: "У мене немає тещі", score: 0 } ] },
    { text: "Як ви ставитесь до криптовалюти?", options: [ { text: "Це найкращий винахід для відмивання хабарів!", score: 100 }, { text: "Ховаю там свої заощадження", score: 50 }, { text: "Чув, що це модно, але не розбираюсь", score: 25 }, { text: "Задекларував кожен біткоїн", score: 0 } ] },
    { text: "Вам потрібно призначити собі премію.", options: [ { text: "300% за 'високу інтенсивність праці' — це мінімум", score: 100 }, { text: "Випишу премії всім своїм заступникам, а вони поділяться", score: 50 }, { text: "Тільки на свята, по скромному (100%)", score: 25 }, { text: "Я працюю на оклад і премій не беру", score: 0 } ] },
    { text: "Що ви робите з гуманітарною допомогою?", options: [ { text: "Продаю через мережу підконтрольних магазинів", score: 100 }, { text: "Роздаю 'своїм' виборцям під своїм брендом", score: 50 }, { text: "Беру собі кілька коробок, ніхто ж не помітить", score: 25 }, { text: "Особисто контролюю доставку тим, хто потребує", score: 0 } ] },
    { text: "Вас просять видати дозвіл на будівництво без документів.", options: [ { text: "Без проблем, якщо занесуть 'солідний пакет'", score: 100 }, { text: "Попрошу принести хоч якісь довідки, щоб прикритись", score: 50 }, { text: "Буду довго думати і натякати", score: 25 }, { text: "Відмовлю і викличу поліцію", score: 0 } ] },
    { text: "Вакантна посада директора перспективного підприємства.", options: [ { text: "Влаштую аукціон. Хто більше дасть — той і директор", score: 100 }, { text: "Призначу свого водія", score: 50 }, { text: "Поставлю людину кума", score: 25 }, { text: "Оголошу відкритий і прозорий конкурс", score: 0 } ] },
    { text: "Як ви боретеся з незаконною вирубкою лісу?", options: [ { text: "Очолюю її", score: 100 }, { text: "Звільняю інспекторів, які не діляться", score: 50 }, { text: "Пишу гнівні пости у Фейсбуці", score: 25 }, { text: "Проводжу рейди та саджаю винних", score: 0 } ] },
    { text: "ДТП за участю вашої машини (ви винні). Ваші дії?", options: [ { text: "Дзвоню начальнику поліції і роблю винним іншого", score: 100 }, { text: "Даю хабар патрульним на місці", score: 50 }, { text: "Втікаю з місця події", score: 25 }, { text: "Оформлюю за всіма правилами і плачу страховку", score: 0 } ] },
    { text: "Держава виділила кошти на облаштування укриттів.", options: [ { text: "Закуплю барабани і золоті сковорідки", score: 100 }, { text: "Пофарбую стіни, а решту спишу", score: 50 }, { text: "Поставлю старі стільці з підвалу і скажу, що нові", score: 25 }, { text: "Облаштую комфортні і безпечні укриття", score: 0 } ] },
    { text: "Ремонт дороги у вашому районі.", options: [ { text: "Зріжемо старий асфальт, покладемо тонкий шар, через місяць знову ремонт", score: 100 }, { text: "Асфальт кластимемо прямо в калюжі і сніг", score: 50 }, { text: "Зробимо ямковий ремонт за ціною капітального", score: 25 }, { text: "Контролюватиму якість кожного сантиметра", score: 0 } ] },
    { text: "Хтось перевіряє ваш диплом про вищу освіту.", options: [ { text: "Знищу архів університету через 'випадкову пожежу'", score: 100 }, { text: "Заплачу ректору, щоб підтвердив", score: 50 }, { text: "Скажу, що це підступи конкурентів", score: 25 }, { text: "Мені нічого приховувати, ось мій оригінал", score: 0 } ] },
    { text: "Розподіл нових квартир для пільговиків.", options: [ { text: "Дві квартири собі, одну секретарці, решту — продати", score: 100 }, { text: "Віддам родичам, які різко стали 'пільговиками'", score: 50 }, { text: "Буду тягнути час, поки мені не запропонують 'винагороду'", score: 25 }, { text: "Видам ключі першим у черзі пільговикам", score: 0 } ] },
    { text: "Організація тендеру на закупівлю.", options: [ { text: "Умови пропишу так, щоб пройшла тільки фірма моєї дружини", score: 100 }, { text: "Відхилю всіх, крім того, з ким домовився", score: 50 }, { text: "Зроблю термін подачі 1 годину вночі", score: 25 }, { text: "Рівні умови для всіх учасників ринку", score: 0 } ] },
    { text: "Місту потрібна новорічна ялинка.", options: [ { text: "Орендуємо за 10 мільйонів гривень шматок пластику", score: 100 }, { text: "Купимо справжню за ціною космічного корабля", score: 50 }, { text: "Повісимо старі гірлянди і спишемо як за нові", score: 25 }, { text: "Прикрасимо ту, що росте на площі (безкоштовно)", score: 0 } ] },
    { text: "Ваш рейтинг серед населення падає.", options: [ { text: "Найму армію ботів за державний кошт", score: 100 }, { text: "Замовлю за бюджетні гроші статтю в газеті про свої успіхи", score: 50 }, { text: "Переріжу стрічку на відкритті чужого об'єкту", score: 25 }, { text: "Буду працювати краще і спілкуватися з людьми", score: 0 } ] },
    { text: "Створення комісії для розслідування крадіжок.", options: [ { text: "Очолю цю комісію, щоб вийти на самого себе", score: 100 }, { text: "Включу туди лише своїх людей", score: 50 }, { text: "Будемо розслідувати 10 років без результату", score: 25 }, { text: "Запрошу незалежних експертів та активістів", score: 0 } ] },
    { text: "Що таке 'застава в суді'?", options: [ { text: "Плата за мій квиток на рейс до Відня", score: 100 }, { text: "Те, що мої друзі зберуть за 5 хвилин", score: 50 }, { text: "Дрібні витрати", score: 25 }, { text: "Законний захід припинення", score: 0 } ] },
    { text: "Ви підписуєте акт виконаних робіт.", options: [ { text: "Підпишу 'наосліп', головне, що моя частка вже на рахунку", score: 100 }, { text: "Якщо щось не доробили — дороблять потім, вірю на слово", score: 50 }, { text: "Буду прискіпуватись, поки не дадуть 'бонус'", score: 25 }, { text: "Особисто перевірю якість виконання", score: 0 } ] },
    { text: "У вас виявили годинник за 500 тисяч доларів.", options: [ { text: "Це підробка з Аліекспресу, купляв за 10 баксів", score: 100 }, { text: "Подарував Святий Миколай", score: 50 }, { text: "Спадщина від дідуся", score: 25 }, { text: "Я заробив його чесною працею в бізнесі до посади", score: 0 } ] },
    { text: "Як ви ставитесь до антикорупційних активістів?", options: [ { text: "Насилаю на них податкову і СБУ", score: 100 }, { text: "Створюю фейкових активістів, щоб дискредитувати справжніх", score: 50 }, { text: "Ігнорую їхні розслідування", score: 25 }, { text: "Співпрацюю і реагую на критику", score: 0 } ] },
    { text: "Вас призначили міністром. Ваші дії в перший тиждень?", options: [ { text: "Перероблю всі 'потоки' під себе", score: 100 }, { text: "Зроблю ремонт в кабінеті за 2 мільйони", score: 50 }, { text: "Замовлю нову корпоративну атрибутику", score: 25 }, { text: "Аудит відомства та звільнення неефективних кадрів", score: 0 } ] },
    { text: "Що таке 'конфлікт інтересів'?", options: [ { text: "Це коли я забув поділитися з прокурором", score: 100 }, { text: "Те, що придумали, щоб заважати чесним людям працювати", score: 50 }, { text: "Термін з психології?", score: 25 }, { text: "Ситуація, про яку я зобов'язаний повідомити НАЗК", score: 0 } ] },
    { text: "Медична комісія і довідки (МСЕК).", options: [ { text: "У мене всі здорові стають інвалідами 1 групи за прайсом", score: 100 }, { text: "Можу 'допомогти' знайомим за символічну подяку", score: 50 }, { text: "Беру пакетами, щоб ніхто не бачив", score: 25 }, { text: "Видаю довідки виключно після ретельного медогляду", score: 0 } ] }
];

const questionIcons = [
    'fa-sack-dollar', 'fa-gavel', 'fa-building-columns', 'fa-handshake',
    'fa-car', 'fa-file-invoice-dollar', 'fa-scale-balanced', 'fa-money-bill-wave',
    'fa-passport', 'fa-briefcase', 'fa-gem', 'fa-landmark', 'fa-user-tie', 'fa-mask',
    'fa-piggy-bank', 'fa-file-signature', 'fa-sack-xmark', 'fa-vault'
];
const animations = ['bounce', 'anim-shake', 'anim-spin-slow', 'anim-pulse'];

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
const downloadBtn = document.getElementById('download-btn');

// Game UI Elements
const playGameBtn = document.getElementById('play-game-btn');
const gameScreen = document.getElementById('game-screen');
const gameCanvas = document.getElementById('gameCanvas');
const gameScoreVal = document.getElementById('game-score-val');
const gameRecordVal = document.getElementById('game-record-val');
const gameLivesEl = document.getElementById('game-lives');
const gameOverOverlay = document.getElementById('game-over-overlay');
const finalGameScore = document.getElementById('final-game-score');
const restartGameBtn = document.getElementById('restart-game-btn');
const exitGameBtn = document.getElementById('exit-game-btn');

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
    downloadBtn.style.display = 'none';
    startQuiz();
});

downloadBtn.addEventListener('click', () => {
    // Generate certificate natively on a canvas to avoid file:/// CORS issues
    const certCanvas = document.createElement('canvas');
    certCanvas.width = 800;
    certCanvas.height = 600;
    const ctx = certCanvas.getContext('2d');
    
    // Background
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#fdfbfb');
    gradient.addColorStop(1, '#ebedee');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);
    
    // Border
    ctx.strokeStyle = '#b8860b';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, 760, 560);
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, 730, 530);
    
    // Header
    ctx.textAlign = 'center';
    ctx.fillStyle = '#b8860b';
    ctx.font = 'bold 36px "Times New Roman", serif';
    ctx.fillText('ОФІЦІЙНИЙ СЕРТИФІКАТ', 400, 90);
    
    // Subtitle
    ctx.fillStyle = '#4b5563';
    ctx.font = 'italic 20px "Times New Roman", serif';
    ctx.fillText('Цим підтверджується, що пред\'явник має кваліфікацію:', 400, 140);
    
    // Title
    ctx.fillStyle = '#7f1d1d';
    ctx.font = 'bold 48px "Times New Roman", serif';
    ctx.fillText(document.getElementById('cert-title').textContent, 400, 210);
    
    // Body
    ctx.fillStyle = '#1f2937';
    ctx.font = '24px "Times New Roman", serif';
    ctx.fillText('Рівень корупційності: ' + document.getElementById('cert-percentage').textContent, 400, 280);
    
    ctx.font = '20px "Times New Roman", serif';
    ctx.fillText('РЕКОМЕНДОВАНА ПОСАДА:', 400, 330);
    
    ctx.fillStyle = '#b8860b';
    ctx.font = 'bold 32px "Times New Roman", serif';
    ctx.fillText(document.getElementById('cert-position').textContent, 400, 380);
    
    // Signature
    ctx.textAlign = 'left';
    ctx.fillStyle = '#4b5563';
    ctx.font = 'italic 20px "Times New Roman", serif';
    ctx.fillText('Затверджено:', 100, 480);
    
    ctx.fillStyle = '#1e3a8a';
    ctx.font = '40px "Brush Script MT", cursive';
    ctx.fillText('Система', 120, 520);
    
    ctx.strokeStyle = '#1f2937';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 530);
    ctx.lineTo(280, 530);
    ctx.stroke();
    
    // Seal
    ctx.beginPath();
    ctx.arc(650, 480, 60, 0, 2 * Math.PI);
    const sealGrad = ctx.createRadialGradient(650, 480, 10, 650, 480, 60);
    sealGrad.addColorStop(0, '#dc2626');
    sealGrad.addColorStop(1, '#991b1b');
    ctx.fillStyle = sealGrad;
    ctx.fill();
    ctx.strokeStyle = '#fca5a5';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(650, 480, 52, 0, 2 * Math.PI);
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fef2f2';
    ctx.font = 'bold 16px "Times New Roman", serif';
    ctx.fillText('СХВАЛЕНО', 650, 460);
    ctx.fillText('★', 650, 485);
    ctx.fillText('ОСВОЄНО', 650, 510);
    
    // Download
    const dataUrl = certCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'cert_of_corruption.png';
    link.href = dataUrl;
    link.click();
});

// --- ARCADE GAME LOGIC ---

let gameContext = gameCanvas.getContext('2d');
let gameLoopId;
let gameIsActive = false;

// Game State
let gameScore = 0;
let gameLives = 3;
let highScore = localStorage.getItem('corruptionHighScore') || 0;
gameRecordVal.textContent = highScore;

// Audio Context setup
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playSound(type) {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'coin') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'hit') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

const player = { x: 170, y: 430, width: 60, height: 50 };
let playerFace = '💼';
let faceResetTimer = null;

let fallingItems = [];
let floatingTexts = []; // For funny popups

// Constants for items
const ITEM_TYPES = [
    { type: 'money', icon: '💵', points: 10, prob: 0.6, phrases: ["В офшор!", "На каву", "+10"] },
    { type: 'gold', icon: '🥖', points: 50, prob: 0.1, phrases: ["Золотий батон!", "Для кума", "+50"] },
    { type: 'diamond', icon: '💎', points: 100, prob: 0.05, phrases: ["Тещі на дачу!", "Елітний хабар", "Джекпот!"] },
    { type: 'cuffs', icon: '🔗', points: -1, prob: 0.15, phrases: ["Арешт!", "САП!", "СІЗО!"] },
    { type: 'folder', icon: '📂', points: -1, prob: 0.1, phrases: ["НАБУ!", "Підозра!", "Обшук!"] }
];

function spawnItem() {
    if (!gameIsActive) return;
    const rand = Math.random();
    let cumulative = 0;
    let selectedType = ITEM_TYPES[0];
    
    for (const item of ITEM_TYPES) {
        cumulative += item.prob;
        if (rand <= cumulative) {
            selectedType = item;
            break;
        }
    }
    
    fallingItems.push({
        x: Math.random() * (gameCanvas.width - 30),
        y: -30,
        width: 30,
        height: 30,
        speed: 2 + Math.random() * 3 + (gameScore / 400), // Gets faster quicker
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        ...selectedType
    });
    
    setTimeout(spawnItem, Math.max(150, 800 - (gameScore * 0.6))); 
}

function drawPlayer() {
    gameContext.font = '50px Arial';
    gameContext.textAlign = 'center';
    gameContext.textBaseline = 'middle';
    gameContext.fillText(playerFace, player.x + player.width/2, player.y + player.height/2);
}

function drawItems() {
    gameContext.textAlign = 'center';
    gameContext.textBaseline = 'middle';
    
    fallingItems.forEach(item => {
        gameContext.save();
        gameContext.translate(item.x + item.width/2, item.y + item.height/2);
        
        item.rotation += item.rotSpeed;
        gameContext.rotate(item.rotation * Math.PI / 180);
        
        gameContext.font = item.points >= 50 ? '38px Arial' : '30px Arial';
        gameContext.fillText(item.icon, 0, 0);
        
        gameContext.restore();
    });
}

function updateGame() {
    if (!gameIsActive) return;
    
    // Background gradient
    let bgGrad = gameContext.createLinearGradient(0, 0, 0, gameCanvas.height);
    bgGrad.addColorStop(0, '#0f172a');
    bgGrad.addColorStop(1, '#1e293b');
    gameContext.fillStyle = bgGrad;
    gameContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    // Secret watermark
    gameContext.globalAlpha = 0.05;
    gameContext.font = 'bold 50px Arial';
    gameContext.textAlign = 'center';
    gameContext.fillStyle = '#ffffff';
    gameContext.fillText('ЦІЛКОМ ТАЄМНО', gameCanvas.width/2, gameCanvas.height/2);
    gameContext.globalAlpha = 1.0;
    
    // Update items
    for (let i = fallingItems.length - 1; i >= 0; i--) {
        let item = fallingItems[i];
        item.y += item.speed;
        
        // Collision check
        if (item.y + item.height > player.y && item.y < player.y + player.height && 
            item.x + item.width > player.x && item.x < player.x + player.width) {
                
            let phrase = item.phrases[Math.floor(Math.random() * item.phrases.length)];
            
            if (item.points > 0) {
                gameScore += item.points;
                playSound('coin');
                playerFace = '🤑';
                floatingTexts.push({ x: player.x + player.width/2, y: player.y, text: phrase, alpha: 1, color: '#10b981' });
            } else {
                gameLives--;
                updateLivesDisplay();
                playSound('hit');
                playerFace = '😱';
                floatingTexts.push({ x: player.x + player.width/2, y: player.y, text: phrase, alpha: 1, color: '#ef4444' });
                
                if (gameLives <= 0) {
                    playerFace = '🚓';
                    endGame();
                    return;
                }
            }
            
            if (faceResetTimer) clearTimeout(faceResetTimer);
            faceResetTimer = setTimeout(() => { if(gameIsActive) playerFace = '💼'; }, 400);
            
            fallingItems.splice(i, 1);
            continue;
        }
        
        // Off screen
        if (item.y > gameCanvas.height) {
            fallingItems.splice(i, 1);
        }
    }
    
    gameScoreVal.textContent = gameScore;
    
    drawPlayer();
    drawItems();
    
    // Draw Floating Texts
    for (let i = floatingTexts.length - 1; i >= 0; i--) {
        let ft = floatingTexts[i];
        ft.y -= 1.5;
        ft.alpha -= 0.02;
        
        gameContext.globalAlpha = ft.alpha;
        gameContext.font = 'bold 22px "Montserrat", sans-serif';
        gameContext.fillStyle = ft.color;
        gameContext.textAlign = 'center';
        
        // Removed text shadow for performance
        gameContext.fillText(ft.text, ft.x, ft.y);
        
        if (ft.alpha <= 0) {
            floatingTexts.splice(i, 1);
        }
    }
    gameContext.globalAlpha = 1.0;
    
    gameLoopId = requestAnimationFrame(updateGame);
}

function updateLivesDisplay() {
    gameLivesEl.innerHTML = '';
    for(let i=0; i<gameLives; i++) {
        gameLivesEl.innerHTML += '<i class="fa-solid fa-heart"></i>';
    }
    for(let i=gameLives; i<3; i++) {
        gameLivesEl.innerHTML += '<i class="fa-regular fa-heart" style="opacity: 0.3"></i>';
    }
}

function startGame() {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    gameOverOverlay.style.display = 'none';
    
    gameScore = 0;
    gameLives = 3;
    fallingItems = [];
    floatingTexts = [];
    playerFace = '💼';
    player.x = gameCanvas.width/2 - player.width/2;
    
    updateLivesDisplay();
    gameScoreVal.textContent = '0';
    
    gameIsActive = true;
    updateGame();
    setTimeout(spawnItem, 500);
}

function endGame() {
    gameIsActive = false;
    cancelAnimationFrame(gameLoopId);
    
    if (gameScore > highScore) {
        highScore = gameScore;
        localStorage.setItem('corruptionHighScore', highScore);
        gameRecordVal.textContent = highScore;
    }
    
    finalGameScore.textContent = gameScore;
    gameOverOverlay.style.display = 'flex';
}

// Controls
function handleMove(clientX) {
    const rect = gameCanvas.getBoundingClientRect();
    const scaleX = gameCanvas.width / rect.width;
    let x = (clientX - rect.left) * scaleX;
    
    player.x = x - player.width/2;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > gameCanvas.width) player.x = gameCanvas.width - player.width;
}

gameCanvas.addEventListener('mousemove', (e) => {
    if (gameIsActive) handleMove(e.clientX);
});

gameCanvas.addEventListener('touchmove', (e) => {
    if (gameIsActive) {
        e.preventDefault();
        handleMove(e.touches[0].clientX);
    }
}, {passive: false});

// Event Listeners for Game Buttons
playGameBtn.addEventListener('click', startGame);
restartGameBtn.addEventListener('click', startGame);
exitGameBtn.addEventListener('click', () => {
    gameIsActive = false;
    cancelAnimationFrame(gameLoopId);
    gameScreen.classList.remove('active');
    startScreen.classList.add('active');
});

function startQuiz() {
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    questionScreen.classList.add('active');
    
    // Pick 12 random questions from the pool of 60
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
    
    // Random Icon and Animation
    const randomIcon = questionIcons[Math.floor(Math.random() * questionIcons.length)];
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    const iconEl = document.getElementById('question-icon');
    iconEl.innerHTML = `<i class="fa-solid ${randomIcon} ${randomAnim}"></i>`;
    
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
    
    // Show certificate and download button
    setTimeout(() => {
        certificateContainer.style.display = 'block';
        downloadBtn.style.display = 'inline-block';
    }, 1500);
}

function setResultData(percentage) {
    let title = "";
    let desc = "";
    let position = "";
    
    if (percentage <= 2) {
        title = "Свята людина 😇"; desc = "Вам навіть хабарі не пропонують. Ваше місце в музеї!"; position = "Волонтер ГО";
    } else if (percentage <= 5) {
        title = "Наївний романтик 🕊️"; desc = "Пишете скарги в ЖЕК і вірите в їхню силу."; position = "Громадський активіст";
    } else if (percentage <= 7) {
        title = "Паперовий черв'як 📚"; desc = "Боїтеся брати, але мовчки дивитесь на інших."; position = "Стажер у ЦНАПі";
    } else if (percentage <= 10) {
        title = "Свідок корупції 👀"; desc = "Вам не пропонують, але ви чули, що хтось десь брав."; position = "Помічник вихователя";
    } else if (percentage <= 12) {
        title = "Дрібний Несун 🍬"; desc = "Ваша межа — це коробка цукерок на свято."; position = "Молодший архіваріус";
    } else if (percentage <= 15) {
        title = "Початківець 🗂️"; desc = "Ви ще не крадете, але каву за чужий рахунок п'єте."; position = "Рядовий інспектор з благоустрою";
    } else if (percentage <= 17) {
        title = "Шукач справедливості ⚖️"; desc = "Берете лише тоді, коли 'насильно пхають'."; position = "Бібліотекар районної бібліотеки";
    } else if (percentage <= 20) {
        title = "Майстер шоколадок 🍫"; desc = "Пляшка коньяку вирішує ваші дрібні питання."; position = "Секретар сільради";
    } else if (percentage <= 22) {
        title = "Студент-корупціонер 🎓"; desc = "Списали на екзамені, і тепер совість не мучить."; position = "Диспетчер автобусного парку";
    } else if (percentage <= 25) {
        title = "Бюрократ-початківець 🗄️"; desc = "Навчилися затягувати видачу довідок заради 'подяки'."; position = "Головний спеціаліст відділу субсидій";
    } else if (percentage <= 27) {
        title = "Любитель конвертів ✉️"; desc = "Ви знаєте, якого розміру має бути правильний конверт."; position = "Помічник депутата місцевої ради";
    } else if (percentage <= 30) {
        title = "Співчуваючий 'Системі' 🤷‍♂️"; desc = "Бензин з робочої машини зливаєте регулярно."; position = "Завідувач складом держрезерву";
    } else if (percentage <= 32) {
        title = "Тихий махінатор 🤫"; desc = "Ви заплющуєте очі на дрібні порушення за 'бонус'."; position = "Інспектор Держпраці";
    } else if (percentage <= 35) {
        title = "Господарник 🛠️"; desc = "Робите ремонт у під'їзді, а матеріали — собі на дачу."; position = "Заступник начальника ЖЕКу";
    } else if (percentage <= 37) {
        title = "Майстер списання 📝"; desc = "Можете списати новий монітор як згорілий."; position = "Завідувач господарством лікарні";
    } else if (percentage <= 40) {
        title = "Організатор свят 🎭"; desc = "Рідня завжди виграє тендери на день міста."; position = "Директор районного будинку культури";
    } else if (percentage <= 42) {
        title = "Сліпий інспектор 🙈"; desc = "Не помічаєте тарганів в ресторані за скромну плату."; position = "Інспектор Держпродспоживслужби";
    } else if (percentage <= 45) {
        title = "Любитель 'Вдячності' 💵"; desc = "Гроші гріють душу. Прямо не вимагаєте, але натякаєте."; position = "Керівник управління молоді та спорту";
    } else if (percentage <= 47) {
        title = "Творець МАФів 🏗️"; desc = "За вашим підписом кіоски ростуть як гриби."; position = "Головний архітектор містечка";
    } else if (percentage <= 50) {
        title = "Комерційний діагност 🏥"; desc = "Довідки видаються за офіційно-неофіційним прайсом."; position = "Головний лікар районної лікарні";
    } else if (percentage <= 52) {
        title = "Лісоруб у законі 🌲"; desc = "Там, де вчора був ліс, сьогодні ваші гроші."; position = "Керівник відділу лісового господарства";
    } else if (percentage <= 55) {
        title = "Лорд Земель 🗺️"; desc = "Кожен клаптик землі приносить вам пасивний дохід."; position = "Начальник відділу земельних ресурсів";
    } else if (percentage <= 57) {
        title = "Володар 'Блатних' Номерів 🚘"; desc = "Торгуєте номерами 7777 та закриваєте очі на іспити."; position = "Начальник сервісного центру МВС";
    } else if (percentage <= 60) {
        title = "Перспективний Кадр 📈"; desc = "Маєте кілька кримінальних справ, які не рухаються."; position = "Директор обласного підприємства";
    } else if (percentage <= 62) {
        title = "Продавець повітря 💨"; desc = "Виписуєте дозволи на викиди заводам, які димлять."; position = "Головний екологічний інспектор";
    } else if (percentage <= 65) {
        title = "Король Тендерів 👑"; desc = "Знаєте 100 способів виграти тендер до його початку."; position = "Голова тендерного комітету";
    } else if (percentage <= 67) {
        title = "Академік Відкатів 🎓"; desc = "Дипломи купуються, а гуртожитки здаються під офіси."; position = "Ректор державного університету";
    } else if (percentage <= 70) {
        title = "Митний Барон 🚢"; desc = "Керуєте потоками, які не бачить жоден радар."; position = "Керівник обласної митниці";
    } else if (percentage <= 72) {
        title = "Податковий Маг 🪄"; desc = "Списуєте ПДВ друзям і душите перевірками ворогів."; position = "Головний податківець області";
    } else if (percentage <= 75) {
        title = "Господар Міста 🏙️"; desc = "Без вашого 'так' в місті не покладуть жодної бруківки."; position = "Мер обласного центру";
    } else if (percentage <= 77) {
        title = "Феодал 🏰"; desc = "Вся область платить вам данину."; position = "Голова обласної ради";
    } else if (percentage <= 80) {
        title = "Тіньовий Кардинал 🕵️‍♂️"; desc = "Освоюєте мільярди на великому будівництві 'законно'."; position = "Заступник міністра інфраструктури";
    } else if (percentage <= 82) {
        title = "Капітан Держбюджету ⛴️"; desc = "Викачуєте гроші з держпідприємств у свої офшори."; position = "Керівник державного концерну";
    } else if (percentage <= 85) {
        title = "Монополіст 🎩"; desc = "Ви вирішуєте, хто зароблятиме, а хто збанкрутує."; position = "Голова антимонопольного комітету";
    } else if (percentage <= 87) {
        title = "Продавець справ 📂"; desc = "Справи відкриваються і закриваються по дзвінку."; position = "Генеральний прокурор";
    } else if (percentage <= 90) {
        title = "Верховний 'Рішала' ⚖️"; desc = "Ваше слово — закон. Ви продаєте найдорожче — свободу."; position = "Голова Верховного Суду";
    } else if (percentage <= 92) {
        title = "Міністр Схем 💼"; desc = "Під вас створюють міністерства, щоб було звідки красти."; position = "Міністр економіки";
    } else if (percentage <= 95) {
        title = "Олігарх-Початківець 💰"; desc = "Заводи на кота, гроші на Кіпрі, ви — в парламенті."; position = "Народний депутат (власник 5 заводів)";
    } else if (percentage <= 98) {
        title = "Недоторканний 🛡️"; desc = "Ви купуєте депутатів оптом і телеканали вроздріб."; position = "Наближений до Президента олігарх";
    } else {
        title = "Хрещений Батько Корупції 👑"; desc = "Ви і є Система! Ви призначаєте тих, хто краде для вас."; position = "Тіньовий кардинал (призначає президентів)";
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
