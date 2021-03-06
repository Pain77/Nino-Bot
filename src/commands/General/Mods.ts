/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "mods",
			description: "Generally used to check if bot is Up",
			category: "general",
            usage: `${client.config.prefix}mods`,
            dm: true,
            aliases: ['moderators', 'mod', 'owner'],
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const lisa =
			"https://c.tenor.com/kljjUE4XsnsAAAPo/quintessential-quintuplets-quintessential-quintuplets-s2.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: lisa },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `๐ฎ แดแดแดแดสแดแดแดส๊ฑ\n
โฐโข แดกแดสส300
๐แดแดษดแดแดแดแด: wa.me/917842346461?text=๐๐๐ก๐ก๐ค+300/>
โโโโโโโโโโโโโโ
โฐโข แดแดษชษด
๐แดแดษดแดแดแดแด: wa.me/919662713165?text=๐๐๐ก๐ก๐ค+แดแดษชษด
โโโโโโโโโโโโโโ
โฐโข สแดสแด สแดแดแด๊ฑส
๐แดแดษดแดแดแดแด: wa.me/918473956301?text=๐๐๐ก๐ก๐ค+สแดแดแด๊ฑส
โโโโโโโโโโโโโโ
โฐโข สสแดแดขแด
๐แดแดษดแดแดแดแด: wa.me/917721059975?text=๐๐๐ก๐ก๐ค+สสแดแดขแด 
โขโโโ โฝ โข โฝ โโโโข`,
			}
		);
	};
}
