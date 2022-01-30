import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'space',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/spacecat.mp4'
        ]
        let pain = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: pain }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `🛰️ Astronauts In Space 🛰️
🚀 Total: 10

❯ ISS - 7
Mark Vande Hei
Pyotr Dubrov
Anton Shkaplerov
Raja Chari
Tom Marshburn
Kayla Barron
Matthias Maurer

❯ Shenzhou 13 - 3
Zhai Zhigang
Wang Yaping
Ye Guangfu` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
  
