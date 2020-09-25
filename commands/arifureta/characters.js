const Commando = require('discord.js-commando');
const client = new Commando.Client();
const { stripIndents } = require('common-tags');
module.exports = class CharactersCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'characters',
            group: 'arifureta',
            memberName: 'characters',
            description: 'Arifureta Character Informations (Taken from Arifureta Wiki)',
          args: [
                {
                    key: 'text',
                    prompt: 'Type the name of the character to see their info. Use `y!characters help` to see the list of available characters.',
                    type: 'string'
                }
            ]
        });    
	}

    run(msg, args) { 
        const { text } = args;
        if (text.toLowerCase() == "help") {msg.embed({
            color: 3447003,
            description: '**Characters**',
            fields: [
                {
                    name: 'List of Characters',
                    value: stripIndents`
                    • Hajime
                    • Yue
                    • Kaori
                    • Tio
                    • Shea
                    `,
                    inline: false
                },
                {
                    name: 'Usage',
                    value: stripIndents`
                    y!characters [Name of characters]
                    Example: y!characters hajime
                    `,
                    inline: false
                }
            ],
            
        })} else
            if (text.toLowerCase() == "hajime") {msg.embed({
            color: 3447003,
            description: '**Character Information - Hajime**',
            fields: [
                {
                    name: 'description',
                    value: stripIndents`
                    Hajime Nagumo is the main protagonist of the novel series Arifureta Shokugyou de Sekai Saikyou.
Being called "incompetent" and later betrayed by his classmates, Hajime falls into the abyss where his journey to become the strongest begins.
                    `,
                    inline: false
                },
                {
                    name: 'Biographical Information',
                    value: stripIndents`
                    Name:	Nagumo Hajime
                    Hair Color:	Black (Before Abyss)
                                White (Present)
                    Eye Color:	Brown (Before Abyss)
                                Red (Present)
                    Height:	165cm (Before Abyss)
                            175cm (Present)
                    Relatives:		Nagumo Shuu (Father)
                                  Nagumo Sumire (Mother)
                                  Yue (Wife)
                                  Shia Haulia (Wife)
                                  Tio Clarce (Wife)
                                  Kaori Shirasaki (Wife)
                                  Lemia (Wife)
                                  Yaegashi Shizuku (Wife)
                                  Hatayama Aiko (Wife)
                                  Liliana S. B. Heilig (Wife)
                                  Myuu (adopted daughter)
                    Status:	Alive
                    Race:	Human (Monsterized)
                    Affiliation:	Haulia Tribe (Boss)
                                  God's Apostle's (former)
                    `,
                    inline: false
                },
              {
                    name: 'Stats',
                    value: stripIndents`
                    Lv	 ???
                    Strength	12150+
                    Vitality	14250+
                    Resist	11870+
                    Agility	14550+
                    Magic	15980+
                    Magic R.	15980+
                    Job Class	Synergist (Transmutation Master)
                    Title(s)	Peerless Incompetent 
                    `,
                    inline: false
                }
            ],
            
        })} else
            if (text.toLowerCase() == "yue") {msg.embed({
            color: 3447003,
            description: '**Character Information - Yue**',
            fields: [
                {
                    name: 'description',
                    value: stripIndents`
                    Yue (ユエ, Yue) is a vampire who was imprisoned in the abyss. 
                    She was betrayed by her uncle and peers because of her monstrous magic and regeneration. 
                    She is Hajime's lover. 
                    Yue is one of the female protagonist's of the Arifureta series.
                    `,
                    inline: false
                },
                {
                    name: 'Biographical Information',
                    value: stripIndents`
                    Name:	Yue
                    Hair Color:	Blonde
                    Eye Color:	Red
                    Height:	140cm
                    Relatives:	Denreed Gardia Wesperitirio(Uncle)
                                Nagumo Hajime (Husband)
                    Status:	Alive
                    Race:	Vampire
                    Affiliation:	Hajime's Party
                    `,
                    inline: false
                },
              {
                    name: 'Stats',
                    value: stripIndents`
                    • Lv:    82
                    • Strength:  220
                    • Vitality:  450
                    • Resist:    100
                    • Agility:   220
                    • Magic: 9180
                    • Magic R.:  9320
                    • Job Class: Sorceress (Miko)
                    • Title(s): Vampire Noble
                    `,
                    inline: false
                }
            ],
            
        })} else
            if (text.toLowerCase() == "kaori") {msg.embed({
            color: 3447003,
            description: '**Character Information - Kaori Shirasaki**',
            fields: [
                {
                    name: 'description',
                    value: stripIndents`
                    Kaori Shirasaki is one of the main female protagonists of the series Arifureta. She admires Hajime for being strong willed. Realizing her love for Hajime after he fell into the abyss, she further pushed her resolve to become stronger in order to prevent it from ever happening again.
                    `,
                    inline: false
                },
                {
                    name: 'Biographical Information',
                    value: stripIndents`
                    Name:	Kaori Shirasaki
                    Hair Color:	Black
                    Eye Color: Brown
                    Height:	Unknown
                    Relatives:	Nagumo Hajime (Husband)
                    Status:	Alive
                    Race:	Human
                    `,
                    inline: false
                },
              {
                    name: 'Stats',
                    value: stripIndents`
                  Lv:	72
                  Strength:	280
                  Vitality:	460
                  Resist:	360
                  Agility:	1200
                  Magic:	1380
                  Magic R.:	1380
                  Job Class:	Healer
                  Title(s):	Saint
                    `,
                    inline: false
                }
            ],
            
        })} else
            if (text.toLowerCase() == "tio") {msg.embed({
            color: 3447003,
            description: '**Character Information - Tio Clarce*',
            fields: [
                {
                    name: 'description',
                    value: stripIndents`
                    Tio Clarce is a "pervert" with the main status of M but she is honest and the words this one speaketh are similar to the old legends. Tio is one of the female protagonist's of the Arifureta series. But somehow along the line, she became an all around pervert, like when after she spoon-fed Hajime she licked around the used spoon.`,
                    inline: false
                },
                {
                    name: 'Biographical Information',
                    value: stripIndents`
                    Name:	Tio Clarce
                    Hair Color:	Black
                    Eye Color: Golden
                    Height:	170cm
                    Relatives:	Nagumo Hajime (Husband)
                                Adol Clarce (Grandfather) 
                    Status:	Alive
                    Race:	Half-Dragon
                    Affiliation:	Hajime (Servant & Lover)
                    `,
                    inline: false
                },
              {
                    name: 'Stats',
                    value: stripIndents`
                  Lv	93
                  Strength	880 (+Dragon Form > 8800)
                  Vitality	1250 (+Dragon Form > 12500)
                  Resist	1250 (+Dragon Form > 12500)
                  Agility	700 (+Dragon Form > 7000)
                  Magic	4990
                  Magic R.	4620
                  Job Class	Guardian
                  Title(s)	(Not Known)
                    `,
                    inline: false
                }
            ],
            
        })} else
            if (text.toLowerCase() == "shia") {msg.embed({
            color: 3447003,
            description: '**Character Information -	Shia Haulia**',
            fields: [
                {
                    name: 'description',
                    value: stripIndents`
                    Shia has blue eyes and grey hair that is light blue in hue, She also has an attractive figure, boasting a large chest. Shia has rabbit ears atop her head.`,
                    inline: false
                },
                {
                    name: 'Biographical Information',
                    value: stripIndents`
                    Name:		Shia Haulia
                    Hair Color:	Blue-Grey
                    Eye Color:	Blue
                    Height:	unknown
                    Relatives:		Kam Haulia (Father)
                                  Nagumo Hajime (Husband)
                    Status:	Alive
                    Race:	Demi-Human (RabbitMan)
                    Affiliation:	Haulia Tribe
                    `,
                    inline: false
                },
              {
                    name: 'Stats',
                    value: stripIndents`
                      Lv:	48
                      Strength:	100 (+ up to 6120)
                      Vitality:	120 (+ up to 6140)
                      Resist:	100 (+ up to 6120)
                      Agility:	130 (+ up to 6160)
                      Magic:	3800
                      Magic R.:	4000
                      Job Class:	Diviner
                    `,
                    inline: false
                }
            ],
            
        })} else msg.reply('Not Found. use `y!characters help` to see the list of available characters');
    }
};