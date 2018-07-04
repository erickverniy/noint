const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class DoubleSlapCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "double-slap",
            aliases: ['slap', 'multi-slap'],
            group: "image",
            memberName: "double-slap",
            description: "Slap someone more than once!",
            args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who do want to slap?',
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
        .setImage("https://i.imgur.com/6mOFy3v.gif")
        .setDescription(message.author.username + " used double slap against " + user.username + hit[Math.floor(Math.random() * hit.length)]);
        message.channel.send({embed});
    

    }
}

var hit = [
    " Hits 1 time!",
    " Hits 2 times!",
    " Hits 3 times!",
    " Hits 4 times!",
    " Hits 5 times!",
    " Hits 6 times!",
]

module.exports = DoubleSlapCommand