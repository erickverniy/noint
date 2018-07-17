const Commando = require('discord.js-commando');
var request = require('request');
var Decode = require('html-entities').AllHtmlEntities;
var decode = new Decode();
const client = new Commando.Client();
module.exports = class PunCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'pun',
            group: 'fun',
            memberName: 'pun',
            description: 'Random Pun',
        });    
	}

    run(msg, args) {
        request('http://www.punoftheday.com/cgi-bin/arandompun.pl', function(err, res, body) {
    if (err) msg.say(err);
    else {
      body = body.slice(16);
      body = body.slice(0, body.indexOf("'") - 6);
      msg.say(decode.decode(body));
    }
  });
    }
};