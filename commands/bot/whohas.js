const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class WhoHasCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'whohas',
            aliases: ['whois', 'who'],
            group: 'bot',
            memberName: 'whohas',
            description: 'Gives a list of member of who has the given role',
            args: [ 
              { key: 'role', 
               prompt: 'Who has this role?', 
                type: 'role' }]
        });    
	}

    run(msg, args) { 
        var role = args.role.name
        var id = msg.guild.roles.find("name", role).id
        if (msg.guild.roles.get(id).members.map(m=>m.user.username).join(', ').length > 1024) {
        msg.reply('The list is too long. Sorry I cannot display it')} else {
        }
        msg.embed({
            color: 3447003,
            description: 'Requested by ' + msg.author.username,
            fields: [
                {
                    name: 'Member list',
                    value: msg.guild.roles.get(id).members.map(m=>m.user.username).join(', '),
                    inline: true
            }]
            
        }); 
      //msg.reply(msg.guild.roles.get(id).size);
    }
};