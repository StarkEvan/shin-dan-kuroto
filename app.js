const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on("ready", () => {
  
  console.log(`Bot has started.`); 
 
});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
    if (command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
