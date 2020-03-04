exports.run = (bot,message,args) => {
    if(!args || args.length < 1){
        return message.reply("⚠️ Escreva o comando que deseja dar reload!");
    }
    
    const commandName = args[0];

    delete require.cache[require.resolve(`./${commandName}.js`)];
    bot.commands.delete(commandName);
    message.reply(`✔️ O comando ${commandName} foi descarregado com sucesso!`);
}