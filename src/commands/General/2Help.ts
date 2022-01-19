import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '2help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['2h']
        })
    }

     run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
           const n = [
           'https://i.pinimg.com/236x/ef/7c/9a/ef7c9ae945c01da8b0aa074efc47a216.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIa6w8AaWfwBjBGeJDOvphtG64EO_EAzHCDKGpju2zP9BcRyaPbzZP78CtqDhMl35c4Yo&usqp=CAU','https://preview.redd.it/62od5seume621.jpg?auto=webp&s=171510b473a05764a0d8c17598910cfe4bd854b8'
        ]
        let lisa = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'dev') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `👋🏻 (🎀) Annyeonghaseyo! *${M.sender.username}*\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `━━❰•Bot ${this.emojis[keys.indexOf(key)]} ${this.client.util.capitalize(key)}•❱━━\n• \`\`\`${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                     .join(' \n')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: lisa }, MessageType.image, {quoted:M.WAMessage,
            caption: `${text} 📝 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }) }
         
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `🚀 *Command:* ${this.client.util.capitalize(command.config?.command)}\n
            
             📉 *Status:* ${state ? 'Disabled' : 'Available'}\n
             
             ⛩ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${command.config.aliases?`\n     
             
              ♦️ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}` : ''}\n
              
              🎐 *Group Only:* ${this.client.util.capitalize(JSON.stringify(!command.config.dm ?? true))}\n
              
             💎 *Usage:* ${command.config?.usage || ''}\n\n
             
             📒 *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['🎀','🎀','🎀','🎀','🎀','🎀','🎀','🎀','🎀','🎀','🎀','🎀','🎀','🎀','🎀']
}
