const karmicTails = {
    "18-6-6": {
        name: "Любовная магия",
        description: "Использование любви как инструмента контроля, привязок, манипуляций."
    },
    "9-9-18": {
        name: "Волшебник, магические знания",
        description: "Большая магическая сила, связанная с мудростью и знаниями."
    },
    "9-18-9": {
        name: "Магическая жертва",
        description: "Жертвенность ради высших целей, часто связанная с магическими практиками."
    },
    "18-9-9": {
        name: "Волшебник. Отшельничество",
        description: "Магическая сила, сочетающаяся с желанием уединения и духовного роста."
    },
    "6-5-17": {
        name: "Гордыня",
        description: "Чрезмерная гордость, которая может блокировать развитие."
    },
    "15-20-5": {
        name: "Бунтарь",
        description: "Непокорный дух, склонность к протестам и бунтам."
    },
    "15-5-8": {
        name: "Предательства, страсти в семье",
        description: "Сложные семейные отношения, связанные с предательством и эмоциональными взрывами."
    },
    "3-9-12, 3-12-9, 9-12-3": {
        name: "Одинокая женщина",
        description: "Чувство одиночества и неудовлетворённости в личной жизни."
    },
    "15-8-11": {
        name: "Физическая агрессия",
        description: "Накопленная физическая агрессия, которая может проявляться в конфликтах."
    },
    "9-15-6": {
        name: "Мир страстей и сказок",
        description: "Жизнь, наполненная эмоциями и фантазиями."
    },
    "6-17-11": {
        name: "Загубленный талант",
        description: "Нереализованный потенциал и таланты."
    },
    "12-19-7": {
        name: "Воин",
        description: "Сильная воля и готовность к борьбе за свои цели."
    },
    "21-4-10": {
        name: "Угнетённая душа",
        description: "Чувство подавленности и несвободы."
    },
    "12-16-4": {
        name: "Император",
        description: "Лидерские качества и власть."
    },
    "3-22-19": {
        name: "Не рожденное дитя",
        description: "Чувство незавершенности и неосуществлённых планов."
    },
    "21-10-16": {
        name: "Духовный жрец",
        description: "Связь с духовными практиками и мистикой."
    },
    "6-8-20": {
        name: "Разочарование рода",
        description: "Чувство разочарования в своих корнях и происхождении."
    },
    "3-7-22": {
        name: "Узник",
        description: "Ощущение ограничений и зависимости от внешних факторов."
    },
    "9-3-21": {
        name: "Надзиратель",
        description: "Склонность контролировать и наблюдать за другими."
    },
    "21-7-13": {
        name: "Разрушение и смерть многим душам",
        description: "Влияние на судьбы других людей, иногда разрушительное."
    },
    "18-6-15": {
        name: "Тёмный маг",
        description: "Скрытая магическая сила, используемая для темных целей."
    },
    "6-20-14": {
        name: "Душа, которую принесли в жертву",
        description: "Чувство жертвы и самоотречения."
    },
    "21-10-7": {
        name: "Воин веры",
        description: "Борьба за свои убеждения и веру."
    },
    "3-13-10": {
        name: "Суицид",
        description: "Склонность к саморазрушению и депрессии."
    },
    "6-14-8": {
        name: "Диктатор",
        description: "Склонность к доминированию и контролю."
    },
    "12-18-3, 18-3-12": {
        name: "Физические страдания",
        description: "Частые физические проблемы и болезни."
    }
};

// Функция: свернуть число до одной цифры (кроме 11, 22, 33)
function reduceToSingle(num) {
    while (num > 9 && ![11, 22, 33].includes(num)) {
        num = Math.floor(num / 10) + (num % 10);
    }
    return num;
}

// Функция: рассчитать кармический хвост по дате в формате ДД.ММ.ГГГГ
function calculateKarmicTail(dateStr) {
    const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = dateStr.match(regex);
    if (!match) throw new Error("Неверный формат. Используйте ДД.ММ.ГГГГ");

𝓔𝓵𝓮𝓷𝓪, [11.08.2025 21:25]
const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    if (day < 1  day > 31  month < 1  month > 12  year < 1900 || year > 2100) {
        throw new Error("Некорректная дата");
    }

    // Сумма всех цифр даты
    const sumDigits = [...(day + month + year).toString()]
        .map(Number)
        .reduce((a, b) => a + b, 0);

    const lifePath = reduceToSingle(sumDigits);
    const karmicNumber = lifePath === 6 ? 18 : lifePath * 3;

    return ${karmicNumber}-${lifePath}-${lifePath};
}

// Запуск после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dateForm");
    const birthDateInput = document.getElementById("birthDate");
    const resultDiv = document.getElementById("result");
    const codeEl = document.getElementById("karmicTailCode");
    const nameEl = document.getElementById("karmicTailName");
    const descEl = document.getElementById("karmicTailDescription");

    if (!form  !birthDateInput  !resultDiv) {
        console.error("Не найдены элементы формы");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const birthDate = birthDateInput.value.trim();

        if (!birthDate) {
            alert("Введите дату рождения!");
            return;
        }

        try {
            const karmicTail = calculateKarmicTail(birthDate);
            const result = karmicTails[karmicTail];

            if (result) {
                codeEl.textContent = Код: ${karmicTail};
                nameEl.textContent = Название: ${result.name};
                descEl.textContent = Описание: ${result.description};
                resultDiv.style.display = "block";
            } else {
                alert("Кармический хвост не найден. Попробуйте другую дату.");
            }
        } catch (error) {
            alert(error.message);
        }
    });
});