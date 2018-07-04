const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const client = new Commando.Client();

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
                    name: 'name',
                    value: 'Yue',
                    inline: false
                },
                {
                    name: 'Stats',
                    value: stripIndents`
                    • Lv    82
                    • Strength  220
                    • Vitality  450
                    • Resist    100
                    • Agility   220
                    • Magic 9180
                    • Magic R.  9320
                    • Job Class Sorceress (Miko)
                    • Title(s) Vampire Noble
                    `,
                    inline: false
                }
            ],
            
        });
    }
};