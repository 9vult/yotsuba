
import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../objects/Command";

const VERSION = "1.0.0";

export const About: Command = {
    name: "about",
    description: "Returns basic information about Yotsuba",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = `Hi, I'm Yotsuba, version ${VERSION}; written by 9volt.`

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
