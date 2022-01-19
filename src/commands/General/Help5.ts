/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help5",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h5','?5','well5','menu5']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/o7nRC7YIrFEAAAPo/rider-fate.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `-🄼🄾🄳🄴🅁🄰🅃🄸🄾🄽 🍁
				
────────────────				

〽 ${this.client.config.prefix}𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚 
〽 ${this.client.config.prefix}𝙘𝙡𝙤𝙨𝙚 
〽 ${this.client.config.prefix}𝙙𝙚𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚 
〽 ${this.client.config.prefix}𝙙𝙚𝙡𝙚𝙩𝙚 
〽 ${this.client.config.prefix}𝙙𝙚𝙢𝙤𝙩𝙚 
〽 ${this.client.config.prefix}𝙚𝙫𝙚𝙧𝙮𝙤𝙣𝙚 
〽 ${this.client.config.prefix}𝙜𝙧𝙤𝙪𝙥𝙘𝙝𝙖𝙣𝙜𝙚 
〽 ${this.client.config.prefix}𝙤𝙥𝙚𝙣 
〽 ${this.client.config.prefix}𝙥𝙧𝙤𝙢𝙤𝙩𝙚 
〽 ${this.client.config.prefix}𝙥𝙪𝙧𝙜𝙚 
〽 ${this.client.config.prefix}𝙧𝙚𝙢𝙤𝙫𝙚 
〽 ${this.client.config.prefix}𝙖𝙙𝙙
〽 ${this.client.config.prefix}𝙧𝙚𝙫𝙤𝙠𝙚
    
    
────────────────

 `,
			}
		);
	};
}
