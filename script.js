// Получаем объект Telegram Web App
const tg = window.Telegram.WebApp;

// Ищем контейнер
const container = document.querySelector('.app-container');

// Отправляем уведомление о готовности
tg.ready();

// Функция для отправки данных в бота
function sendDataToBot(data) {
    tg.sendData(JSON.stringify(data));
}

// Функция для инициализации приложения
function initApp() {
    const initData = tg.initDataUnsafe;

    if (initData && initData.user) {
        const userData = {
            user_id: initData.user.id,
        };

        sendDataToBot({command: 'start', user_data: userData});
        container.innerHTML = `<p>User ID: ${initData.user.id}</p><p>Mini-App is Ready</p>`;
    } else {
         container.innerHTML = "<p>Mini-App failed to load.</p>";
    }
}

// Инициализируем приложение после загрузки страницы
window.onload = initApp;