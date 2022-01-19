import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['sup'],
            description: 'Get our support group link',
            category: 'general',
            usage: `${client.config.prefix}support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

await this.client.sendMessage( M.sender.jid,`*LISA'S SUPPORT GROUP 🌸*

*🉐 Info :* Jᴏɪɴ Oᴜʀ Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ Tᴏ Aᴅᴅ Oᴜʀ Bᴏᴛ Iɴ Yᴏᴜʀ Gʀᴏᴜᴘ Oʀ Yᴏᴜ Cᴀɴ Asᴋ Aɴʏ Qᴜᴇʀʏ Rᴇɢᴀʀᴅɪɴɢ Tʜʀ Bᴏᴛ!!

*🎯 Rules :*
- Fᴏʟʟᴏᴡ Tʜᴇ Gʀᴏᴜᴘ Rᴜʟᴇs
- Fᴏʟʟᴏᴡ Tʜᴇ Aᴅᴍɪɴs
- Dᴏɴᴛ Mɪssʙᴇʜᴀᴠᴇ Wɪᴛʜ Aɴʏ Mᴇᴍʙᴇʀs

*🧣 Tittle: 『 Lisa Bot 』🎈*

*✉ Invite:* https://chat.whatsapp.com/C3kk3GSXLitKHZp9wLLTP3`, MessageType.text ) 
return void M.reply('_*Sent you a personal message regarding this 🎈*_')
    }
}
