import { DDResponse, ChampionSummary, ChampionDetails, Item } from "@/types/datadragon";
import axios from "axios";
import { language, version } from "../const/const";

const api = axios.create({
    baseURL: "https://ddragon.leagueoflegends.com/cdn",
});

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

export async function getItemList(): Promise<Item[]> {
    const res = await api.get<DDResponse<Item>>(`/${version}/data/${language}/item.json`);
    return Object.entries(res.data.data).map(([id, item]) => ({
        ...item,
        id,
    }));
}

export async function getItemDetail(id: string): Promise<Item> {
    const res = await api.get(`/${version}/data/${language}/item.json`);

    const item = res.data.data[id];

    return {
        id,
        ...item,
    };
}
