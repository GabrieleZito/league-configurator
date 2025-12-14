import { DDResponse, ChampionSummary, ChampionDetails } from "@/types/datadragon";
import axios from "axios";

const api = axios.create({
    baseURL: "https://ddragon.leagueoflegends.com/cdn",
});

const version = "15.24.1";
const language = "en_US";

export async function getChampionList(): Promise<ChampionSummary[]> {
    const res = await api.get<DDResponse<ChampionSummary>>(`/${version}/data/${language}/champion.json`);
    return Object.values(res.data.data);
}

export async function getChampionDetails(name: string): Promise<ChampionDetails | null> {
    try {
        const res = await api.get<DDResponse<ChampionDetails>>(`/${version}/data/${language}/champion/${name}.json`);
        return Object.values(res.data.data)[0];
    } catch (error) {
        console.log("Errore");
        return null;
    }
}
