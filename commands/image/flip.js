const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class FlipCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "flip",
            group: "image",
            memberName: "flip",
            description: "Flips a table!"
        });
    }

    async run(message, args) {
        const embed = new RichEmbed()
        .setImage("https://i.imgur.com/0N6PmDW.gif")
        .addField("(╯°□°）╯︵ ┻━┻")
        message.channel.send({embed});
    }
}

module.exports = FlipCommand