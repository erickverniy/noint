const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class WarnCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'warn',
            group: 'bot',
            memberName: 'warn',
            description: 'warn a user',
            args: [ 
              { key: 'user', 
               prompt: 'Which user do you want to warn?', 
               type: 'user' }, 
            { key: 
             'content', 
             prompt: 'why do you want to warn this user?', 
             type: 'string' }],
             guildOnly: true
        });    
	}

	hasPermission(msg) {
		return this.client.isOwner(msg.author) || msg.member.hasPermission('MANAGE_GUILD');}

    run(msg, { user, content }) { user.send("You have been warned for " + content);
    msg.reply("Warned " + user.username + " for " + content)
    }
};