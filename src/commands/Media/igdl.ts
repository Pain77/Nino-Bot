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
            command: 'ig',
            aliases: ['ig'],
            description: 'Download video from Instagram ',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}ig [name]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('Give the link of the video you want to download!')
        const pain = joined.trim()
        console.log(pain)
        const { data } = await axios.get(`https://api.zekais.com/igdl2?url=${pain}&apikey=CnXf9Ojs`)
        if ((data as { error: string }).error) return void (await M.reply('Sorry, couldn\'t find'))
        const buffer = await request.buffer(data.result[0].url).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖️ Something went wrong, please try again later ✖️',
                    MessageType.video,
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
