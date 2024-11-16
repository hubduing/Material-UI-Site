const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Функция для чтения пользователей из файла
const readUsersFromFile = () => {
  const data = fs.readFileSync('users.json');
  return JSON.parse(data);
};

// Функция для записи пользователей в файл
const writeUsersToFile = (users) => {
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

// Маршрут регистрации
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();

  const existingUser  = users.find(user => user.email === email);
  if (existingUser ) {
    return res.status(400).json({ error: 'Пользователь уже существует' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = { email, password: hashedPassword };
    users.push(newUser );
    writeUsersToFile(users);
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
  }
});

// Маршрут входа в систему
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();

  const existingUser  = users.find(user => user.email === email);
  if (!existingUser ) {
    return res.status(400).json({ error: 'Неверный email или пароль' });
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser .password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Неверный email или пароль' });
  }

  const token = jwt.sign({ email: existingUser .email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
});

// Запуск сервера
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
  });
}

module.exports = app; // Экспортируем приложение для тестирования
