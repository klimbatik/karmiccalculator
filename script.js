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

        // Проверка формата
        const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
        const match = birthDate.match(regex);
        if (!match) {
            alert("Неверный формат. Используйте ДД.ММ.ГГГГ");
            return;
        }

        const day = match[1];
        const month = match[2];
        const year = match[3];

        // Все цифры даты
        const digits = [...day, ...month, ...year].map(Number);
        const sum = digits.reduce((a, b) => a + b, 0);

        // Сворачиваем до одной цифры
        let lifePath = sum;
        while (lifePath > 9 && ![11, 22, 33].includes(lifePath)) {
            lifePath = Math.floor(lifePath / 10) + (lifePath % 10);
        }

        // Описание
        let description = "";
        switch (lifePath) {
            case 1:
                description = "Лидер, инициатор. Карма эго — научиться не подавлять других.";
                break;
            case 2:
                description = "Миротворец, чувствительный. Карма энергии — не терять себя в других.";
                break;
            case 3:
                description = "Творец, артист. Карма масок — быть собой, а не играть.";
                break;
            case 4:
                description = "Труженик, строитель. Карма тела — уважать физическую форму.";
                break;
            case 5:
                description = "Свобода, перемены. Карма страсти — не быть рабом желаний.";
                break;
            case 6:
                description = "Хранитель семьи. Карма жертвенности — любить без привязок.";
                break;
            case 7:
                description = "Искатель истины. Карма одиночества — доверять жизни.";
                break;
            case 8:
                description = "Власть, деньги. Карма долга — не платить страданием.";
                break;
            case 9:
                description = "Гуманизм, прощение. Карма незавершённого — отпускать.";
                break;
            case 11:
                description = "Пробуждение. Миссия — вести других к свету.";
                break;
            case 22:
                description = "Мастер. Сила — в служении, а не в контроле.";
                break;
            case 33:
                description = "Учитель. Карма — нести любовь без жертвы.";
                break;
            default:
                description = "Число судьбы не определено.";
        }

        resultDiv.innerHTML = `
            <h3>Число жизненного пути: ${lifePath}</h3>
            <p>${description}</p>
        `;
        resultDiv.style.display = "block";
    });
});