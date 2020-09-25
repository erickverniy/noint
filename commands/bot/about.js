const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const client = new Commando.Client();
const { stripIndents } = require('common-tags');

module.exports = class AboutCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            aliases: ["bot"],
            group: 'bot',
            memberName: 'about',
            description: 'About Yue',
           
        });    
    }

    run(msg, args, callback) {
        return msg.embed({
            color: 3447003,
            description: '**About Yue**',
            fields: [
                {
                    name: 'Name',
                    value: 'Yue',
                    inline: false
                },
              {
                    name: 'Age',
                    value: '323 Years Old',
                    inline: false
                },
                {
                    name: 'info',
                    value: stripIndents` Named after the Female protag of Arifureta Light novel Series.
                    `,
                    inline: false
                }
            ],
            
        });
    }
};