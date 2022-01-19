import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/lisa-mean.mp4'
        ]
        let pain = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: pain }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `𝘼𝙧𝙚 𝙮𝙤𝙪 𝙩𝙝𝙚 𝙢𝙤𝙤𝙣? 𝙏𝙮𝙥𝙚 ${this.client.config.prefix}ʜᴇʟᴘ ⌨\n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
  
