const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class LewdCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "lewd",
            group: "image",
            memberName: "lewd",
            description: "Lewd ( ͡° ͜ʖ ͡°)"
        });
    }

    async run(message, args) {const embed = new RichEmbed()
        .setImage("https://i.imgur.com/cqiyR1L.gif")
        message.channel.send({embed});
    }
}

module.exports = LewdCommand