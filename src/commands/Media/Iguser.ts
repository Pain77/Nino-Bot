import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'iguser',
            aliases: ['ur', 'ig'],
            description: 'Get the info of a user from ig ',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}iguser [name]`
        })
    }
	
	    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('Give me the username of the account you want to search\n\nExample: !iguser on11._.sama')
        const lisa = joined.trim()
        console.log(lisa)
        const { data } = await axios.get(`https://api-xcoders.xyz/api/stalk/ig?username=${lisa}&apikey=LJowCce5Pn`)
        if ((data as { error: string }).error) return void (await M.reply('Sorry, couldn\'t find'))
        const buffer = await request.buffer(data.result.profile_url).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '〽 ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ. ᴘʟᴇᴀꜱᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ',
                    MessageType.image,
                    undefined,
                    undefined,
                    `✔ *Verified*: ${data.result.is_verified}\n🗣 *Private*: ${data.result.is_private}\n🎛 *Postcount*: ${data.result.posts_count}\n🗻 *Followers*: ${data.result.following}\n🍃 *Following*: ${data.result.followers}\n📖 *Bio*: ${data.result.biography}\n📃 *Fullname*: ${data.result.full_name}\n🀄 *Username*: ${data.result.username}\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`〽 ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ. ᴘʟᴇᴀꜱᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`〽 ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ. ᴘʟᴇᴀꜱᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
