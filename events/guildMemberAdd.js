module.exports = async (bot, member) => {
	
	const embed = {
	  "color": 13632027,
	  "timestamp": new Date(),
	  "footer": {
		"icon_url": bot.user.avatarURL,
		"text": "Data de entrada"
	  },
	  "author": {
		"name": member.user.username,
		"icon_url": member.user.avatarURL
	  },
	  "fields": [
		{
		  "name": "Bem vindo(a)",
		  "value": "Leia as <#684070713086574685> para não tomar KICK/BAN e sempre respeite as outras pessoas :sunglasses: "
		}
	  ]
	};
	member.guild.systemChannel.send({embed});
}