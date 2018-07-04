const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class RipCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "rip",
            group: "image",
            memberName: "rip",
            description: "RIP",
        });
    }

    async run(message, args) {
        const embed = new RichEmbed()
        .setImage("https://i.imgur.com/oYnvwAi.jpg")
        message.channel.send({embed});
    }
}

module.exports = RipCommand