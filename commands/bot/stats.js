const Commando = require('discord.js-commando');
const moment = require('moment');
require('moment-duration-format');
const { stripIndents } = require('common-tags');
const client = new Commando.Client({
    owner: '193626196401979392',
    commandPrefix: 'e@'
});

module.exports = class StatusCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'stats',
            group: 'bot',
            memberName: 'stats',
            description: 'Bot Status',
           
        });    
    }

    run(msg) {
		return msg.embed({
			color: 3447003,
			description: '**Yue\'s Status Plate**',
			fields: [
				{
					name: 'Bot Information',
					value: stripIndents`
					• Servers: ${this.client.guilds.size}
					• Channels: ${this.client.channels.size}
					• Users: ${this.client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}
					`,
					inline: true
				},
        {
					name: 'Uptime',
					value: moment.duration(this.client.uptime)
						.format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]'),
					inline: true
				},
				{
					name: 'Version',
					value: `1.0`,
					inline: false
				}
			],
			
		});
	}
};
