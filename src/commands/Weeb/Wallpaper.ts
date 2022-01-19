/** @format */

import { AnimeWallpaper } from "anime-wallpapers";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import request from "../../lib/request";
import { MessageType } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "wallpaper",
			description: `Will send you random anime wallpaper of the given term.`,
			aliases: ["wpaper"],
			category: "weeb",
			usage: `${client.config.prefix}wallpaper [term]`,
			baseXp: 20,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Give The Name Of Wallpaper You Want To Search 🔍`));
		const lisa: any = joined.trim().split("|");
		const term: string = lisa[0];
		const amount: number = lisa[1];
		if (!amount)
			return void M.reply(
				`Give The Number Of Wallpapers You Want\n\nExample: *${this.client.config.prefix}wallpaper Lisa Manoban | 7*`
			);
		if (amount > 20)
			return void M.reply(`Wallpaper Limit Is 20`);
		const wall = new AnimeWallpaper();
		const wallpaper = await wall.getAnimeWall2(term).catch(() => null);
		if (!wallpaper)
			return void (await M.reply(
				`Couldn't find any matching term of wallpaper.`
			));
		for (let i = 0; i < amount; i++) {
			const res = `*_Here is Your Wallpaper 🌸_*`;
			this.client.sendMessage(
				M.from,
				{ url: wallpaper[i].image },
				MessageType.image,
				{
					quoted: M.WAMessage,
					caption: `${res}`,
				}
			);
		}
	};
}
	
		
