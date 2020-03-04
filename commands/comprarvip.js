exports.run = async (bot,message,args) => {
    const vips = ['Mvp','Guardian'];
    let vip = args[0];
    let vip_founded = false;
    for (i in vips){
        if(vips[i] == vip){
            vip_founded = true;
        }
    }
    if(vip_founded !== true){
        message.channel.send('⚠️ Faltando argumentos ou vip invalido!\n⚠️ Comando: !comprarvip <VIP>\n⚠️ Para ver todos os vips use: !vips');
    }
    
    if(vip == 'Mvp'){
        const embed = {
            "title": "Mvp",
            "description": "O melhor vip do servidor!",
            "color": 13632027,
            "fields": [
                {
                    "name": "Beneficios:",
                    "value": ":white_check_mark: Kit Vida Extra liberado\n:white_check_mark: Tag MvP\n"
                },
                {
                    "name": "Preços:",
                    "value": ":money_with_wings: Mensal: R$15,00\n:money_with_wings: Eterno: R$30,00"
                },
                {
                    "name": "Link",
                    "url": "https://twitch.tv/reddyyz"
                }
            ]
        };
        message.channel.send({embed});
    }
}