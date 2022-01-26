/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help4",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h4','?4','menu4']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const nino = 
			"https://c.tenor.com/pxwtFaHFbzoAAAPo/五等分の花嫁-gotoubun-no-hanayome.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: nino },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` ⊱•─ {⋅✯ 𝙐𝙏𝙄𝙇𝙎 ✯⋅} ─•⊰
				
🪛 ${this.client.config.prefix}ᴛᴀᴋᴇ 
🪛 ${this.client.config.prefix}ʙʟᴜʀ  
🪛 ${this.client.config.prefix}ᴅᴏɢɢᴏ 
🪛 ${this.client.config.prefix}ɢᴇᴛɢɪꜰ  
🪛 ${this.client.config.prefix}ɢᴏᴏɢʟᴇ 
🪛 ${this.client.config.prefix}ᴋɪᴛᴛᴇɴ 
🪛 ${this.client.config.prefix}ᴘᴘᴄᴏᴜᴘʟᴇ 
🪛 ${this.client.config.prefix}ʀᴇᴛʀɪᴇᴠᴇ 
🪛 ${this.client.config.prefix}ꜱᴄʀᴇᴇɴꜱʜᴏᴛ 
🪛 ${this.client.config.prefix}ꜱᴛɪᴄᴋᴇʀ 
🪛 ${this.client.config.prefix}ꜱᴜʙʀᴇᴅ 
🪛 ${this.client.config.prefix}ᴛʀᴀɴᴅɪɴɢɢᴏᴏɢʟᴇ 
🪛 ${this.client.config.prefix}ᴛʀᴀɴᴅɪɴɢʏᴛ 
🪛 ${this.client.config.prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ 
🪛 ${this.client.config.prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ 
🪛 ${this.client.config.prefix}ꜱᴛɪᴄᴋᴇʀꜱᴇʀᴀᴄʜ
🪛 ${this.client.config.prefix}ɢɪᴛʜᴜʙ
🪛 ${this.client.config.prefix}ᴄɪʀᴄʟᴇ

 ❅────────✧ ✦ ✧────────❅
📬 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
 ❅────────✧ ✦ ✧────────❅

 `,
			}
		);
	};
}
