/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['h','?','well','menu']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan = 
			"https://c.tenor.com/do4JyZjqXpMAAAPo/medusa-rider.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `⥤ 𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚! *@${M.sender.username}*.
⥤ 𝐖𝐚𝐭𝐚𝐬𝐡𝐢 𝐧𝐨 𝐧𝐚𝐦𝐚𝐞 𝐰𝐚 𝐍𝐚𝐤𝐚𝐧𝐨 𝐍𝐢𝐧𝐨 𝐃𝐞𝐬𝐮 🩰
⥤ 𝐌𝐲 𝐏𝐫𝐞𝐟𝐢𝐱 𝐈𝐬 - "${this.client.config.prefix}"
➽───────────────❥
1┊ᴅᴏɴ'ᴛ ᴄᴀʟʟ ᴍᴇ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ.
2┊ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ɪɴ ᴅᴍ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ.
➽───────────────❥

-🅃🄷🄸🅂 🄸🅂 🄼🅈 🄷🄴🄻🄿 🄻🄸🅂🅃-

╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──
|
╰┈➤ ❝ [ 𝙒𝙀𝙀𝘽 ] ❞
|
🧧 ${this.client.config.prefix}h1
|
╰┈➤ ❝ [ 𝙁𝙐𝙉 ] ❞
|
🧧 ${this.client.config.prefix}h2
|
╰┈➤ ❝ [ 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 ] ❞
|
🧧 ${this.client.config.prefix}h3
|
╰┈➤ ❝ [Fancy text] ❞
|
🧧 ${this.client.config.prefix}h4
|
╰┈➤ ❝ [Fancy text] ❞
|
🧧 ${this.client.config.prefix}h5
|
╰┈➤ ❝ [Fancy text] ❞
|
🧧 ${this.client.config.prefix}h6
|
╰┈➤ ❝ [Fancy text] ❞
|
🧧 ${this.client.config.prefix}h7
|
╰┈➤ ❝ [Fancy text] ❞
|
🧧 ${this.client.config.prefix}h8
|
╰┈➤ ❝ [Fancy text] ❞
|

|
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──
📝 𝙉𝙤𝙩𝙚: 🧧 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

 `,
			}
		);
	};
}
