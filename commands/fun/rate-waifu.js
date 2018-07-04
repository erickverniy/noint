const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class WaifuCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rate-waifu',
            group: 'fun',
            memberName: 'rate-waifu',
            description: 'Rate your Waifu!',
            args: [
                {
                    key: 'text',
                    prompt: 'Which Waifu do you want to rate?',
                    type: 'string'
                }
            ]
        });    
    }

    run(msg, args) {
        const { text } = args;
        const rate = Math.floor(Math.random() * 12);

        msg.say("I would rate your waifu " + '`' + text + '` ' + rate + '/10');
    }
};