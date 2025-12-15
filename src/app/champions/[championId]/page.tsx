import { getChampionDetails, getChampionList } from "@/lib/api/datadragon";
import { version } from "@/lib/const/const";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    championId: string;
}

export async function generateStaticParams() {
    const champs = await getChampionList();

    return champs.map((c) => ({
        championId: c.id,
    }));
}

export default async function page({ params }: { params: Props }) {
    const { championId } = await params;
    const champion = await getChampionDetails(championId);

    if (!champion) {
        return notFound();
    }

    return (
        <div className="mx-auto max-w-6xl px-6 py-12">
            {/* HERO */}
            <div className="flex gap-8">
                <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                    width={300}
                    height={550}
                    alt={champion.name}
                    className="rounded-lg"
                />

                <div>
                    <h1 className="text-4xl font-bold">{champion.name}</h1>
                    <p className="text-zinc-500 italic">{champion.title}</p>

                    <div className="mt-4 flex gap-2">
                        {champion.tags.map((tag) => (
                            <span key={tag} className="rounded bg-blue-900 px-2 py-1 text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="mt-6 text-sm leading-relaxed">{champion.lore}</p>
                </div>
            </div>

            {/* STATS */}
            <section className="mt-12">
                <h2 className="mb-4 text-2xl font-semibold">Stats</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {Object.entries(champion.info).map(([key, value]) => (
                        <div key={key} className="rounded bg-zinc-800 p-4 text-center">
                            <p className="text-xs text-zinc-500 uppercase">{key}</p>
                            <p className="text-xl font-bold">{value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ABILITIES */}
            <section className="mt-12">
                <h2 className="mb-4 text-2xl font-semibold">Abilities</h2>

                {/* Passive */}
                <div className="mb-6 flex gap-4">
                    <Image
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champion.passive.image.full}`}
                        width={48}
                        height={48}
                        alt={champion.passive.name}
                    />
                    <div>
                        <h3 className="font-semibold">{champion.passive.name} (Passive)</h3>
                        <p className="text-sm">{champion.passive.description}</p>
                    </div>
                </div>

                {/* Spells */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {champion.spells.map((spell) => (
                        <div key={spell.id} className="flex items-start gap-4">
                            <Image
                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`}
                                width={48}
                                height={48}
                                alt={spell.name}
                            />
                            <div>
                                <h3 className="font-semibold">{spell.name}</h3>
                                <p className="text-sm">{spell.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SKINS */}
            <section className="mt-12">
                <h2 className="mb-4 text-2xl font-semibold">Skins</h2>
                <div className="flex gap-4 overflow-x-auto">
                    {champion.skins.map((skin) => (
                        <Image
                            key={skin.id}
                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`}
                            width={300}
                            height={170}
                            alt={skin.name}
                            className="rounded"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
