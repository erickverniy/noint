const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class LolipoliceCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "loli-police",
            group: "loli",
            memberName: "loli-police",
            description: "call 911 there is a lolicon here"
        });
    }

    async run(message, args) {const embed = new RichEmbed()
        .setImage("https://i.imgur.com/Cez6Gy4.jpg")
        message.channel.send({embed});
    }
}

module.exports = LolipoliceCommand