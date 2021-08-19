const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Günaydın') {
    msg.reply('Sanada Günaydın Kanki');
  }
});

client.on('message', msg => {
    if (msg.content === 'VTC') {
      msg.reply('VTC Linkimiz https://truckersmp.com/vtc/48003');
    }
  });

client.login('ODc0MzI0MTIxNjc1MjY4MTc2.YRFTyg.LgWdW_pzk8uHCC0_ueTPAIgs80M');