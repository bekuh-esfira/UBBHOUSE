const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const accountSid = 'LQSB8H1KZ9JE3VLAV3XKNWGN'; 
const authToken = 'your_twilio_auth_token'; 
const client = new twilio(accountSid, authToken);

const users = [];

app.post('/api/register', async (req, res) => {
  const { phone, password } = req.body;

  if (!/\+7[0-9]{10}/.test(phone)) {
    return res.status(400).json({ message: 'Неверный формат номера телефона' });
  }

  if (users.find((user) => user.phone === phone)) {
    return res.status(400).json({ message: 'Пользователь уже существует' });
  }

  try {
    await client.messages.create({
      body: 'Добро пожаловать! Вы успешно зарегистрированы.',
      from: 'your_twilio_phone_number',
      to: phone,
    });

    users.push({ phone, password });
    res.status(200).json({ message: 'Регистрация успешна' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка отправки SMS' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});