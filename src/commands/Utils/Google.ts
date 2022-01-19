/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import axios from "axios";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "google",
			aliases: ["g", "search"],
			description: "Search on the web ",
			category: "utils",
			usage: `${client.config.prefix}google [query]`,
			baseXp: 10,
		});
	}
	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!this.client.config.gkey) return void M.reply("No google API key set");
		if (!joined) return void M.reply("Provide me a search term 🐱");
		const term = joined.trim();
		await axios
			.get(
				`https://www.googleapis.com/customsearch/v1?q=${term}&key=${this.client.config.gkey}&cx=baf9bdb0c631236e5`
			)
			.then((res) => {
				if (res.status !== 200) return void M.reply(`✖️ Error: ${res.status}`);
				let result = ``;
				let index = 1;
				for (const item of res.data?.items) {
					result += `*📒${index}.Title* : ${item.title}\n*💸 Link* : ${item.link}\n*🎯 Info* : ${item.snippet}\n\n`;
					index++;
				}
				// return void M.reply(`🔍Command Used : ${Command.count} times\n Result for *${term}*\n\n\n ${result}`)
				return void M.reply(`📈 Results of your search term  *${term}*\n\n\n ${result}`);
			})
			.catch((err) => {
				M.reply(`✖️ Error: ${err}`);
			});
	};
}
