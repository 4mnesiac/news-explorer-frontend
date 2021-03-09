# News Explorer Frontend

## Ссылка на проект в gh-pages

[https://4mnesiac.github.io/news-explorer-frontend/pages/index.html](https://4mnesiac.github.io/news-explorer-frontend/pages/index.html)
[http://nhance.tk/](http://nhance.tk/)

## Описание

Клиентская часть приложения "News Explorer". Реализовано взаимодействие с API поиска новостей. Реализован функционал авторизации, сохранения статей в личном кабинете.

Сборка с помощью Webpack осуществляется запуском скриптов `npm run build`, версия для разработки `npm run dev`.

Главное API расположено в отдельном [репозитории](https://github.com/4mnesiac/news-explorer).

Адрес live-сервера:

- [https://nhance.tk/](https://nhance.tk/)
- Запросы к API: [https://api.nhance.tk/](https://api.nhance.tk/)
- IP adress: [213.189.218.106](213.189.218.106)

# Стек

<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" title="html5" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" title="css3" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" title="javascript" width="40" height="40"/></a>
  <a href="https://webpack.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a>

# Версии

**v.1.0.0** - инициализация проекта;

**v.1.0.1** - формирование БЭМ структуры;

**v.2.0.1** - внесены следующие изменения:

- Сверстаны все необходимые блоки;

- Настроен Webpack;

- Проведена адаптация под мобильные устройства;

- Написаны JS утилиты для облегчения код-ревью;

- Оптимизированы изображения;

- Стилизирована микроанимация кнопок, форм.

**v.2.0.2** - обновлены пути для изображений, исправлены опечатки в верстке;

**v.3.0.1** - добавлены API, JS-функционал:

- реализован модульный код по БЭМ;

- асинхронные GET- и POST-запросы к API;

- карточки с новостями добавляются в DOM из JS-кода;

- реализована обработка ошибок;

- прелоудер крутится, пока от сервера идёт ответ;

- клик по карточке переводит на статью на сайте издания;

- данные в форме валидируются и обрабатываются;

**v.3.0.2** - деплой на gh-pages, исправление мелких ошибок;

**v.3.0.3** - исправлена ошибка доступа к главному API;

**v.3.0.4** - добавлена валидация формы поиска новостей;

**v.3.0.5** - устранена ошибка доступа к API;

**v.3.0.6** - обновлена информация об авторе;

**v.3.0.7** - изменен адрес сервера API, проведен аудит зависимостей.
