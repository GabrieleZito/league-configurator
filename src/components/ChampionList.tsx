"use client";
import { ChampionSummary } from "@/types/datadragon";
import Image from "next/image";
import { useState } from "react";
import ChampionCard from "./ChampionCard";

function ChampionList({ championList }: { championList: ChampionSummary[] }) {
    const [selectedChamp, setSelectedChamp] = useState<ChampionSummary | null>(null);
    const [search, setSearch] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [order, setOrder] = useState<string>("ASC");

    const tags: Set<string> = championList.reduce((set, c) => {
        if (c.tags && c.tags.length > 0) {
            c.tags.forEach((element) => {
                set.add(element);
            });
        }
        return set;
    }, new Set<string>());

    const filteredChamps = championList.filter((c) => {
        const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
        const matchRole = !role || c.tags.includes(role);
        return matchSearch && matchRole;
    });

    filteredChamps.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return order === "ASC" ? -1 : 1;
        if (nameA > nameB) return order === "ASC" ? 1 : -1;
        return 0;
    });

    return (
        <>
            <div className="flex w-full flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Cerca un campione..."
                        className="w-full rounded-lg border border-zinc-300 px-4 py-2 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="flex flex-row gap-2">
                        <select
                            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                            onChange={(e) => setOrder(e.target.value)}
                        >
                            <option value="">Ordine</option>
                            <option value="ASC">A → Z</option>
                            <option value="DESC">Z → A</option>
                        </select>
                        <select
                            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Tutti i ruoli</option>
                            {Array.from(tags).map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-4">
                    {filteredChamps.map((c) => (
                        <div key={c.id} onClick={() => setSelectedChamp(c)} className="cursor-pointer hover:scale-105">
                            <Image
                                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c.id}_0.jpg`}
                                width={150}
                                height={200}
                                alt={`${c.id} loading image`}
                            />
                        </div>
                    ))}
                    <ChampionCard champion={selectedChamp} onClose={() => setSelectedChamp(null)} />
                </div>
            </div>
        </>
    );
}

export default ChampionList;
