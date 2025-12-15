"use client";
import { ChampionSummary } from "@/types/datadragon";
import Image from "next/image";
import { useState } from "react";
import ChampionCard from "./ChampionCard";

function ChampionList({ championList }: { championList: ChampionSummary[] }) {
    const [selectedChamp, setSelectedChamp] = useState<ChampionSummary | null>(null);
    const [search, setSearch] = useState<string>("");

    const filteredChamps = championList.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <div className="flex w-full flex-col gap-6">
                <input
                    type="text"
                    placeholder="Cerca un campione..."
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                    onChange={(e) => setSearch(e.target.value)}
                />
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
