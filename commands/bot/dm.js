const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class DMCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'bot',
            memberName: 'dm',
            description: 'DM a user',
            args: [ 
              { key: 'user', 
               prompt: 'Which user do you want to send the DM to?', 
                     type: 'user' }, 
            { key: 
             'content', 
             prompt: 'What would you like the content of the message to be?', 
             type: 'string' } ]
        });    
	}

    run(msg, { user, content }) { return user.send(content);
    }
};