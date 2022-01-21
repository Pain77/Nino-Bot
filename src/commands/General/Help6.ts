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
			usage: `${client.config.prefix}nino`,
		        dm: true,
                        aliases: ['h6','?6','menu6']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const nino = 
			"https://c.tenor.com/4ZN9Vzkv1lkAAAPo/nino-nakano-the-quintessential-quintuplets.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: nino },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` ⊱•─ {⋅✯ 𝙀𝘿𝙐𝘾𝘼𝙏𝙄𝙑𝙀 ✯⋅} ─•⊰
				
📒 ${this.client.config.prefix}ʙʀᴀɪɴʟʏ 
📒 ${this.client.config.prefix}ᴄᴀʟᴄᴜʟᴀᴛᴏʀ 
📒 ${this.client.config.prefix}ᴄᴏᴠɪᴅ 
📒 ${this.client.config.prefix}ᴄʀʏᴘᴛᴏ 
📒 ${this.client.config.prefix}ᴇʟᴇᴍᴇɴᴛ 
📒 ${this.client.config.prefix}ᴛʀɪᴠɪᴀ 
📒 ${this.client.config.prefix}ᴜʀʙᴀɴᴅɪᴄᴛɪᴏɴᴀʀʏ 
📒 ${this.client.config.prefix}ɪᴘ 
📒 ${this.client.config.prefix}ᴡᴇᴀᴛʜᴇʀ
📒 ${this.client.config.prefix}sᴘᴀᴄᴇ

 ❅────────✧ ✦ ✧────────❅
📬 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
 ❅────────✧ ✦ ✧────────❅

 `,
			}
		);
	};
}
