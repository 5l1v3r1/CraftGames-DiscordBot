module.exports = async bot => {
    console.log('Bot iniciado com ' + bot.users.size + ' usuários, em ' + bot.channels.size + ' canais de ' + bot.guilds.size + ' servidores.');
    bot.user.setActivity('Assista minha live! ', {type: 'STREAMING', url: 'https://twitch.tv/reddyyz'});    
}