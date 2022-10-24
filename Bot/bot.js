const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.REACT_APP_TG_TOKEN);
const link = '';

bot.start((ctx) => ctx.reply(`
Добро пожаловать! Я – телеграм-бот магазина itea. Чтобы заказать чай, нажмите на кнопку в нижней части экрана 😊
`), { reply_markup: { keyboard: [[{ text: 'Посмотреть каталог', web_app: link }]] } });
bot.launch();