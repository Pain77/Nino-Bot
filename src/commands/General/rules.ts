import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rule',
            description: `Get rules list`,
            aliases: ['rules'],
            category: 'general',
            usage: `${client.config.prefix}rules`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
        return void M.reply( await request.buffer(`https://wallpapercave.com/uwp/uwp1738845.jpeg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `---「𝘿𝙤𝙣’𝙩 𝙏𝙚𝙖𝙘𝙝 𝙈𝙚 𝙒𝙞𝙩𝙝𝙤𝙪𝙩 𝙈𝙮 𝙋𝙚𝙧𝙢𝙞𝙨𝙨𝙞𝙤𝙣 👠」---


(っ◔◡◔)っ 𝚃𝙰𝙺𝙴 𝙰 𝙻𝙾𝙾𝙺 𝙰𝚃 𝙼𝚈 𝚁𝚄𝙻𝙴𝚂 🔖

⎆ ᴀꜱᴋ ᴍᴇ /ꜱᴜᴘ ꜰᴏʀ ᴛʜᴇ ᴏꜰꜰɪᴄɪᴀʟ ɢʀᴏᴜᴘ ʟɪɴᴋ
⎆ ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ Qᴜᴇʀɪᴇꜱ ᴜꜱᴇ !ᴍᴏᴅꜱ ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴏᴡɴᴇʀꜱ
⎆ ᴅᴏɴ'ᴛ ꜱᴛʀᴜɢɢʟᴇ ᴡʜɪʟᴇ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ, ᴜꜱᴇ /ʜᴇʟᴘ ᴛᴏ ɢᴇᴛ ʜᴇʟᴘ ʟɪꜱᴛ
⎆ ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ᴛʜʀᴏᴜɢʜ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅꜱ. ɪ'ᴍ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ, ɪᴛ ᴍᴇᴀɴꜱ ɪ'ᴍ ᴏꜰꜰʟɪɴᴇ ᴏʀ ᴍʏ ꜱᴇʀᴠᴇʀ'ꜱ ᴅᴏᴡɴ
⎆ ᴅᴏɴ'ᴛ ᴍᴇꜱꜱᴀɢᴇ ᴍᴇ ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ

 *🎀 ＮＯＴＥ: REMEMBER TO KEEP RULES IN MIND OTHERWISE YOU'LL BE BANNED IN NO TIME 🚫*

❢◥ ▬▬▬ ◆ 𝙄 𝙃𝙤𝙥𝙚 𝙔𝙤𝙪 𝙐𝙣𝙙𝙚𝙧𝙨𝙩𝙤𝙤𝙙! ▬▬▬ ◤❢`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`🎀 An error occurred. Please try again later.`))
    }
}
