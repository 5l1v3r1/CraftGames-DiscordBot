exports.run = async (bot,message,args) => {

    const embed = {
        "title": "Vips",
        "description": "Aqui estão todos os vips do server, seus beneficios e preços.",
        "color": 13632027,
        "timestamp": "2020-03-02T23:05:32.092Z",
        "fields": [
            {
                "name": "MvP",
                "value": "Beneficios: \n:white_check_mark: Kit Vida Extra liberado\n:white_check_mark: Tag MvP\n\nPreços:\n:money_with_wings: Mensal: R$15,00\n:money_with_wings: Eterno: R$30,00\n\nLink: https://hotmart.com\n"
            },
            {
                "name": "Guardian",
                "value": "Beneficios: \n:white_check_mark: Kit Guardiao liberado\n:white_check_mark: Tag Guardian\n\nPreços:\n:money_with_wings: Mensal: R$15,00\n:money_with_wings: Eterno: R$30,00\n\nLink: https://hotmart.com\n"
            }
        ]
    };

    message.channel.send({embed});
}