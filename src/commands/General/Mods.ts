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
	    adminOnly: true,
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
				caption: `🏮 ᴍᴏᴅᴇʀᴀᴛᴏʀꜱ\n
╰• ᴡᴇʟʟ300
🎗ᴄᴏɴᴛᴀᴄᴛ: wa.me/917842346461?text=𝙝𝙚𝙡𝙡𝙤+300/>
──────────────
╰• ᴘᴀɪɴ
🎗ᴄᴏɴᴛᴀᴄᴛ: wa.me/919662713165?text=𝙝𝙚𝙡𝙡𝙤+ᴘᴀɪɴ
──────────────
╰• ʟᴏʀᴅ ʀᴀᴋᴇꜱʜ
🎗ᴄᴏɴᴛᴀᴄᴛ: wa.me/918473956301?text=𝙝𝙚𝙡𝙡𝙤+ʀᴀᴋᴇꜱʜ
──────────────
╰• ʙʟᴀᴢᴇ
🎗ᴄᴏɴᴛᴀᴄᴛ: wa.me/917721059975?text=𝙝𝙚𝙡𝙡𝙤+ʙʟᴀᴢᴇ 
•━━━ ✽ • ✽ ━━━•`,
			}
		);
	};
}
