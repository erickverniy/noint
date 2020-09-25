const Commando = require('discord.js-commando');
const client = new Commando.Client();
const Canvas = require('canvas');
const snek = require('snekfetch');
module.exports = class LoliConCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'lolicon',
            group: 'loli',
            memberName: 'lolicon',
            examples: ['y!lolicon [User]'],
            guildOnly: true,
            description: 'Am I a lolicon?',
          args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who is the lolicon?',
					type: 'member'
				}
			]
        });    
	}

    run(msg, args) {
      const member = args.member;
		const user = member.user;
      if (member.nickname == null) {var name = user.username} else 
      {var name = member.nickname}
        snek.get("https://i.imgur.com/9UkaSyd.jpg").then(r => {
          const canvas = Canvas.createCanvas(617, 319);
          //const canvas = new Canvas(617, 319);
          const ctx = canvas.getContext('2d');
          const img_bg = new Canvas.Image();
          img_bg.onload = function () {
            ctx.drawImage(img_bg, 0, 0, 617, 319);
            ctx.font = "bold 30px Arial";
            ctx.color = "white";
            args = name;
            ctx.fillText(args, 170 - ctx.measureText(args).width / 2, 250);
            msg.channel.send("", {file: {attachment:canvas.toBuffer()}});
          };
          img_bg.src = r.body;
        });
      }
};