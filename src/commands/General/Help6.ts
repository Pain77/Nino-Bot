/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help6",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h6','?6','well6','menu6']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/e2NMPP0SCdIAAAPo/medusa-rider.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `-🅄🅃🄸🄻🅂 🍁

────────────────

〽 ${this.client.config.prefix}𝙗𝙡𝙪𝙧 
〽 ${this.client.config.prefix}𝙜𝙚𝙩𝙜𝙞𝙛 
〽 ${this.client.config.prefix}𝙜𝙤𝙤𝙜𝙡𝙚 
〽 ${this.client.config.prefix}𝙧𝙚𝙩𝙧𝙞𝙚𝙫𝙚 
〽 ${this.client.config.prefix}𝙨𝙘𝙧𝙚𝙚𝙣𝙨𝙝𝙤𝙩 
〽 ${this.client.config.prefix}𝙨𝙩𝙚𝙖𝙡 
〽 ${this.client.config.prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧 
〽 ${this.client.config.prefix}𝙨𝙪𝙗𝙧𝙚𝙙 
〽 ${this.client.config.prefix}𝙩𝙧𝙖𝙣𝙨𝙡𝙖𝙩𝙚 
〽 ${this.client.config.prefix}𝙬𝙞𝙠𝙞𝙥𝙚𝙙𝙞𝙖
    
────────────────

 `,
			}
		);
	};
}
