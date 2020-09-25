const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class GiveRoleCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'give-role',
            group: 'bot',
            memberName: 'give-role',
            guildOnly: true,
            description: 'Give a role to a user',
          args: [
          {
          key: 'member',
          label: 'user',
          prompt: 'Who would you like to give the role?',
          type: 'member'
        },
        {
          key: 'role',
          label: 'role',
          prompt: 'What role would you like to give?',
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
      member.addRole(role).then(msg.reply("I have given the role " + role.name + " to " + user.username))
      }
};