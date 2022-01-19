import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'lisa',
            description: 'Chat with Lisa.',
            aliases: ['lili'],
            category: 'fun',
            usage: `${client.config.prefix}lisa (text)`
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('_*YADOM 🌸*_')
        const lisa = joined.trim()
        await axios.get(`https://api.simsimi.net/v2/?text=${lisa}&lc=en`)
        .then((response) => {
                // console.log(response);
                const text = `_*🎐Lisa:*_  ${response.data.success}`
                M.reply(text);
            }).catch(err => {
                M.reply(`_*YADOM 🌸*_`)
            }
            )
    };
}
