const Commando = require('discord.js-commando');
class AvatarCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "avatar",
            group: "image",
            memberName: "avatar",
            description: "Gives you the url for your avatar!"
        });
    }

    async run(message, args) {
        message.reply(message.author.avatarURL);
    }
}

module.exports = AvatarCommand