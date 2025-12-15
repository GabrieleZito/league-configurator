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
            <div className="flex flex-col gap-6 w-full">
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
                <div className="flex flex-row flex-wrap justify-center gap-4 ">
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
