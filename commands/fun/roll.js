const Commando = require('discord.js-commando');
class DiceRollCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: "roll",
            group: "fun",
            memberName: "roll",
            description: "Rolls a die",
            throttling: {
        usages: 1,
        duration: 10000
    }
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1
        message.reply("You rolled a " + roll);
    }
}

module.exports = DiceRollCommand