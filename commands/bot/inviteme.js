const Commando = require('discord.js-commando');
class InviteMeCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "inviteme",
            group: "bot",
            memberName: "inviteme",
            description: "Gives link to invite this bot to your server!"
        });
    }

    async run(message, args) {
        message.reply("https://discordapp.com/api/oauth2/authorize?client_id=463955524438720523&permissions=8&scope=bot");
    }
}

module.exports = InviteMeCommand