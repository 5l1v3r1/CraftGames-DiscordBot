exports.run = (bot,message,args) => {
    if(!args || args.length <1){
        return message.reply("⚠️ Escreva o comando que deseja carregar!");
    }

    const commandName = args[0];

    const props = require(`./${commandName}.js`);
    bot.commands.set(commandName, props);
    console.log(`${commandName} carregado!`);
    message.reply(`✔️ O comando ${commandName} foi carregado com sucesso!`);
};