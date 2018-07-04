const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class ballCommand extends Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            aliases: ["ask"],
            group: 'fun',
            memberName: '8ball',
            description: 'Ask Anything!',
            args: [
                {
                    key: 'text',
                    prompt: 'What do you want to ask?',
                    type: 'string'
                }
            ]
        });    
    }

    run(msg, args) {
        const { text } = args;
        var answer = [
            "No",
            "Yes",
            "Ask someone else",
            "Ask Erick",
            "Without a doubt",
            "Error Answer not Found",
            "There is always a possibility",
            "Don't give up",
            "Have you tried turing it off and on again?",
        ]

        msg.say("`" + text + "`" + " " + answer[Math.floor(Math.random() * answer.length)] + "," + " " + msg.author.username);
    }
};