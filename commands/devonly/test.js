const Commando = require('discord.js-commando');
const client = new Commando.Client();
const Canvas = require('canvas');
const snek = require('snekfetch');
module.exports = class TestCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'devonly',
            memberName: 'test',
            guildOnly: true,
            description: 'For Developer use only',
          args: [
          {
          key: 'member',
          label: 'user',
          prompt: 'What user would you like to give the role?',
          type: 'member'
        },
				{
					key: 'role',
					label: 'role',
					prompt: 'Add role name',
					type: 'role'
				}
			]
        });    
	}
  hasPermission(msg) {
    return this.client.isOwner(msg.author);
  }

    run(msg, args) {
      const role = args.role
      const member = args.member;
      const user = member.user;
      member.addRole(role);
      }
};