import { ChampionSummary } from "@/types/datadragon";
import Image from "next/image";
import Link from "next/link";

interface Props {
    champion: ChampionSummary | null;
    onClose: () => void;
}

export default function ChampionCard({ champion, onClose }: Props) {
    return (
        <div
            className={`fixed top-0 right-0 z-50 h-full w-80 transform shadow-xl transition-transform duration-300 ease-in-out md:top-20 md:h-fit dark:bg-zinc-900 ${champion ? "translate-x-0" : "translate-x-full"} `}
        >
            {champion && (
                <div className="p-4">
                    <button onClick={onClose} className="mb-4 rounded-sm p-2 text-sm text-zinc-300 hover:bg-zinc-600">
                        ✕ Chiudi
                    </button>

                    <Image
                        src={`https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/${champion.id}.png`}
                        width={200}
                        height={100}
                        alt={champion.name}
                        className="mb-4 rounded"
                    />

                    <h2 className="text-xl font-bold">{champion.name}</h2>
                    <p className="text-zinc-500 italic">{champion.title}</p>

                    <p className="mt-4 text-sm">{champion.blurb}</p>

                    <div className="mt-4 flex gap-2">
                        {champion.tags.map((tag) => (
                            <span key={tag} className="rounded bg-blue-950 px-2 py-1 text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Link href={`/champions/${champion.id}`}>Details</Link>
                </div>
            )}
        </div>
    );
}
