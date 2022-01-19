import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "gamble",
			aliases: ["gr"],
			description: "You can gamble. ",
			category: "fun",
			usage: `${client.config.prefix}gamble <value>|<direction>\n\nExample: ${client.config.prefix}gamble 100|right`,
			baseXp: 40,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
/*const texts = joined.trim().split("|");
		if (texts[0] === "")
			return void M.reply(
				`Use ${this.client.config.prefix}gamble (100|right)`
			);
		const opp = texts[0]; //your opinion 
		const value = texts[1];// your value
		const wallet = 100
		const bank = 5000
		if (!value) return void M.reply("Give me the value, Baka!");
		if (!opp) return void M.reply("Give me the direction, Baka!");
		var typ = [
			"right",
			"left",
			"left",
			"right",
		];
const random = typ[Math.floor(Math.random() * typ.length)];
if (bank > value) {
  if ( opp == random ) {
  	await M.reply(`You won ${value}`)
} else {
await M.reply(`you lost ${value}`)

}
} else {
 await M.reply("sorry, you dont have sufficient coins to gamble")
}
}
}*/

const texts = joined.trim().split("|");
		if (texts[0] === "")
			return void M.reply(
				`Use ${this.client.config.prefix}gamble (100|right)`
			);
		const opp = texts[0]; //your opinion 
		const value = texts[1];// your value
		const wallet = 1000
		const bank = 10000
		if (!value) return void M.reply("Give me the value, Baka!");
		if (!opp) return void M.reply("Give me the direction, Baka!");
		var typ = [
			"right",
			"left",
			"left",
			"right",
		];
const random = typ[Math.floor(Math.random() * typ.length)];
switch (true) {
  case (bank || wallet) > (value):
    if ( opp == random ) {
  	M.reply(`You won ${value}`)
} else {
M.reply(`you lost ${value}`);
};
    break;
  case (bank || wallet) < (value):
    M.reply('sorry you dont have sufficient coins');
    break;
}
  
}
}
