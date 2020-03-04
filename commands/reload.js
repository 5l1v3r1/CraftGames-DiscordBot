exports.run = (bot, message, args) => {
    if (!args || args.length < 1)
      return message.reply("⚠️ Escreva o comando que deseja dar reload!");
  
      const commandName = args[0];
  
      if(!bot.commands.has(commandName)) {
        return message.reply("⚠️ Comando inexistente!");
      }
  
      delete require.cache[require.resolve(`./${commandName}.js`)];
  
      bot.commands.delete(commandName);
      const props = require(`./${commandName}.js`);
      bot.commands.set(commandName, props);
      message.reply(`✔️ O comando ${commandName} foi recarregado com sucesso!`);
  };