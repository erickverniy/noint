const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const client = new Commando.Client();

module.exports = class ReportCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'report',
            group: 'bot',
            memberName: 'report',
            description: 'Report Bugs and Errors to Erick',
            args: [
                {
                    key: 'text',
                    prompt: 'What do you want to report to Erick?',
                    type: 'string'
                }
            ]
           
        });    
    }

    run(msg, args, callback) {const { text } = args;
    const embed = new RichEmbed()
    .setAuthor(msg.author.username, msg.author.displayAvatarURL)
    .setDescription(text)
    .setFooter("send from " + msg.channel.id)
    this.client.channels.get('465447623831322654').send({embed})
    msg.reply("The report has been sent! Thank You");
    msg.delete();
    }
};
