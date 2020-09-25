const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class RemoveRoleCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'remove-role',
            group: 'bot',
            memberName: 'remove-role',
            guildOnly: true,
            description: 'Remove a role to a user',
          args: [
          {
          key: 'member',
          label: 'user',
          prompt: 'Who would you like to remove the role from?',
          type: 'member'
        },
        {
          key: 'role',
          label: 'role',
          prompt: 'What role would you like to remove?',
          type: 'role'
        }
      ]
        });    
  }
  hasPermission(msg) {
    return this.client.isOwner(msg.author) || msg.member.hasPermission('MANAGE_ROLES');
  }

    run(msg, args) {
      const role = args.role
      const member = args.member;
      const user = member.user;
      member.removeRole(role).then(msg.reply("I have removed the role " + role.name + " from " + user.username))
      }
};