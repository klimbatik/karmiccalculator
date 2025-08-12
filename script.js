// Функция: свернуть число до одной цифры
function reduceToSingle(num) {
    while (num > 9 && ![11, 22, 33].includes(num)) {
        num = Math.floor(num / 10) + (num % 10);
    }
    return num;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dateForm");
    const birthDateInput = document.getElementById("birthDate");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const birthDate = birthDateInput.value.trim();

        if (!birthDate) {
            alert("Введите дату рождения!");
            return;
        }

        // Проверка формата ДД.ММ.ГГГГ
        const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
        const match = birthDate.match(regex);
        if (!match) {
            alert("Неверный формат. Используйте ДД.ММ.ГГГГ");
            return;
        }

        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);

        if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
            alert("Некорректная дата");
            return;
        }

        // ✅ ПРАВИЛЬНЫЙ СБОР ЦИФР
        const dateStr = match[1] + match[2] + match[3]; // "06" + "05" + "1984" = "06051984"
        const digits = [...dateStr].map(Number); // [0,6,0,5,1,9,8,4]
        const fullSum = digits.reduce((a, b) => a + b, 0);
        const lifePath = reduceToSingle(fullSum);

        // Кармические числа
        const karmicNumbers = [];
        if (digits.includes(1) && digits.includes(3)) karmicNumbers.push(13);
        if (digits.includes(1) && digits.includes(4)) karmicNumbers.push(14);
        if (digits.includes(1) && digits.includes(6)) karmicNumbers.push(16);
        if (digits.includes(1) && digits.includes(9)) karmicNumbers.push(19);
        if (digits.filter(d => d === 2).length >= 2) karmicNumbers.push(22);

        // Отсутствующие цифры
        const allDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const present = new Set(digits);
        const missing = allDigits.filter(d => !present.has(d));

        // === НАЧИНАЕМ СБОРКУ УНИКАЛЬНОГО РЕЗУЛЬТАТА ===
        let html = '';

        // --- РОДОВЫЕ БЛОКИ ---
        html += '<h3>РОДОВЫЕ БЛОКИ</h3>';

        if (missing.includes(7)) {
            html += '<p><strong>Суицид в роду.</strong><br>В роду были случаи самоубийства или внезапной смерти. Вы пришли, чтобы прервать цикл страданий.</p>';
        }
        if (missing.includes(2)) {
            html += '<p><strong>Физическая агрессия.</strong><br>В роду была потеря энергии через крики, удары, сарказм. Ваша задача — научиться выражать гнев без вреда.</p>';
        }
        if (missing.includes(4)) {
            html += '<p><strong>Карма тела.</strong><br>Слабое здоровье — кармическая задача. В прошлой жизни могли не ценить тело.</p>';
        }
        if (karmicNumbers.includes(14)) {
            html += '<p><strong>Зависимости в роду.</strong><br>Алкоголь, страсть, деньги — формы зависимости. Ваша миссия — свобода.</p>';
        }
        if (karmicNumbers.includes(16)) {
            html += '<p><strong>Гнев и разрушение.</strong><br>16 — число агрессии. В роду были люди, ломавшие других.</p>';
        }
        if (digits.includes(6) && karmicNumbers.includes(19)) {
            html += '<p><strong>Привороты в любви.</strong><br>6 + 19 — признак магического контроля в отношениях.</p>';
        }
        if (missing.includes(8)) {
            html += '<p><strong>Долг перед родом.</strong><br>Разрыв в роду. Вы чувствуете долг, но не видите благодарности.</p>';
        }

        if (!html.includes('РОДОВЫЕ БЛОКИ</h3><p>')) {
            html += '<p>По вашей дате не выявлено явных родовых блоков. Хороший знак — вы пришли для развития, а не проработки тяжёлых программ.</p>';
        }

        // --- ПРОГРАММЫ ДУШИ ---
        html += '<h3>ПРОГРАММЫ ДУШИ</h3>';

        if (lifePath === 6) {
            html += '<p><strong>Хранительница семьи.</strong><br>Вы держите род вместе. Но не жертвуйте собой ради других.</p>';
        }
        if (karmicNumbers.includes(19)) {
            html += '<p><strong>От власти к служению.</strong><br>В прошлой жизни вы командовали. Сейчас — ваша задача слушать, а не решать за всех.</p>';
        }
        if (karmicNumbers.includes(22)) {
            html += '<p><strong>Мастер, который не тиран.</strong><br>У вас огромная сила. Используйте её, чтобы освобождать, а не привязывать.</p>';
        }
        if (missing.includes(5)) {
            html += '<p><strong>От интуиции к разуму.</strong><br>Не бойтесь анализировать. Разум — ваш союзник.</p>';
        }

        if (!html.includes('ПРОГРАММЫ ДУШИ</h3><p>')) {
            html += '<p>Ваша душа пришла с сильными программами роста. Продолжайте путь — он ведёт к свету.</p>';
        }

        // Показываем результат
        resultDiv.innerHTML = html;
        resultDiv.style.display = "block";
        resultDiv.scrollTop = 0;
    });
});