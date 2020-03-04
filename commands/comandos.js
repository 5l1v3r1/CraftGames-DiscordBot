exports.run = async (bot,message,args) => {
	
	const embed = {
	  "title": "Comandos",
	  "description": "Aqui estão todos os comandos do servidor, e o uso de cada um.",
	  "color": 13632027,
	  "timestamp": "2020-03-02T23:05:32.092Z",
	  "fields": [
		{
		  "name": "!vips",
		  "value": "Exibe todos os vips, seus beneficios, preços e o link para comprar."
		}
	  ]
	};
	message.channel.send({embed});
}