const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Mig-Bot is ready!');
});

client.on('message', message => {
    if (message.content === 'mig!hosters') {
    	message.reply('Loltrolol55, Derpy and Farid');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!discord') {
    	message.reply('https://discord.gg/gVWTe6R MigServer Discord');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!creator') {
    	message.reply('Brenth#4650 Creator Of The Bot');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!ip') {
    	message.reply('IP: migserver.mcnetwork.me');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!apply') {
    	message.reply('Application: https://docs.google.com/forms/d/e/1FAIpQLSdAcbc6iCUbI_YnKiMAKwXVxl87nuDJFb5WbA_Mutthrw4BDw/viewform');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!tag') {
    	message.reply('Hosters Discord Tags: loltrolol55#7843, Derpy#6522 and 𝓕𝓐𝓡𝓘𝓓𝓝𝓘𝓖𝓔𝓜#7296');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!info') {
    	message.reply('Info: I am Mig-Bot I am not a MODERATION Bot I am a multi-purpose bot of the MigServer discord server. **MigServer** is a Minecraft and Discord server filled with respectful, appreciative and patronative staff members and members. To apply type mig!apply for the ip type mig!ip. The server has exciting ranks for you to apply with and earn with, every person here on MigServer always I do mean always, THE BEST! And if you havent already, read the rules!');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!help') {
    	message.reply('[1] mig!info [2] mig!tag [3] mig!creator [4] mig!hosters [5] mig!discord [6] mig!apply [7] mig!ip [8] mig!ranks [9] mig!store [10] mig!website [11] mig!ping [12] mig!bing');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!ranks') {
    	message.reply('HOSTER, DEV-MANAGER, HEAD-ADMIN, ADMIN, ULTRA, STAFF, BOT-MANAGER, Support Team, MVP+, DEVELOPER, MOD, T-MOD, BUILDER, YOUTUBER, MVP++, MVP, DONATOR, MEMBER, BOTS, MINECRAFT-BOTS, MUSIC-BOTS');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!website') {
    	message.reply('**SOON**');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!store') {
    	message.reply('**SOON**');
  	}
});

client.on('message', message => {
    if (message.content === 'mig!ping') {
    	message.reply('**Pong!**');
  	}
});


client.on('message', message => {
    if (message.content === 'mig!bing') {
    	message.reply('**Bong!**');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
