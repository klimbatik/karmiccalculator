// Функция: свернуть число до одной цифры
function reduceToSingle(num) {
    while (num > 9 && ![11, 22, 33].includes(num)) {
        num = Math.floor(num / 10) + (num % 10);
    }
    return num;
}

// Функция: получить все цифры даты
function getDigits(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return [...(day + month + year).toString()].map(Number);
}

// Основная функция расчёта
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dateForm");
    const birthDateInput = document.getElementById("birthDate");
    const resultDiv = document.getElementById("result");
    const karmicNumbersDiv = document.getElementById("karmicNumbers");
    const missingDigitsDiv = document.getElementById("missingDigits");
    const familyBlocksDiv = document.getElementById("familyBlocks");
    const summaryDiv = document.getElementById("summary");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const birthDate = birthDateInput.value;

        if (!birthDate) {
            alert("Введите дату рождения!");
            return;
        }

        // Получаем цифры даты
        const digits = getDigits(birthDate);
        const fullNumber = digits.reduce((a, b) => a + b, 0);
        const lifePath = reduceToSingle(fullNumber);

        // Все цифры от 1 до 9
        const allDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const present = [...new Set(digits)];
        const missing = allDigits.filter(d => !present.includes(d));

        // Кармические числа в дате
        const karmicNumbers = [];
        if (digits.includes(1) && digits.includes(3)) karmicNumbers.push(13);
        if (digits.includes(1) && digits.includes(4)) karmicNumbers.push(14);
        if (digits.includes(1) && digits.includes(6)) karmicNumbers.push(16);
        if (digits.includes(1) && digits.includes(9)) karmicNumbers.push(19);
        if (digits.filter(d => d === 2).length >= 2) karmicNumbers.push(22);

        // Родовые блоки
        const blocks = [];
        if (missing.includes(3)) blocks.push("Нерождённое дитя");
        if (missing.includes(5)) blocks.push("Предательства в семье");
        if (missing.includes(6)) blocks.push("Разрыв с родом");
        if (missing.includes(7)) blocks.push("Суицид в роду");
        if (missing.includes(8)) blocks.push("Долг перед родителями");
        if (missing.includes(9)) blocks.push("Неспрощённые обиды");
        if (karmicNumbers.includes(16)) blocks.push("Физическая агрессия");
        if (karmicNumbers.includes(14)) blocks.push("Зависимости в роду");

        // Вывод
        karmicNumbersDiv.innerHTML = `
            <h3>🔢 Кармические числа:</h3>
            <p>${karmicNumbers.length ? karmicNumbers.join(', ') : 'Нет'} — уроки из прошлой жизни.</p>
        `;

        missingDigitsDiv.innerHTML = `
            <h3>🕳️ Отсутствующие цифры:</h3>
            <p>${missing.join(', ') || 'Нет'} — кармические задачи этой жизни.</p>
        `;

        familyBlocksDiv.innerHTML = `
            <h3>🧬 Родовые блоки:</h3>
            <p>${blocks.length ? blocks.join(', ') : 'Не выявлено'} — программы, пришедшие из рода.</p>
        `;

        summaryDiv.innerHTML = `
            <h3>🎯 Вывод:</h3>
            <p>Ваша душа пришла с задачей проработать: <strong>${blocks.slice(0, 3).join(', ') || 'личный путь'}</strong>. 
            Карма прошлой жизни требует: <strong>${karmicNumbers.join(', ') || 'гармонии'}</strong>.</p>
        `;

        resultDiv.style.display = "block";
    });
});