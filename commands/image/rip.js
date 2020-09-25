const Commando = require('discord.js-commando');
const client = new Commando.Client();
const Canvas = require('canvas');
const snek = require('snekfetch');
module.exports = class RIPCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'rip',
            group: 'image',
            examples: ['y!rip [content]'],
            memberName: 'rip',
            description: 'rip',
          args: [
                {
                    key: 'text',
                    prompt: 'RIP?',
                    type: 'string'
                }
            ]
        });    
    }

    run(msg, args) {
      const { text } = args;
      if (text.length > 12) {
        msg.reply('The text exceeded the maximum number of characters allowed. Maximum number of charachers is 12')} else {
        snek.get("http://cliparts.co/cliparts/pi7/8ok/pi78okjMT.png").then(r => {
          const canvas = new Canvas(504, 594);
          const ctx = canvas.getContext('2d');
          const img_bg = new Canvas.Image();
          img_bg.onload = function () {
            ctx.drawImage(img_bg, 0, 0, 504, 594);
            ctx.font = "bold 50px Arial";
            args = text;
            ctx.fillText(args, 237 - ctx.measureText(args).width / 2 , 330);
            msg.channel.send("", {file: {attachment:canvas.toBuffer()}});
          };
          img_bg.src = r.body;
        });
      }
      }
};