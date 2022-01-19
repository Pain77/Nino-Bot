import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ip',
            description: 'Gives you the info of the ip .',
            aliases: ['ip'],
            category: 'educative',
            usage: `${client.config.prefix}ip [city or state name]`
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('Do you want me to give the info of an unknown ip, Baka!')
        const chitoge = joined.trim()
        await axios.get(`http://docs-jojo.herokuapp.com/api/ip_geolocation?ip=${chitoge}`)
        .then((response) => {
                // console.log(response);
                const text = `🎗 *Ip*:  ${response.data.ip}\n
                                 *Type*: ${response.data.type}\n 
                                 *Continent_code*: ${response.data.continent_code}\n 
                                 *Continent_name*: ${response.data.continent_name}\n 
                                 *Country_name*: ${response.data.country_name}`
                M.reply(text);
            }).catch(err => {
                M.reply(`No such ip, Baka!`)
            }
            )
    };
}
