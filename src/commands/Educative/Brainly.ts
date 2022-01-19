import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'brainly',
            aliases: ['br'],
            description: 'Gives you answer of the question from brainly ',
            category: 'educative',
            usage: `${client.config.prefix}brainly [Q]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('Please provide me the question')
        const place = joined.trim()
        await axios
            .get(
                `http://zekais-api.herokuapp.com/brainly?query=${place}&lang=us&apikey=CnXf9Ojs`
            )
            /* Note
  If you want to add some response, we'd recommend you to explore the json itself which provided link returns.
  This stability of the url and API KEY is not guaranteed.
  Regards: Team Kaoi
 */
            .then((response) => {
                // console.log(response);
                const i = Math.floor(Math.random() * response.data.result[0].answer.length)
                const text = `🔎 *Question*: *${place}*\n\n_*Answer*_ : ${response.data.result[0].answer[i].answer}\n `
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`Sorry, couldn't find any Answers.`)
            })
    }
}
