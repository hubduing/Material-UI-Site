# Material-UI Site

Этот проект представляет собой личный сайт, созданный с использованием **JavaScript**, **React**, **Express** и **Material-UI**.

[Прямой просмотр](#)

Сайт разработан с учетом принципов Material Design с помощью библиотеки Material-UI, что обеспечивает современный и отзывчивый пользовательский интерфейс. Исходный код полностью покрыт автоматизированными тестами с использованием **Jest**, что гарантирует высокое качество и надежность.

## 🚀 Функциональность

Проект включает следующие функции:
- **Регистрация пользователей**: Позволяет новым пользователям создавать учетные записи.
- **Вход в систему**: Пользователи могут входить в систему с помощью своей электронной почты и пароля.
- **Аутентификация**: Использует JWT для обеспечения безопасности и управления сессиями.

Сайт размещен на **GitHub Pages**, а CI/CD процесс, созданный с помощью **GitHub Actions**, автоматически тестирует исходный код, генерирует отчет о покрытии и развертывает проект на GitHub Pages. Все эти задачи запускаются при событиях push или pull request в основной ветке.

## ⚙️ Конфигурация

Чтобы клонировать и запустить это приложение, вам необходимо установить **Git** и **Node.js** версии 10.16 или выше на вашем компьютере.

С помощью командной строки выполните следующие команды:

```bash
# Клонировать репозиторий
git clone <URL вашего репозитория>

# Перейти в директорию проекта
cd material-ui-site

# Установить зависимости
yarn install

# Запустить проект
yarn start

#🛠️ Используемые технологии
React: Библиотека для построения пользовательских интерфейсов.

Material-UI: Компоненты для React, реализующие принципы Material Design.

Node.js: Среда выполнения JavaScript на серверной стороне.

Express: Веб-фреймворк для Node.js, который упрощает создание серверных приложений.

bcrypt: Для хеширования паролей.

jsonwebtoken: Для аутентификации пользователей с помощью JWT.

cors: Middleware для управления кросс-доменных запросов.

dotenv: Для управления переменными окружения.

# Проект аутентификации

Этот проект представляет собой простое приложение для аутентификации пользователей с использованием **Node.js**, **Express**, и **React**. Он включает в себя функциональность регистрации и входа пользователей, а также компоненты интерфейса для взаимодействия с пользователем.

## 🚀 Функции API

### 1. Регистрация пользователя

**Endpoint:** `POST /api/register`

- **Описание:** Позволяет новому пользователю зарегистрироваться, передавая электронную почту и пароль. Если пользователь с такой электронной почтой уже существует, возвращается ошибка.
- **Тело запроса:** 
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```
- **Ответ:**
    - Успех: `201 Created` с сообщением о успешной регистрации.
    - Ошибка: `400 Bad Request`, если пользователь уже существует или произошла ошибка.

### 2. Вход пользователя

**Endpoint:** `POST /api/login`

- **Описание:** Позволяет пользователю войти в систему, передавая электронную почту и пароль. В случае успешной аутентификации возвращается JWT токен.
- **Тело запроса:** 
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```
- **Ответ:**
    - Успех: `200 OK` с токеном JWT.
    - Ошибка: `400 Bad Request`, если учетные данные неверны.

## ⚛️ Компонент AuthButtons

Компонент `AuthButtons` отвечает за отображение кнопок для входа и регистрации пользователей. Он использует Material-UI для создания интерфейса.

### Функции компонента:

1. **handleClickOpenLogin**: Открывает диалоговое окно для входа.
2. **handleCloseLogin**: Закрывает диалоговое окно для входа.
3. **handleLogout**: Выход из системы и удаление токена из локального хранилища.
4. **handleClickOpenSignup**: Открывает диалоговое окно для регистрации.
5. **handleCloseSignup**: Закрывает диалоговое окно для регистрации и сбрасывает поля ввода.
6. **validateEmail**: Проверяет, является ли электронная почта корректной.
7. **validatePassword**: Проверяет, соответствует ли пароль заданным критериям.
8. **validateLogin**: Проверяет корректность введенных данных перед входом.
9. **handleLogin**: Обрабатывает вход пользователя, отправляя запрос на сервер.
10. **handleSignup**: Обрабатывает регистрацию пользователя, отправляя запрос на сервер.
