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
			usage: `${client.config.prefix}nino`,
		        dm: true,
                        aliases: ['h','?','menu']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const nino = 
			"https://c.tenor.com/do4JyZjqXpMAAAPo/medusa-rider.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: nino },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `👋🏻 𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚! *@${M.sender.username}*.
⥤ 𝐖𝐚𝐭𝐚𝐬𝐡𝐢 𝐍𝐨 𝐍𝐚𝐦𝐚𝐞 𝐖𝐚 𝐍𝐚𝐤𝐚𝐧𝐨 𝐍𝐢𝐧𝐨 𝐃𝐞𝐬𝐮 🩰
⥤ 𝐌𝐲 𝐏𝐫𝐞𝐟𝐢𝐱 𝐈𝐬 - "${this.client.config.prefix}"
➽───────────────❥
1┊ᴅᴏɴ'ᴛ ᴄᴀʟʟ ᴍᴇ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ.
2┊ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ɪɴ ᴅᴍ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ.
➽───────────────❥

-🄼🅈 🄷🄴🄻🄿 🄻🄸🅂🅃-

 ‿︵‿︵‿୨˚̣̣̣͙[𝐖𝐄𝐄𝐁]˚̣̣̣͙୧‿︵‿︵‿

🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴀɴɪᴍᴇ, ᴍᴀɴɢᴀ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ1 [${this.client.config.prefix}ʜ1]
 
 ‿︵‿︵‿୨˚̣̣̣͙[𝐅𝐔𝐍]˚̣̣̣͙୧‿︵‿︵‿
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ꜰᴜɴ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ2 [${this.client.config.prefix}ʜ2]
 
 ‿︵‿︵‿୨˚̣̣̣͙[𝐆𝐄𝐍𝐄𝐑𝐀𝐋]˚̣̣̣͙୧‿︵‿︵‿
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ɢᴇɴᴇʀᴀʟ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ3 [${this.client.config.prefix}ʜ3]

 ‿︵‿︵‿୨˚̣̣̣͙[𝐔𝐓𝐈𝐋𝐒]˚̣̣̣͙୧‿︵‿︵‿

🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴜᴛɪʟꜱ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ4 [${this.client.config.prefix}ʜ4]
 
 ‿︵‿︵‿୨˚̣̣̣͙[𝐌𝐄𝐃𝐈𝐀]˚̣̣̣͙୧‿︵‿︵‿
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴍᴇᴅɪᴀ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ5 [${this.client.config.prefix}ʜ5]
 
 ‿︵‿︵‿୨˚̣̣̣͙[𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐕𝐄]˚̣̣̣͙୧‿︵‿︵‿
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴇᴅᴜᴄᴀᴛɪᴠᴇ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ6 [${this.client.config.prefix}ʜ6]
 
 ‿︵‿︵‿୨˚̣̣̣͙[𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐈𝐎𝐍]˚̣̣̣͙୧‿︵‿︵‿
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ7 [${this.client.config.prefix}ʜ7]
 
 ‿︵‿︵‿୨˚̣̣̣͙[𝐍𝐒𝐅𝐖]˚̣̣̣͙୧‿︵‿︵‿
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ɴꜱꜰᴡ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ8 [${this.client.config.prefix}ʜ8]
 
 ‿︵‿︵‿୨˚̣̣̣͙[𝐋𝐎𝐆𝐎]˚̣̣̣͙୧‿︵‿︵‿
 
🎎 ᴅᴇꜱᴄʀɪᴘɪᴛɪᴏɴ: ʙʏ ᴜꜱɪɴɢ ᴛʜɪꜱ ʏᴏᴜ'ʟʟ ʙᴇ ʀᴇᴅɪʀᴇᴄᴛᴇᴅ ᴛᴏ ʟᴏɢᴏ ꜱᴇᴄᴛɪᴏɴ.
🛍️ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʜᴇʟᴘ9 [${this.client.config.prefix}ʜ9]
 
         ┍━━━━━»•» 🌺 «•«━┑
           🄽🄸🄽🄾-🄱🄾🅃 
         ┕━»•» 🌺 «•«━━━━━┙

 `,
			}
		);
	};
}
