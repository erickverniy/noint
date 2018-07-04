const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class RoastCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "roast",
            group: "image",
            memberName: "roast",
            description: "Roast someone to death!",
            args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who do want to roast?',
					type: 'member'
				}
            ]
        });
    }

    async run(message, args) {
      const member = args.member;
        const user = member.user;
        //const { text } = args;
        const embed = new RichEmbed()
        .setImage("https://i.imgur.com/54Za8vD.gif")
        .setDescription(user.username + " has been roasted by " + message.author.username)
        message.channel.send({embed});

    }
}

module.exports = RoastCommand