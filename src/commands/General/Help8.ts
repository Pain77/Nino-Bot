/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help8",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h8','?8','well8','menu8']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/-EmyZDU1hmgAAAPo/hollow-ataraxia-sakura.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `-🄽🅂🄵🅆 🍊

‣ ᴀɴᴀʟ, ʙʟᴏᴡᴊᴏʙ, ᴍᴀɪᴅ, ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ, ɴꜱꜰᴡᴅᴏᴜᴊɪɴ, ɴꜱꜰᴡᴋɪᴛꜱᴜɴᴇ, ɴʜᴇɴᴛᴀɪ, ɴꜱꜰᴡᴘᴀᴘᴇʀ, ɴꜱꜰᴡɴᴇᴋᴏ, ɴꜱꜰᴡᴡᴀɪꜰᴜ, ᴘᴜꜱꜱʏ, ᴛʜɪɢʜꜱ.
    
    
───▄▄─▄████▄▐▄▄▄▌
──▐──████▀███▄█▄▌
▐─▌──█▀▌──▐▀▌▀█▀
─▀───▌─▌──▐─▌
─────█─█──▐▌█

 `,
			}
		);
	};
}
