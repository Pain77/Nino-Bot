/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help3",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h3','?3','well3','menu3']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/SKlfW2pJKRoAAAPo/rider-medusa.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `-🄶🄴🄽🄴🅁🄰🄻 🍁

────────────────

〽 ${this.client.config.prefix}𝙖𝙙𝙢𝙞𝙣𝙨 
〽 ${this.client.config.prefix}𝙚𝙭𝙥 
〽 ${this.client.config.prefix}𝙝𝙚𝙡𝙥 
〽 ${this.client.config.prefix}𝙝𝙞 
〽 ${this.client.config.prefix}𝙞𝙣𝙛𝙤 
〽 ${this.client.config.prefix}𝙞𝙣𝙫𝙞𝙩𝙚𝙡𝙞𝙣𝙠 
〽 ${this.client.config.prefix}𝙍𝙞𝙙𝙚𝙧 
〽 ${this.client.config.prefix}𝙢𝙤𝙙𝙨 
〽 ${this.client.config.prefix}𝙥𝙧𝙤𝙛𝙞𝙡𝙚 
〽 ${this.client.config.prefix}𝙧𝙖𝙣𝙠
    
────────────────

 `,
			}
		);
	};
}
