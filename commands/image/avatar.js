const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const client = new Commando.Client
class AvatarCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "avatar",
            group: "image",
            memberName: "avatar",
            description: "Gives you the url of other user\'s avatar!",
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'who\'s avatar do you want to see?',
                    type: 'member'
                }
            ]
        });
    }

    async run(args, message, msg) {
    const member = args.member
		const user = member.user
		return msg.embed({
            color: 3447003,
            description: '**About Yue**',
            fields: [
                {
                    name: user.username + '\'s' + 'avatar',
                    value: user.avatarURL,
                    inline: false
                }
            ],
            
        });
    }
}

module.exports = AvatarCommand