
import { User } from "discord.js";

export interface Title {
    title: string,
    nickname: string,
    episodes: number,
    poster: string,
    tasks?: Task[]
};

export interface Task {
    name: string,
    abbreviation: string,
    owners?: User[]
};
