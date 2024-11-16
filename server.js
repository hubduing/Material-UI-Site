const express = require('express');
const bcrypt = require('bcrypt');
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

// Регистрация
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();

  // Проверка, существует ли пользователь
  const existingUser  = users.find(user => user.email === email);
  if (existingUser ) {
    return res.status(400).json({ error: 'User  already exists' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = { email, password: hashedPassword };
    users.push(newUser );
    writeUsersToFile(users);
    res.status(201).json({ message: 'User  registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Вход
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromFile();

  const user = users.find(user => user.email === email);
  if (!user) return res.status(400).json({ error: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
