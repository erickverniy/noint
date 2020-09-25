const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class FapCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'fap',
            group: 'fun',
            memberName: 'fap',
            description: 'F A P',
            
        });    
	}

    run(msg) { 
    	msg.reply("Okay stop that, It's disgusting. Go somewhere else")
    }
};