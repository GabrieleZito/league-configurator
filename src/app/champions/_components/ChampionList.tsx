"use client";
import { ChampionSummary } from "@/types/datadragon";
import Image from "next/image";
import { useState } from "react";
import ChampionCard from "./ChampionCard";

function ChampionList({ championList }: { championList: ChampionSummary[] }) {
    const [selectedChamp, setSelectedChamp] = useState<ChampionSummary | null>(null);

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {championList.map((c) => (
                <div key={c.id} onClick={() => setSelectedChamp(c)} className="cursor-pointer">
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
    );
}

export default ChampionList;
