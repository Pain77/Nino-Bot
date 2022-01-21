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
			usage: `${client.config.prefix}nino`,
		        dm: true,
                        aliases: ['h2','?2','menu2']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const nino = 
			"https://c.tenor.com/zH1PrQLE3QUAAAPo/nino-nakano-nakano-nino.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: nino },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` ⊱•─ {⋅✯ 𝙁𝙐𝙉 ✯⋅} ─•⊰
				
🍭 ${this.client.config.prefix}ᴀᴅᴠɪᴄᴇ 
🍭 ${this.client.config.prefix}ꜰᴀᴄᴛ 
🍭 ${this.client.config.prefix}ᴊᴀɪʟ 
🍭 ${this.client.config.prefix}ᴊᴏᴋᴇ 
🍭 ${this.client.config.prefix}Qᴜᴏᴛᴇ 
🍭 ${this.client.config.prefix}ʀᴇᴀᴄᴛ 
🍭 ${this.client.config.prefix}ʀɪᴘ 
🍭 ${this.client.config.prefix}ꜱʜɪᴘ
🍭 ${this.client.config.prefix}ᴍᴇᴍᴇ 
🍭 ${this.client.config.prefix}ᴛʀɪɢɢᴇʀ 
🍭 ${this.client.config.prefix}ᴡᴀɴᴛᴇᴅ
🍭 ${this.client.config.prefix}ᴛʀᴀsʜ 
🍭 ${this.client.config.prefix}ǫᴜᴇsᴛɪᴏɴ 
🍭 ${this.client.config.prefix}ᴅᴀʀᴇ 
🍭 ${this.client.config.prefix}ᴛʀᴜᴛʜ 
🍭 ${this.client.config.prefix}ᴄʜᴀᴛ
🍭 ${this.client.config.prefix}ᴄʜᴇꜱꜱ

 ❅────────✧ ✦ ✧────────❅
📬 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
 ❅────────✧ ✦ ✧────────❅
 `,
			}
		);
	};
}
