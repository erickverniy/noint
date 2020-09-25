const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
class PatCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "pat",
            group: "image",
            memberName: "pat",
            description: "Pat someone!",
            args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who do want to pat?',
					type: 'member'
				}
            ]
        });
    }

    async run(message, args) {
        const member = args.member;
        const user = member.user;
        //const embed = new RichEmbed()
        if (user.username == "Yue") {
          const embed = new RichEmbed()
        .setFooter("Powered by Love")
        .setImage("https://i.imgur.com/xrGAEHu.jpg")
        .setDescription("I am Yue. First wife of the demon king shall accept this headpat!")
        message.channel.send({embed});
    } else {
      const embed = new RichEmbed()
        .setImage(pic[Math.floor(Math.random() * pic.length)])
        .setFooter("Powered by Love")
        .setDescription(message.author.username + " pats " + user.username)
        message.channel.send({embed});
    }
    

    }
}

var pic = [
    "https://i.imgur.com/Jf6X2Lc.gif",
    "https://i.imgur.com/rxV2mC7.jpg",
    "https://i.imgur.com/tZxViPu.gif",
    "https://i.imgur.com/XlRJQ2y.gif"
]

module.exports = PatCommand