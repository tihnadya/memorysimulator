/* ГЛОБАЛЬНЫЙ СБРОС
Убрать отступы и границы у всех элементов, чтобы все браузеры отображали страницу одинаково */
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
/* ОСНОВНЫЕ СТИЛИ СТРАНИЦЫ
Системный шрифт, градиентный фон на всю высоту экрана, выравниевание по центру по вертикали и горизонтали */
body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 20px;
}
/* КОНТЕЙНЕР ПРИЛОЖЕНИЯ
Полупрозрачный белый блок с размытием фона, тенью и скруглёнными углами.
Ширина 700px для читаемости */
.app-container{
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    padding: 30px 30px 20px 30px;
    width: 100%;
    max-width: 700px;
    transition: all 0.3s ease;
}
/* ЗАГОЛОВОК С ИКОНКОЙ
Выравнивание иконки и текста по центру по вертикали, размер и отступ */
.header-with-icon{
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 28px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 2px;
    letter-spacing: -0.5px;
}
/* ИКОНКА МОЗГА
Фиксированный размер, не сжимается при уменьшении экрана */
.brain-icon{
    width: 36px;
    height: 36px;
    color: #4a5568;
    flex-shrink: 0;
}
/* ПОДЗАГОЛОВОК
Светлый, обычный вес, отступ снизу */
h2{
    font-size: 18px;
    font-weight: 400;
    color: #718096;
    margin-bottom: 16px;
}
/* КОНТЕЙНЕР ПРОГРЕССА
Отступ снизу для отделения от карточки */
.progress-container{
    margin-bottom: 16px;
}
/* ТЕКСТ ПРОГРЕССА
«Вопрос 1 из 10» — небольшой, полужирный */
#progress-text{
    font-size: 14px;
    font-weight: 500;
    color: #4a5568;
    display: block;
    margin-bottom: 4px;
}
/* ФОН ПОЛОСЫ ПРОГРЕССА
Серая полоса с закруглениями */
.progress-bar-bg{
    width: 100%;
    height: 8px;
    background: #edf2f7;
    border-radius: 20px;
    overflow: hidden;
}
/* ЗАПОЛНЕННАЯ ПОЛОСА ПРОГРЕССА
Градиент от зелёного к тёмно-зелёному, плавное изменение ширины */
.progress-bar-fill{
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #48bb78 0%, #38a169 100%);
    border-radius: 20px;
    transition: width 0.4s ease;
}
/* КАРТОЧКА С ВОПРОСОМ
Белый блок, тень, скругление, отступы внутри и снаружи */
.card{
    background: white;
    border-radius: 16px;
    padding: 20px 22px 16px 22px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin-bottom: 14px;
    border: 1px solid rgba(255, 255, 255, 0.6);
}
/* ТЕКСТ ВОПРОСА
Крупный, жирный, с отступом снизу.
Высота автоматическая (не фиксированная) */
.question{
    font-size: 20px;
    font-weight: 600;
    color: #1a202c;
    line-height: 1.3;
    margin-bottom: 14px;
    min-height: auto;
}
/* КОНТЕЙНЕР ВАРИАНТОВ ОТВЕТОВ
Вертикальный список с маленьким промежутком между пунктами */
.options-container{
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;
}
/* ОДИН ВАРИАНТ ОТВЕТА
Строка с иконкой-кружком и текстом.
При наведении — подсветка и сдвиг вправо.
При disabled — курсор not-allowed */
.option-item{
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #f7fafc;
}
/* Не срабатывает для заблокированных элементов (с классом disabled) */
.option-item:hover:not(.disabled){
    border-color: #4299e1;
    background: #ebf8ff;
    transform: translateX(4px);
}
/* КРУЖОК-ИНДИКАТОР
Внешний круг с серой рамкой, внутри точка-заливка (по умолчанию прозрачная) */
.option-item .radio-circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #a0aec0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s ease;
}
.option-item .radio-circle .inner-dot{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: transparent;
    transition: all 0.2s ease;
}
/* ТЕКСТ ВАРИАНТА
«A. Текст» — средний размер, полужирный */
.option-item .option-text{
    font-size: 15px;
    color: #2d3748;
    font-weight: 500;
}
/* СОСТОЯНИЕ: ВЫБРАН
Синяя рамка, голубой фон, кружок заполнен белой точкой */
.option-item.selected{
    border-color: #4299e1;
    background: #ebf8ff;
}
.option-item.selected .radio-circle{
    border-color: #4299e1;
    background: #4299e1;
}
.option-item.selected .radio-circle .inner-dot{
    background: white;
}
/* СОСТОЯНИЕ: ПРАВИЛЬНЫЙ ОТВЕТ
Зелёная рамка, светло-зелёный фон, кружок зелёный с белой точкой */
.option-item.correct{
    border-color: #48bb78;
    background: #f0fff4;
}
.option-item.correct .radio-circle{
    border-color: #48bb78;
    background: #48bb78;
}
.option-item.correct .radio-circle .inner-dot{
    background: white;
}
/* СОСТОЯНИЕ: НЕПРАВИЛЬНЫЙ ОТВЕТ
Красная рамка, светло-красный фон, кружок красный с белой точкой */
.option-item.incorrect{
    border-color: #fc8181;
    background: #fff5f5;
}
.option-item.incorrect .radio-circle{
    border-color: #fc8181;
    background: #fc8181;
}
.option-item.incorrect .radio-circle .inner-dot{
    background: white;
}
/* СОСТОЯНИЕ: ПОКАЗ ПРАВИЛЬНОГО ОТВЕТА
Используется, когда пользователь ошибся: правильный вариант подсвечивается зелёным */
.option-item.show-correct{
    border-color: #48bb78;
    background: #f0fff4;
}
/* СОСТОЯНИЕ: ЗАБЛОКИРОВАН
После ответа все варианты блокируются.
Прозрачность 85%, отмена hover-эффектов */
.option-item.disabled{
    cursor: not-allowed;
    opacity: 0.85;
}
.option-item.disabled:hover{
    transform: none;
    border-color: #e2e8f0;
    background: #f7fafc;
}
/* Блокированные правильные варианты не теряют зелёный цвет при hover */
.option-item.correct.disabled:hover,
.option-item.show-correct.disabled:hover{
    border-color: #48bb78;
    background: #f0fff4;
}
/* Блокированные неправильные варианты не теряют красный цвет при hover */
.option-item.incorrect.disabled:hover{
    border-color: #fc8181;
    background: #fff5f5;
}
/* БЛОК ОБРАТНОЙ СВЯЗИ
Сообщение после проверки ответа.
Минимальная высота, чтобы не прыгал интерфейс */
.feedback{
    font-size: 14px;
    font-weight: 500;
    min-height: 24px;
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 8px;
    background: #f7fafc;
}
/* Правильный ответ — зелёный текст, светло-зелёный фон, зелёная рамка */
.feedback.correct{
    color: #22543d;
    background: #f0fff4;
    border: 1px solid #c6f6d5;
}
/* Неправильный ответ — красный текст, светло-красный фон, красная рамка */
.feedback.incorrect{
    color: #9b2c2c;
    background: #fff5f5;
    border: 1px solid #fed7d7;
}
/* ГРУППА КНОПОК
Кнопка «Далее» прижата к правому краю */
.button-group{
    display: flex;
    justify-content: flex-end;
}
/* ОБЩИЙ СТИЛЬ КНОПОК
Отступы, размер, жирность, скругление, курсор */
.btn{
    padding: 10px 28px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.15s ease;
    font-family: inherit;
}
/* КНОПКА «ДАЛЕЕ»
Зелёная, при наведении темнеет и приподнимается.
В состоянии disabled — полупрозрачная, без анимации */
.btn-next{
    background: #48bb78;
    color: white;
}
.btn-next:hover:not(:disabled){
    background: #38a169;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
}
/* КНОПКА «ДАЛЕЕ» В СОСТОЯНИИ DISABLED
Кнопка недоступна, пока не будет выбран вариант ответа.
Полупрозрачная, без анимации при наведении, курсор-запрет */
.btn-next:disabled{
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}
/* КНОПКА «НАЧАТЬ ЗАНОВО»
Светло-серая, при наведении темнеет */
.btn-restart{
    background: #edf2f7;
    color: #2d3748;
    padding: 10px 24px;
}
.btn-restart:hover{
    background: #e2e8f0;
}
/* СТАТИСТИКА в левой части
Строка «Прогресс: 0 правильных / 0 неправильных»
Выравнивание по центру по вертикали, маленькие отступы между частями */
.stats-container{
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 15px;
    font-weight: 500;
    color: #4a5568;
    margin-bottom: 6px;
    padding-left: 2px;
}
/* Текст «Прогресс:» — серый */
.stats-label{
    color: #4a5568;
    margin-right: 2px;
}
/* Слово «правильных» — зелёное */
.stats-correct{
    color: #48bb78;
}
/* Слово «неправильных» — красное */
.stats-incorrect{
    color: #fc8181;
}
/* Разделитель «/» — светло-серый */
.stats-divider{
    color: #a0aec0;
    margin: 0 2px;
}
/* БЛОК РЕЗУЛЬТАТА
Появляется после прохождения всех вопросов.
Текст по центру, отступы */
.result-area{
    text-align: center;
    padding: 20px 0 10px 0;
}
.result-area h2{
    font-size: 26px;
    color: #2d3748;
    margin-bottom: 8px;
}
/* Итоговое сообщение с результатами */
#final-message{
    font-size: 17px;
    color: #4a5568;
    margin-bottom: 16px;
    white-space: pre-line;
}
/* АДАПТИВНОСТЬ (для экранов до 480px)
Уменьшение отступов, размеров шрифтов и элементов, чтобы интерфейс помещался на маленьких экранах */
@media (max-width: 480px){
    .app-container{
        padding: 16px 14px 12px 14px;
    }
    .card{
        padding: 16px 14px 12px 14px;
    }
    .question{
        font-size: 17px;
        margin-bottom: 10px;
    }
    .option-item{
        padding: 8px 12px;
        gap: 10px;
    }
    .option-item .option-text{
        font-size: 14px;
    }
    .btn{
        width: 100%;
        justify-content: center;
        padding: 10px 20px;
    }
    .header-with-icon{
        font-size: 22px;
    }
    .brain-icon{
        width: 28px;
        height: 28px;
    }
    h2{
        font-size: 15px;
        margin-bottom: 10px;
    }
    .stats-container{
        font-size: 13px;
        flex-wrap: wrap;
    }
}
