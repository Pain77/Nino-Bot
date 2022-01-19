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
            command: 'pinterest',
            aliases: ['pi', 'pin'],
            description: 'Search wallpaper from pinterest.com. ',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}pinterest [name]`
        })
    }
    // static count = 0
    run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Provide the term you wanna search 🐱'`));
		const lisa: any = joined.trim().split("|");
		const term: string = lisa[0];
		const amount: number = lisa[1];
		if (!amount)
			return void M.reply(
				`Give me how much pin you want\n\nExample: *${this.client.config.prefix}pin eren yeager|7*`
			);
		if (amount > 20)
			return void M.reply(`*pin limit is 20!`);
   
         const { data } = await axios.get(`https://api.ichikaa.xyz/api/pinterest?query=${term}&apikey=8NtSMQPG`)
        if ((data as { error: string }).error) return void (await M.reply('Sorry, couldn\'t find'))
        const buffer = await request.buffer(data.result[Math.floor(Math.random() * data.result.length)]).catch((e) => {
            return void M.reply(e.message)
        })
        for (let i = 0; i < amount; i++) {
			const res = `_*Here you go 🐱🌸*_`;
			this.client.sendMessage(
				M.from,
				{ url: data.result[Math.floor(Math.random() * data.result.length)] },
				MessageType.image,
				{
					quoted: M.WAMessage,
					caption: `${res}`,
				}
			);
		}
}
}
