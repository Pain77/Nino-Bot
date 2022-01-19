/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help2",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h2','?2','well2','menu2']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/iM-nb2_7qcIAAAPo/rider-medusa.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `-🄵🅄🄽 🍁
				
────────────────

〽 ${this.client.config.prefix}𝙛𝙖𝙘𝙩 
〽 ${this.client.config.prefix}𝙟𝙤𝙠𝙚 
〽 ${this.client.config.prefix}𝙦𝙪𝙤𝙩𝙚 
〽 ${this.client.config.prefix}𝙧𝙚𝙖𝙘𝙩 
〽 ${this.client.config.prefix}𝙨𝙝𝙞𝙥 
〽 ${this.client.config.prefix}𝙩𝙧𝙞𝙜𝙜𝙚𝙧 
〽 ${this.client.config.prefix}𝙬𝙝𝙮 
〽 ${this.client.config.prefix}𝙘𝙝𝙖𝙩
〽 ${this.client.config.prefix}𝙘𝙝𝙚𝙨𝙨
〽 ${this.client.config.prefix}𝙠𝙞𝙩𝙩𝙚𝙣
〽 ${this.client.config.prefix}𝙩𝙧𝙪𝙩𝙝
〽 ${this.client.config.prefix}𝙙𝙖𝙧𝙚
〽 ${this.client.config.prefix}𝙢𝙥𝙛𝙥
    
────────────────
 `,
			}
		);
	};
}
