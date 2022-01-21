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
			usage: `${client.config.prefix}nino`,
		        dm: true,
                        aliases: ['h3','?3','menu3']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const nino = 
			"https://c.tenor.com/2Y-jDlehTzUAAAPo/nino-nakano-nino.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: nino },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` ⊱•─ {⋅✯ 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 ✯⋅} ─•⊰
				
🧧 ${this.client.config.prefix}ᴀᴅᴍɪɴs 
🧧 ${this.client.config.prefix}ᴇxᴘ 
🧧 ${this.client.config.prefix}ʜɪ
🧧 ${this.client.config.prefix}ɢʀᴏᴜᴘʟɪɴᴋ
🧧 ${this.client.config.prefix}ᴍᴏᴅs 
🧧 ${this.client.config.prefix}ᴘʀᴏғɪʟᴇ 
🧧 ${this.client.config.prefix}ᴢᴇʀᴏᴛᴡᴏ
🧧 ${this.client.config.prefix}sᴜᴘᴘᴏʀᴛ
🧧 ${this.client.config.prefix}ʀᴜʟᴇs
🧧 ${this.client.config.prefix}ɪɴғᴏ
🧧 ${this.client.config.prefix}ʀᴀɴᴋ

 ❅────────✧ ✦ ✧────────❅
📬 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
 ❅────────✧ ✦ ✧────────❅

 `,
			}
		);
	};
}
