/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h','?','well','menu']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/do4JyZjqXpMAAAPo/medusa-rider.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `¬ hello! *@${M.sender.username}*.
¬ ɪ'ᴍ 𝙍𝙞𝙙𝙚𝙧 𝙈𝙚𝙙𝙪𝙨𝙖 〽
¬ ᴍʏ ᴘʀᴇꜰɪx ɪꜱ - "${this.client.config.prefix}"
¬ ᴄᴏᴍᴍᴀɴᴅꜱ ᴀʀᴇ ʟɪꜱᴛᴇᴅ ʙᴇʟᴏᴡ.⬇

-🄴🄳🅄🄲🄰🅃🄸🅅🄴 🍁

🧧 ${this.client.config.prefix}h1

-🄵🅄🄽 🍁

🧧 ${this.client.config.prefix}h2

-🄶🄴🄽🄴🅁🄰🄻 🍁

🧧 ${this.client.config.prefix}h3

-🄼🄴🄳🄸🄰 🍁

🧧 ${this.client.config.prefix}h4

-🄼🄾🄳🄴🅁🄰🅃🄸🄾🄽 🍁

🧧 ${this.client.config.prefix}h5

-🅄🅃🄸🄻🅂 🍁

🧧 ${this.client.config.prefix}h6

-🅆🄴🄴🄱 🍁

🧧 ${this.client.config.prefix}h7

-🄽🅂🄵🅆 🍒

🧧 ${this.client.config.prefix}h8

📝 𝙉𝙤𝙩𝙚: 🧧 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

 `,
			}
		);
	};
}
