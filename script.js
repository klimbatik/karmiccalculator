// Функция: свернуть число до одной цифры (кроме 11, 22, 33)
function reduceToSingle(num) {
    while (num > 9 && ![11, 22, 33].includes(num)) {
        num = Math.floor(num / 10) + (num % 10);
    }
    return num;
}

// Основная функция расчёта
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

        // Парсим дату
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

        // Получаем все цифры даты
        const dateStr = day + month + year;
        const digits = [...dateStr.toString()].map(Number);
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
        const missing = allDigits.filter(digit => !present.has(digit));

        // === РОДОВЫЕ БЛОКИ ===
        let familyBlocksHTML = '<h3 style="color:#b18da0; margin:25px 0 15px 0;">РОДОВЫЕ БЛОКИ</h3>';

        if (missing.includes(7)) {
            familyBlocksHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Суицид в роду.</strong><br>
                    Отсутствие цифры 7 — один из самых серьёзных признаков родовой травмы. 
                    В вашем роду были случаи самоубийства, попытки, или люди уходили внезапно — от болезни, несчастного случая, "сердечного приступа". 
                    Часто это касалось женщин, которые "не выдерживали" жизни, или мужчин, исчезнувших без следа. 
                    Это не просто статистика — это <em>энергетический разрыв</em> в роду. 
                    Вы пришли с задачей прервать этот цикл. Ваша миссия — научиться доверять жизни, не бояться одиночества, не искать "конца" как избавления. 
                    Каждый раз, когда вы выбираете жизнь — вы исцеляете род.
                </p>
            `;
        }

        if (missing.includes(2)) {
            familyBlocksHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Физическая агрессия и потеря энергии.</strong><br>
                    Нет цифры 2 — значит, в роду была проблема с энергией: она выходила в разрушение. 
                    Это могли быть крики, удары, холодная агрессия, сарказм, "взгляды убивают". 
                    Возможно, вы сами получали или передаёте это дальше — в отношениях, с детьми, на работе. 
                    Энергия тратилась впустую, на конфликты, обиды, манипуляции. 
                    Ваша задача — научиться выражать гнев без вреда, беречь свою силу, не вступать в споры. 
                    Сила — не в крике, а в молчании. Не в агрессии, а в спокойствии.
                </p>
            `;
        }

        if (missing.includes(4)) {
            familyBlocksHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Карма тела и здоровья.</strong><br>
                    Отсутствие 4 — прямой указ на слабое здоровье как кармическую задачу. 
                    В прошлой жизни вы могли пренебрегать телом: злоупотреблять, истощать, не ценить его. 
                    Или, наоборот, страдали от болезней без причины. 
                    Сейчас вы пришли, чтобы научиться уважать тело: слушать его, питать, двигать, отдыхать. 
                    Каждый раз, когда вы выбираете здоровье — вы исцеляете прошлую боль.
                </p>
            `;
        }

        if (karmicNumbers.includes(14)) {
            familyBlocksHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Зависимости в роду.</strong><br>
                    Наличие 14 — признак кармы зависимостей. 
                    В роду были алкоголики, наркоманы, или люди, зависимые от страсти, денег, власти. 
                    Это не обязательно явное "пью", но может быть "не могу без кофе", "не могу без телефона", "не могу быть одна". 
                    Ваша задача — научиться быть свободной, не искать "опоры" вне себя. 
                    Настоящая сила — в способности быть одной и быть в покое.
                </p>
            `;
        }

        if (karmicNumbers.includes(16)) {
            familyBlocksHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Физическая и эмоциональная агрессия.</strong><br>
                    16 — число гнева, разрушения, насилия. 
                    В роду были люди, которые "ломали" других — словами, действиями, взглядом. 
                    Возможно, вы сами чувствуете в себе вспышки ярости, которые пугают. 
                    Это не ваша вина — это родовая программа. 
                    Но вы можете её проработать: через прощение, через осознание, через отказ от контроля.
                </p>
            `;
        }

        if (digits.includes(6) && karmicNumbers.includes(19)) {
            familyBlocksHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Привороты и магия в любви.</strong><br>
                    6 (семья, любовь) + 19 (власть, контроль) — классический признак магического вмешательства в любовные отношения. 
                    В роду женщины могли привязывать мужчин магически, чтобы "не ушёл", "остался", "любил". 
                    Это могли быть заговоры, привороты, "сглазили счастье". 
                    Вы пришли, чтобы разорвать эту цепь. Ваша любовь должна быть свободной, без привязок, без страха. 
                    Пусть человек остаётся — не из-за магии, а из-за любви.
                </p>
            `;
        }

        if (missing.includes(8)) {
            familyBlocksHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Долг перед родом.</strong><br>
                    Нет 8 — значит, в роду был разрыв: кто-то ушёл, отказался от семьи, не выполнил обещание. 
                    Вы чувствуете долг, но не видите благодарности. 
                    Ваша задача — не пытаться "оплатить" этот долг страданием, а просто жить своей жизнью. 
                    Род исцеляется не через жертву, а через радость.
                </p>
            `;
        }

        if (familyBlocksHTML === '<h3 style="color:#b18da0; margin:25px 0 15px 0;">РОДОВЫЕ БЛОКИ</h3>') {
            familyBlocksHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    По вашей дате рождения не выявлено явных родовых блоков. 
                    Это хороший знак — вы пришли не для проработки тяжёлых программ, а для развития своих сильных сторон.
                </p>
            `;
        }

        // === ПРОГРАММЫ ДУШИ ===
        let soulProgramHTML = '<h3 style="color:#b18da0; margin:25px 0 15px 0;">ПРОГРАММЫ ДУШИ</h3>';

        if (lifePath === 6) {
            soulProgramHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Хранительница семьи.</strong><br>
                    Ваше число жизненного пути — 6. Это значит, что вы — Хранительница Рода. 
                    Вы помните всех, звоните, прощаете, жертвуете собой. 
                    Вы — тот, кто держит семью вместе. 
                    Но ваша задача — научиться ставить себя на первое место. 
                    Вы не должны спасать всех. 
                    Иногда нужно позволить другим упасть, чтобы они научились вставать. 
                    Ваша сила — не в жертвенности, а в способности любить свободно.
                </p>
            `;
        }

        if (karmicNumbers.includes(19)) {
            soulProgramHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>От власти к служению.</strong><br>
                    19 — число власти, гордыни, контроля. 
                    В прошлых жизнях вы были королевой, жрицей, судьёй, тем, кто решал судьбы других. 
                    Сейчас вы пришли, чтобы отпустить эту энергию. 
                    Не командуйте, не спасайте, не контролируйте. 
                    Сила — в мягкости, в умении слушать, в доверии. 
                    Ваша миссия — быть не властителем, а проводником света.
                </p>
            `;
        }

        if (karmicNumbers.includes(22)) {
            soulProgramHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>Мастер, который не тиран.</strong><br>
                    22 — мастер-число, но при искажении — самое опасное. 
                    Вы обладаете огромной силой: можете исцелять, видеть, влиять. 
                    Но вы должны использовать её без манипуляций. 
                    Не вмешивайтесь в чужие судьбы. 
                    Не "лечите" тех, кто не просит. 
                    Позвольте другим идти своим путём. 
                    Истинный мастер — тот, кто освобождает, а не привязывает.
                </p>
            `;
        }

        if (missing.includes(5)) {
            soulProgramHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    <strong>От интуиции к разуму.</strong><br>
                    Нет 5 — значит, вы склонны действовать по интуиции, а не по логике. 
                    Это хорошо, но может приводить к ошибкам. 
                    Ваша задача — развивать разум, анализировать, учиться. 
                    Не бойтесь думать. Разум — не враг интуиции, а её союзник.
                </p>
            `;
        }

        if (soulProgramHTML === '<h3 style="color:#b18da0; margin:25px 0 15px 0;">ПРОГРАММЫ ДУШИ</h3>') {
            soulProgramHTML += `
                <p style="color:#b18da0; text-align:left; margin:10px 0; line-height:1.6;">
                    Ваша душа пришла с сильными программами роста. 
                    Вы несёте в себе потенциал для глубокого развития и исцеления. 
                    Продолжайте следовать своему пути — он ведёт к свету.
                </p>
            `;
        }

        // Выводим результат
        resultDiv.innerHTML = familyBlocksHTML + soulProgramHTML;
        resultDiv.style.display = "block";
    });
});