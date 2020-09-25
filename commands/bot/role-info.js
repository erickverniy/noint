const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');

module.exports = class RoleInfoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'role-info',
			aliases: ['role', 'info-role'],
			group: 'bot',
			memberName: 'role-info',
			description: 'Gets information about a role.',
			examples: ['user-info @Erick#0230 ', 'user-info Erick'],
			guildOnly: true,

			args: [
				{
					key: 'role',
					label: 'role',
					prompt: 'What role would you like to snoop on?',
					type: 'role'
				}
			]
		});
	}

	async run(msg, args) {
		const roleinfo = msg.guild.roles.find("name", args.role.name)
		return msg.reply(stripIndents`
			Info on **${roleinfo.name}**

			**❯ Role Details**
			 • Name: ${roleinfo.name}
			 • ID: ${roleinfo.id}
			 • Position: ${roleinfo.position}
			 • Permissions: ${roleinfo.permissions}
			 • Mentionable: ${roleinfo.mentionable}
			 • Color: ${roleinfo.color}
		`);
	}
};
