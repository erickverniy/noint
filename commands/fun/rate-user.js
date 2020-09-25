const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class RateUserCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rate-user',
            group: 'fun',
            guildOnly: true,
            memberName: 'user-waifu',
            description: 'Rate another member of the server!',
            args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who do you want to rate?',
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

        msg.say("I would rate " + '`' + user.username + '` ' + rate + '/10');
    }
};