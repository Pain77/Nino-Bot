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
			usage: `${client.config.prefix}nino`,
		        dm: true,
                        aliases: ['h8','?8','menu8']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const nino = 
			"https://c.tenor.com/lH31WV8o0cYAAAPo/nino-nakano.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: nino },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` ⊱•─ {⋅✯ 𝙉𝙎𝙁𝙒 ✯⋅} ─•⊰
				
🔞 ${this.client.config.prefix}ᴀɴᴀʟ 
🔞 ${this.client.config.prefix}ʙʟᴏᴡᴊᴏʙ 
🔞 ${this.client.config.prefix}ʜꜱᴇᴀʀᴄʜ 
🔞 ${this.client.config.prefix}ᴍᴀɪᴅ 
🔞 ${this.client.config.prefix}ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ 
🔞 ${this.client.config.prefix}ɴʜᴇɴᴛᴀɪ
🔞 ${this.client.config.prefix}ɴꜱꜰᴡᴋɪᴛꜱᴜɴᴇ 
🔞 ${this.client.config.prefix}ɴꜱꜰᴡʟᴏʟɪ 
🔞 ${this.client.config.prefix}ɴꜱꜰᴡᴘᴀᴘᴇʀ 
🔞 ${this.client.config.prefix}ɴꜱꜰᴡɴᴇᴋᴏ 
🔞 ${this.client.config.prefix}ɴꜱꜰᴡᴡᴀɪꜰᴜ 
🔞 ${this.client.config.prefix}ᴘᴜꜱꜱʏ 
🔞 ${this.client.config.prefix}ʀʜᴇɴᴛᴀɪ 
🔞 ${this.client.config.prefix}ᴛʜɪɢʜꜱ

 ❅────────✧ ✦ ✧────────❅
📬 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
 ❅────────✧ ✦ ✧────────❅

 `,
			}
		);
	};
}
