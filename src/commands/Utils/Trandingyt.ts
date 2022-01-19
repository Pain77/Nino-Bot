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
            command: 'trandingyt',
            aliases: ['ty', 'tyt'],
            description: 'Gives you the trending list of yt ',
            category: 'utils',
            
            usage: `${client.config.prefix}trandingyt [title]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('✖ Provide an item name to search, Pabo!')
        const lisa = joined.trim()
        console.log(lisa)
        const { data } = await axios.get(`https://api-xcoders.xyz/api/info/trend/youtube?country=${lisa}&apikey=Zl0clXuAbx`)
        const buffer = await request.buffer(data.result.data[0].thumbnail).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖ An error occurred. Please try again later',
                    MessageType.image,
                    undefined,
                    undefined,
                    `${data.result.message}\n${data.result.updated_at}\n*(1)* ${data.result.data[0].title}\n ${data.result.data[0].url}\n ${data.result.data[0].channel}\n ${data.result.data[0].uploaded_at}\n ${data.result.data[0].viewers}\n ${data.result.data[0].likes}\n ${data.result.data[0].comments}\n${data.result.data[0].description}\n\n*(2)* ${data.result.data[1].title}\n ${data.result.data[1].url}\n ${data.result.data[1].channel}\n ${data.result.data[1].uploaded_at}\n ${data.result.data[1].viewers}\n ${data.result.data[1].likes}\n ${data.result.data[1].comments}\n${data.result.data[1].description}\n\n*(3)* ${data.result.data[2].title}\n ${data.result.data[2].url}\n ${data.result.data[2].channel}\n ${data.result.data[2].uploaded_at}\n ${data.result.data[2].viewers}\n ${data.result.data[2].likes}\n ${data.result.data[2].comments}\n${data.result.data[2].description} `,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`✖ An error occurred. Please try again later.`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`✖ An error occurred. Please try again later.`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
