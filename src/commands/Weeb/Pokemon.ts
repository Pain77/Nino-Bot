import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import pokedex from "pokedex-promise-v2";
import oakdexPokedex from "oakdex-pokedex";
import request from "../../lib/request";
import { MessageType } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "pokemon",
			description: `Gives you the data of the given pokemon.`,
			aliases: ["pkmn"],
			category: "weeb",
			usage: `${client.config.prefix}pokemon [name/id]`,
			baseXp: 50,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
			const name = joined.trim().split(" ")[0].toLowerCase();
			if (!name)
				return void M.reply(
					`Type the name of the Pokemon to get information 🐱`
				);
			const pkmon = new pokedex();
			const data = await pkmon.getPokemonByName(name).catch(() => null);
			if (!data)
				return void (await M.reply(`No such a Pokemon ✖️`));
			const pkmn = await oakdexPokedex.findPokemon(data.id);
			let text = "";
			text += `💫 *Name: ${pkmn.names.en}*\n`;
			text += `〽️ *Pokedex ID: ${data.id}*\n`;
			text += `⚖ *Weight: ${pkmn.weight_eu}*\n`;
			text += `🔆 *Height: ${pkmn.height_eu}*\n`;
			text += `🌟 *Base Experience: ${data.base_experience}*\n`;
			text += `📛 *Abilities: ${pkmn.abilities[0].name}, ${pkmn.abilities[1].name}*\n`;
			text += `🎀 *Type:  ${pkmn.types}*\n`;
			text += `📈 *Leveling Rate: ${pkmn.leveling_rate}*\n`;
			text += `💮 *Colour: ${pkmn.color}*\n`;
			if (pkmn.evolution_from !== null)
				text += `🌸 *Evolved from: ${pkmn.evolution_from}*\n`;
		text += `✳ *HP: ${data.stats[0].base_stat}*\n`;
		text += `⚔ *Attack: ${data.stats[1].base_stat}*\n`;
		text += `🔰 *Defense: ${data.stats[2].base_stat}*\n`;
		text += `☄ *Special Attack: ${data.stats[3].base_stat}*\n`;
		text += `🛡 *Special Defense:${data.stats[4].base_stat}*\n`;
		text += `🎐 *Speed: ${data.stats[5].base_stat}*\n\n`;
		text += `💬 *Summary: ${pkmn.pokedex_entries.Gold.en}*`;
		const buffer = await request
			.buffer(
				`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
			)
			.catch((e) => {
				return void M.reply(e.message);
			});
		while (true) {
			try {
				M.reply(
					buffer || "✖️ Something went wrong, please try again later ✖️",
					MessageType.image,
					undefined,
					undefined,
					`${text}`,
					undefined
				).catch((err) => {
					console.log(`${err}`);
					M.reply(`✖️ Something went wrong, please try again later ✖️`);
				});
				break;
			} catch (err) {
				M.reply(`✖️ Something went wrong, please try again later ✖️`);
				console.log(`${err}`);
			}
		}
		return void null;
	};
}
