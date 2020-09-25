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
      var answer = [
            "As I see it, yes",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don’t count on it",
            "It is certain",
            "It is decidedly so",
            "Most likely",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Outlook good",
            "Reply hazy, try again",
            "Signs point to yes",
            "Very doubtful",
            "Without a doubt",
            "Yes",
            "Yes – definitely",
            "You may rely on it"
        ]

        const { text } = args;
        if(text === "who is the pedo?" || text === "who is the pedophile?") {
          msg.say("@Alter(m)#5722 is the pedo")
        } else {  msg.say("`" + text + "`" + " " + answer[Math.floor(Math.random() * answer.length)] + "," + " " + msg.author.username);
        }
    }
};