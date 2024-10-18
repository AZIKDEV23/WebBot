// const { Telegraf } = require('telegraf');
const mineflayer = require('mineflayer');

// Telegram bot tokeni va boshqa parametrlarni buyruq qatoridan olish
// const telegramToken = '7572951312:AAGd1r0kCw3u3K7jQXU-J4RRy5qZz2xlzK8'; // Bot tokenini BotFather-dan oling
// const groupId = '@MineflayerBotChat'; // Telegram guruh ID
const host = 'AZIKDEV23.aternos.me'; // Minecraft server IP manzili
const port = 33873; // Minecraft server porti
const username = 'telegram'; // Minecraft botining ismi
const password = ''; // Agar kerak bo'lsa, parol

// Telegram botini yaratish
// const telegram = new Telegraf(telegramToken);

// Minecraft botini yaratish
const bot = mineflayer.createBot({
  host: host,
  port: port,
  username: username,
  password: password
});

// // Telegram botiga kelgan xabarlarni qabul qilish
// telegram.on('text', async (ctx) => {
//   // Xabar belgilangan guruhdan kelganligini tekshirish
//   if (ctx.update.message.chat.id.toString() === groupId) {
//     // Xabarni Minecraft serveriga yuborish
//     bot.chat(`${ctx.update.message.from.first_name}${ctx.update.message.from.last_name}: ${ctx.update.message.text}`);
//   }
// });

// // Minecraft serveridagi xabarlarni Telegram guruhiga yuborish
// bot.on('chat', (username, message) => {
//   // Bot o'z xabarlarini yubormasligi uchun tekshirish
//   if (username === bot.username) return;
//   telegram.telegram.sendMessage(groupId, username + ': ' + message);
// });

// // Telegram botini ishga tushirish
// telegram.launch();
