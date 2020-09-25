const Commando = require('discord.js-commando');
const client = new Commando.Client();
const Canvas = require('canvas');
const snek = require('snekfetch');
module.exports = class AchievementCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'achievement',
            aliases: ['a','achieve'],
            group: 'image',
            examples: ['y!achievement [content]'],
            memberName: 'achievement',
            description: 'Generate a Minecraft Achievement',
          args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to put in your achievement?',
                    type: 'string'
                }
            ]
        });    
	}

    run(msg, args) {
      const { text } = args;
      if (text.length > 27) {
        msg.reply('The text exceeded the maximum number of characters allowed. Maximum number of charachers is 27')} else {
        snek.get("https://i.imgur.com/fztTtvm.png").then(r => {
          const canvas = Canvas.createCanvas(388, 64);
          //const canvas = new Canvas(388, 64);
          const ctx = canvas.getContext('2d');
          const img_bg = new Canvas.Image();
          img_bg.onload = function () {
            ctx.drawImage(img_bg, 0, 0, 388, 64);
            ctx.font = "20px Arial";
            args = text;
            ctx.fillStyle = "white";
            //ctx.textAlign = "center";
            ctx.fillText("          " + args, 170 - ctx.measureText(args).width /  30 , 52);
            msg.channel.send("", {file: {attachment:canvas.toBuffer()}});
          };
          img_bg.src = r.body;
        });
      }
      }
};