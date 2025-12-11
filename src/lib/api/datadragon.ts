import { ChampionListResponse, ChampionSummary } from "@/types/datadragon";
import axios from "axios";

const api = axios.create({
    baseURL: "https://ddragon.leagueoflegends.com/cdn",
});

const version = "15.24.1";
const language = "en_US";

export async function getChampionList(): Promise<ChampionSummary[]> {
    const res = await api.get<ChampionListResponse>(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`);
    return Object.values(res.data.data);
}
