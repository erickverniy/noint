const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class SayCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'nuke-code',
            group: 'fun',
            memberName: 'nuke-code',
            description: 'Will give ypu a random nuke code. Have fun!'
            
        });    
	}
  
	

    run(msg, args) {
        msg.reply("Here is your code: " + Math.floor(Math.random() * 304413) + " have fun!")
    }
};