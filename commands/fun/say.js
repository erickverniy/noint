const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class SayCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'fun',
            memberName: 'say',
            description: 'Will say anything you want!',
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string'
                }
            ]
        });    
	}
  hasPermission(msg) {
		return this.client.isOwner(msg.author) || msg.member.hasPermission('MANAGE_MESSAGES');
	}

    run(msg, args) {
        const { text } = args;
        msg.delete();
        return msg.say(`\u180E${text}`);
    }
};