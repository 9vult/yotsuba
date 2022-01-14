
import { Client } from "discord.js";
import ready from "./listeners/Ready";
import interactionCreate from "./listeners/InteractionCreate";

require('dotenv').config();

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(process.env.CLIENT_TOKEN);
