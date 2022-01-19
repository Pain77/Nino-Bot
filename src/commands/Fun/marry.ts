import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'marry',
            description: `MARRYS THE ONE YOU LOVE 💖💖💖`,
            category: 'fun',
            usage: `${client.config.prefix}marry [tag user]`,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const percentage = Math.floor(Math.random() * 100)
        let sentence
        if (percentage < 25) {
            sentence = `\t\t\t\t\t*LIFECent : ${percentage}%* \n\t\tDON'T WORRY A LOT CAN HAPPEN`
        } else if (percentage < 50) {
            sentence = `\t\t\t\t\t*LIFECent : ${percentage}%* \n\t\t Your wedding day will come and go, but may your love forever grow.Another date will solve the problem!💖`
        } else if (percentage < 75) {
            sentence = `\t\t\t\t\t*LIFECent : ${percentage}%* \n\t\t\tMay the love you share today grow stronger as you grow old together 🎉`
        } else if (percentage < 90) {
            sentence = `\t\t\t\t\t*LIFECent : ${percentage}%* \n\tAmazing! Wishing you a lifetime of love and happiness.! 💖NOW KISS🥺 `
        } else {
            sentence = `\t\t\t\t\t*LIFECent : ${percentage}%* \n\tBest wishes on this wonderful journey, as you build your new lives together.💖.NOW KISS KISS KISS PLEASE🥺`
        }

        if (M.quoted?.sender && !M.mentioned.includes(M.quoted.sender)) M.mentioned.push(M.quoted.sender)
        while (M.mentioned.length < 2) M.mentioned.push(M.sender.jid)
        const user1 = M.mentioned[0]
        const user2 = M.mentioned[1]
        const data = JSON.parse((this.client.assets.get('marry') as Buffer)?.toString()) as unknown as {
            marryJson: {
                id: number
                shipPercent: string
                gifLink: string
            }[]
        }

        const ship = data.marryJson.filter((ship) => {
            const shipPercent = parseInt(ship.shipPercent)
            return Math.abs(shipPercent - percentage) <= 10
        })
        // choose a random gif from the array
        const gifLink = ship[Math.floor(Math.random() * ship.length)].gifLink
        let caption = `\t💖 *Congratulations on Your Wedding* 💖 \n`
        caption += `\t\t---------------------------------\n`
        caption += `@${user1.split('@')[0]}  x  @${user2.split('@')[0]}\n`
        caption += `\t\t---------------------------------\n`
        caption += `${sentence}`

        return void M.reply(
            await this.client.util.GIFBufferToVideoBuffer(await this.client.getBuffer(gifLink)),
            MessageType.video,
            Mimetype.gif,
            [user1, user2],
            caption
        )
    }
}
