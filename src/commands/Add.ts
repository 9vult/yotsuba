
import DiscordJS, { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

const VERSION = "1.0.0";

export const Add: Command = {
    name: "add",
    description: "Adds a new title to Yotsuba's database.",
    type: "CHAT_INPUT",
    options: [
        {
            name: "title",
            description: "Full title of the series",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        },
        {
            name: "nickname",
            description: "Short nickname for the series for use in commands",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        },
        {
            name: "episodes",
            description: "Number of episodes in the series",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
        },
        {
            name: "poster",
            description: "Link to an image of the title's poster",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        }
    ],
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const title:    any = interaction.options.get('title')?.value;
        const nickname: any = interaction.options.get('nickname')?.value;
        const episodes: any = interaction.options.get('episodes')?.value;
        const poster:   any = interaction.options.get('poster')?.value;

        const content:  any = `Adding "${title}" (aka "${nickname}") with ${episodes} episodes and a poster that looks like ${poster}.`

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
