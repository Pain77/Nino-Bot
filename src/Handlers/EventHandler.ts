import { MessageType, WAParticipantAction, Mimetype } from '@adiwajshing/baileys'
import chalk from 'chalk'
import request from '../lib/request'
import WAClient from '../lib/WAClient'

export default class EventHandler {
    constructor(public client: WAClient) {}

    handle = async (event: IEvent): Promise<void> => {
        const group = await this.client.fetchGroupMetadataFromWA(event.jid)
        this.client.log(
            `${chalk.blueBright('EVENT')} ${chalk.green(
                `${this.client.util.capitalize(event.action)}[${event.participants.length}]`
            )} in ${chalk.cyanBright(group?.subject || 'Group')}`
        )
        const data = await this.client.getGroupData(event.jid)
        if (!data.events) return void null
        const add = event.action === 'add'
        const text = add
            ? `(っ◔◡◔)っ 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 - ${group.subject || '___'} -\n\n🍁ɢʀᴏᴜᴘ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:\n${
               group.desc
             }\n\n🎗ʜᴏᴘᴇ ʏᴏᴜ ꜰᴏʟʟᴏᴡ ᴛʜᴇ ʀᴜʟᴇꜱ ᴀɴᴅ ʜᴀᴠᴇ ꜰᴜɴ!\n\n*‣ ${event.participants
              .map((jid) => `@${jid.split('@')[0]}`)
              .join(', ')}*`
              
            : event.action === 'remove'
            ? `*@${event.participants[0].split('@')[0]}* ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ᴄʜᴀᴛ ᴀɴᴅ ɪᴛ’ꜱ ʜᴀʀᴅ ᴛᴏ ꜱᴀʏ ɢᴏᴏᴅʙʏᴇ ʏᴇᴛ ɪ’ʟʟ ꜱᴀʏ, ꜱᴀʏᴏɴᴀʀᴀ 👋🏻`
            : `*@${event.participants[0].split('@')[0]}* got ${this.client.util.capitalize(event.action)}d${
                  event.actor ? ` by *@${event.actor.split('@')[0]}*` : ''
              }`
        const contextInfo = {
            mentionedJid: event.actor ? [...event.participants, event.actor] : event.participants
        }
        if (add) {
            let image = await this.client.assets.get('welcome1')
            
            if (image)
                return void (await this.client.sendMessage(event.jid, image, MessageType.video, {
                    caption: text,
                    mimetype: Mimetype.gif,
                    contextInfo
                }))
        }
       if (add) {
            let image = await this.client.assets.get('goodbye1')
            
            if (image)
                return void (await this.client.sendMessage(event.jid, image, MessageType.video, {
                    caption: text,
                    mimetype: Mimetype.gif,
                    contextInfo
                }))
        }
   
        return void this.client.sendMessage(event.jid, text, MessageType.extendedText,{ contextInfo })
    

}
}

interface IEvent {
    jid: string
    participants: string[]
    actor?: string | undefined
    action: WAParticipantAction
}
