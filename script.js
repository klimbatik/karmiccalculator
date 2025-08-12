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

        // Сворачиваем до одной цифры (кроме 11, 22, 33)
        let lifePath = sum;
        while (lifePath > 9 && ![11, 22, 33].includes(lifePath)) {
            lifePath = Math.floor(lifePath / 10) + (lifePath % 10);
        }

        // === ОПИСАНИЕ ДЛЯ КАЖДОГО ЧИСЛА ===
        let title = "";
        let karma = "";
        let soul = "";
        let pastLessons = "";
        let strengths = "";

        switch (lifePath) {
            case 1:
                title = "Единица — Лидер, инициатор";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать эго. В прошлых жизнях вы могли быть диктатором, тираном, тем, кто подавлял других ради власти. 
                    Ваша миссия — научиться вести, не подавляя. Не командовать, а вдохновлять. Не требовать, а предлагать. 
                    Карма 1 — научиться быть сильным, не унижая других.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — инициатор. Ваша задача — начинать новые проекты, быть первым, открывать путь. 
                    Но вы не должны доводить всё до конца — это не ваша роль. Ваша сила — в смелости первого шага.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были королём, воином, захватчиком. Вы привыкли, что все подчиняются. Сейчас вы должны пройти урок: 
                    "Сила — не в власти, а в способности отпустить контроль".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Сильный характер, решительность, лидерство.<br>
                    <strong>−</strong> Склонность к эгоизму, одиночеству, конфликтам. Может быть "я знаю лучше всех".</span>
                `;
                break;

            case 2:
                title = "Двойка — Миротворец, чувствительный";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать энергию. В прошлых жизнях вы теряли её в конфликтах, ссорах, молчаливом страдании. 
                    Ваша миссия — научиться выражать чувства без вреда. Не быть "жертвой", не манипулировать слабостью.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — тот, кто соединяет. Вы чувствуете настроение, налаживаете контакт, снимаете напряжение. 
                    Ваша сила — в дипломатии, а не в борьбе.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были той, кого использовали. Слабой, зависимой, молчаливой. Сейчас вы должны пройти урок: 
                    "Я имею право на свою энергию. Я могу сказать 'нет'".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Чувствительность, интуиция, умение слушать.<br>
                    <strong>−</strong> Склонность к пассивной агрессии, страх конфликта, потеря себя в других.</span>
                `;
                break;

            case 3:
                title = "Тройка — Творец, артист";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать маски. В прошлых жизнях вы жили в иллюзиях, играли роли, скрывали истинное "я". 
                    Ваша миссия — быть собой. Не бояться показаться "неидеальным".</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — творец. Ваша задача — выражать себя через слово, образ, движение. 
                    Вы не для рутины, а для вдохновения.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были актёром, лжецом, тем, кто жил для других. Сейчас вы должны пройти урок: 
                    "Правда — это свобода. Я могу быть настоящим".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Талант, харизма, обаяние.<br>
                    <strong>−</strong> Склонность к пустым разговорам, неусидчивости, страху пустоты.</span>
                `;
                break;

            case 4:
                title = "Четвёрка — Труженик, строитель";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать тело. В прошлых жизнях вы могли его истощать, не ценить, или страдать от болезней. 
                    Ваша миссия — научиться уважать физическую форму. Слушать тело, а не гнать его.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — основа. Ваша задача — создавать порядок, стабильность, дом. 
                    Вы не для риска, а для надёжности.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были рабом, крестьянином, тем, кого эксплуатировали. Сейчас вы должны пройти урок: 
                    "Я имею право на отдых. Труд — не наказание".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Надёжность, трудолюбие, практичность.<br>
                    <strong>−</strong> Склонность к рутине, страху перемен, жёсткости.</span>
                `;
                break;

            case 5:
                title = "Пятёрка — Свобода, перемены";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать страсть. В прошлых жизнях вы были зависимы: от любви, денег, власти, азарта. 
                    Ваша миссия — научиться быть свободным. Не от мира, а в нём.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — исследователь. Ваша задача — пробовать, менять, открывать. 
                    Вы не для стабильности, а для движения.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были беглецом, бунтарём, тем, кто не мог остановиться. Сейчас вы должны пройти урок: 
                    "Свобода — не в бегстве, а в выборе".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Адаптивность, любопытство, харизма.<br>
                    <strong>−</strong> Склонность к зависимостям, импульсивности, непостоянству.</span>
                `;
                break;

            case 6:
                title = "Шестёрка — Хранитель семьи";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать жертвенность. В прошлых жизнях вы жертвовали собой ради других. 
                    Ваша миссия — научиться любить без привязок. Не спасать, а позволять расти.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — тот, кто держит семью. Вы помните всех, звоните, прощаете. 
                    Но вы не должны быть "спасателем". Иногда нужно позволить упасть.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были матерью, женой, жрицей — тем, кто отдавал всё. Сейчас вы должны пройти урок: 
                    "Я важна. Моя жизнь — тоже ценна".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Забота, ответственность, любовь.<br>
                    <strong>−</strong> Склонность к жертвенности, контролю, эмоциональным привязкам.</span>
                `;
                break;

            case 7:
                title = "Семёрка — Искатель истины";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать одиночество. В прошлых жизнях вас предавали, вы страдали без причины. 
                    Ваша миссия — научиться доверять жизни. Удача не дана — её нужно заслужить.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — исследователь тонкого мира. Ваша задача — искать истину, проникать в глубины. 
                    Вы не для суеты, а для тишины.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были отшельником, жертвой, тем, кого "сглазили". Сейчас вы должны пройти урок: 
                    "Я защищён. Вселенная на моей стороне".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Интуиция, мудрость, духовность.<br>
                    <strong>−</strong> Склонность к пессимизму, страху, изоляции.</span>
                `;
                break;

            case 8:
                title = "Восьмёрка — Власть, деньги";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать долг. В прошлых жизнях вы не платили по обещаниям, или наоборот — платили страданием. 
                    Ваша миссия — научиться быть ответственным, не жертвуя собой.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — управленец. Ваша задача — строить систему, управлять, быть сильным. 
                    Но сила — не в контроле, а в справедливости.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были судьёй, банкиром, тем, кто решал судьбы. Сейчас вы должны пройти урок: 
                    "Власть — не для себя, а для других".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Организация, сила, целеустремлённость.<br>
                    <strong>−</strong> Склонность к жёсткости, страху бедности, чувству долга.</span>
                `;
                break;

            case 9:
                title = "Девятка — Гуманизм, прощение";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать незавершённое. В прошлых жизнях вы не прощали, не отпускали, уходили с обидой. 
                    Ваша миссия — научиться прощать. Не ради других, а ради себя.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — тот, кто завершает. Ваша задача — закрывать циклы, прощаться, освобождать. 
                    Вы не для начала, а для завершения.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были тем, кого предали. Сейчас вы должны пройти урок: 
                    "Я могу отпустить. Прошлое не владеет мной".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Щедрость, сострадание, мудрость.<br>
                    <strong>−</strong> Склонность к жертвенности, обиде, уходу.</span>
                `;
                break;

            case 11:
                title = "Одиннадцать — Пробуждение";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать свет и тьму. В прошлых жизнях вы были проводником, но использовали силу для контроля. 
                    Ваша миссия — нести свет, не подавляя других.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — пробуждённый. Ваша задача — вести других к свету. 
                    Но вы не должны быть "спасителем". Каждый идёт своим путём.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были пророком, жрецом, учителем. Сейчас вы должны пройти урок: 
                    "Я не должен решать за всех. Пусть каждый найдёт свой путь".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Интуиция, вдохновение, миссия.<br>
                    <strong>−</strong> Склонность к идеализму, разочарованию, одиночеству.</span>
                `;
                break;

            case 22:
                title = "Двадцать два — Мастер";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать силу. В прошлых жизнях вы были тираном, манипулятором, тем, кто ломал других. 
                    Ваша миссия — научиться использовать силу для служения, а не для контроля.</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — мастер. У вас огромная сила: исцелять, видеть, влиять. 
                    Но вы должны использовать её, чтобы освобождать, а не привязывать.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были королём, магом, диктатором. Сейчас вы должны пройти урок: 
                    "Сила — не для власти, а для помощи".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Сила, воля, талант.<br>
                    <strong>−</strong> Склонность к контролю, страху, манипуляциям.</span>
                `;
                break;

            case 33:
                title = "Тридцать три — Учитель";
                karma = `
                    <strong style="color:#b18da0;">Кармические задачи:</strong><br>
                    <span style="color:#fff;">Вы пришли с задачей проработать жертву ради других. В прошлых жизнях вы отдавали всё, не заботясь о себе. 
                    Ваша миссия — нести любовь, не разрушая себя. Вы не должны страдать ради "блага".</span>
                `;
                soul = `
                    <strong style="color:#b18da0;">Программа души:</strong><br>
                    <span style="color:#fff;">Вы — учитель человечества. Ваша задача — нести свет, любовь, исцеление. 
                    Но вы не должны быть "жертвой ради мира". Вы имеете право на счастье.</span>
                `;
                pastLessons = `
                    <strong style="color:#b18da0;">Уроки из прошлых жизней:</strong><br>
                    <span style="color:#fff;">Вы были жрицей, матерью, святой — тем, кто страдал ради других. Сейчас вы должны пройти урок: 
                    "Я могу любить, не страдая. Я могу помогать, не теряя себя".</span>
                `;
                strengths = `
                    <strong style="color:#b18da0;">Сильные и слабые стороны:</strong><br>
                    <span style="color:#fff;"><strong>+</strong> Любовь, сострадание, миссия.<br>
                    <strong>−</strong> Склонность к жертвенности, эмоциональному выгоранию, самопожертвованию.</span>
                `;
                break;

            default:
                title = "Число не определено";
                karma = `<strong style="color:#b18da0;">Кармические задачи:</strong><br><span style="color:#fff;">Не удалось определить число. Проверьте дату.</span>`;
                soul = `<strong style="color:#b18da0;">Программа души:</strong><br><span style="color:#fff;">Проверьте корректность ввода.</span>`;
                pastLessons = "";
                strengths = "";
        }

        // Формируем результат
        resultDiv.innerHTML = `
            <h3 style="color:#b18da0; margin-bottom: 15px;">${title}</h3>
            ${karma}
            ${soul}
            ${pastLessons}
            ${strengths}
        `;
        resultDiv.style.display = "block";
        resultDiv.scrollTop = 0;
    });
});