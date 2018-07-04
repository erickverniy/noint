const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class Waifu2Command extends Command {
    constructor(client) {
        super(client, {
            name: 'user-waifu',
            group: 'fun',
            memberName: 'user-waifu',
            description: 'Rate your Waifu(user)!',
            args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who is your waifu(user)?',
					type: 'member'
				}
            ]
        });    
    }

    run(msg, args) {
      const member = args.member;
        const user = member.user;
        //const { text } = args;
        const rate = Math.floor(Math.random() * 12);

        msg.say("I would rate your waifu(user) " + '`' + user.username + '` ' + rate + '/10');
    }
};