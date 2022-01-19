import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
// import { waifuR } from 'waifur'
const waifulist = require("public-waifulist");
const waifuclient = new waifulist()

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'infowaifu',
            description: 'Get waifu images with details',
            category: 'weeb',
            usage: `${client.config.prefix}infowaifu`,
            
        })
    }

    
    run = async (M: ISimplifiedMessage): Promise<void> => {
        
        
        
//         await  waifuR(waifu => {
// console.log(res)
// return void M.reply( request.buffer(res.background_image), MessageType.image, undefined, undefined, `📛 *NAME* : ${res.name}\n❤️ *ALTARNATE NAME* : ${res.alternate_name}\n💚️ *ANIME NAME* : ${res.appears_in}\n🎂 *AGE* : ${res.age}, ${res.birthday}\n🙋 *HIGHT* :${res.height}\n⚖️ *WEIGHT* : ${res.weight}\n🩸 *BLOOD TYPE* : ${res.blood_type}\n📝 *DESCRIPTION* : ${res.description}\n` )


//         })
// var waifu = await waifuR()
// return void M.reply(await  request.buffer(waifuR().background_image), MessageType.image, undefined, undefined, `📛 *NAME* : ${waifuR().name}\n❤️ *ALTARNATE NAME* : ${waifuR().alternate_name}\n💚️ *ANIME NAME* : ${waifuR().appears_in}\n🎂 *AGE* : ${waifuR().age}, ${waifuR().birthday}\n🙋 *HIGHT* :${waifuR().height}\n⚖️ *WEIGHT* : ${waifuR().weight}\n🩸 *BLOOD TYPE* : ${waifuR().blood_type}\n📝 *DESCRIPTION* : ${waifuR().description}\n` )
const waifu = await waifuclient.getRandom()
console.log(waifu)
return void M.reply(await request.buffer(waifu.data.display_picture), MessageType.image, undefined, undefined, `📛 *NAME* : ${waifu.data.name}\n❤️ *ORIGINAL NAME* : ${waifu.data.original_name}\n🎂 *AGE* : ${waifu.data.age}\n✏️ *CREATOR* : ${waifu.data.creator.name}\n💬 *ANIME NAME* : ${waifu.data.series.name}\n✨ *CHARACTER DESCRIPTION* : ${waifu.data.description}\n🍀 *ANIME DESCRIPTION* : ${waifu.data.series.description}\n👍 *LIKES* : ${waifu.data.LIKES}\n📈 *LIKE RATE* : ${waifu.data.like_rank}\n🔗 *URL* : ${waifu.data.url} ` )
    }





}
