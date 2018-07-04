const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class LoliconCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "lolicon",
            group: "loli",
            memberName: "lolicon",
            description: "A lolicon is near and it might be you!"
        });
    }

    async run(message, args) {const embed = new RichEmbed()
        .setImage("https://i.imgur.com/yUlUdXw.jpg")
        message.channel.send({embed});
    }
}

module.exports = LoliconCommand