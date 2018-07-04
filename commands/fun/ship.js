const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class ShipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ship',
            group: 'fun',
            memberName: 'ship',
            description: 'S H I P them',
        });    
    }

    run(msg, args) {var love = Math.floor(Math.random() * 102);
        args = msg.content.split(' ');
    
    //msg.channel.send('Shipping ' + args[1] + ' with ' + args[2]);
    if (love >= 100 ) {
        var ship = 'Perfect Couple <3 <3'
    } else
    if (love >= 75) {
        var ship = 'Great Couple <3'
    } else
    if (love >= 50) {
        var ship = 'Not Bad. Just dont fight offen'
    } else
    if (love >= 25) {
        var ship = 'No Comment'
    } else
    if (love <= 24) {
        var ship = 'Rip'
    } 
    msg.embed({
        color: 15158332,
        description: "~Ship Analyze Result~",
        fields: [{
            name: "Shipped Persons",
            value: args[1] + " & " + args[2],
            inline: false
        },
        {
            name: "Ship Rating",
            value: love + "% " + ship,
            inline: false
        },

    ]
    })
} 

};