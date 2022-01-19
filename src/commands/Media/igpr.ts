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
            command: 'igpr',
            aliases: ['prdl', 'igpr'],
            description: 'Download the post from ig ',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}igpr [link]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('Provide the keywords you wanna search, Baka!')
        const lisa = joined.trim()
        console.log(lisa)
        const { data } = await axios.get(`https://api-xcoders.xyz/api/download/ig?url=${lisa}&apikey=Zl0clXuAbx`)
        if (data.result) return void M.reply( await request.buffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIJBLGeoanLhbUyzTNXLXXRPUDjUuDKIS8g&usqp=CAU`),
        MessageType.image,
                    undefined,
                    undefined,
                    `*Sorry, couldn\'t find or got some errors*`,
                    undefined
                )
//(await M.reply('Sorry, couldn\'t find or got some errors'))
        const buffer = await request.buffer(data.result.link[0].url).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖️ Something went wrong, please try again later ✖️',
                    MessageType.image,
                    undefined,
                    undefined,
                    `_*Here you go 🐱🌸*_\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`✖️ Something went wrong, please try again later ✖️`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`✖️ Something went wrong, please try again later ✖️`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
