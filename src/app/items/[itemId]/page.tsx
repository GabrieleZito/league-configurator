import { getItemDetail } from "@/lib/api/datadragon";
import { version } from "@/lib/const/const";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: { itemId: string };
}

export default async function ItemDetailPage({ params }: Props) {
    const { itemId } = await params;
    const item = await getItemDetail(itemId);
    console.log(item);

    return (
        <div className="mx-auto w-4xl px-6 py-12">
            {/* HEADER */}
            <div className="flex items-start gap-6">
                <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                    width={96}
                    height={96}
                    alt={item.name}
                    className="rounded"
                />

                <div>
                    <h1 className="text-3xl font-bold">{item.name}</h1>

                    <div className="mt-2 flex gap-2">
                        {item.tags.map((tag) => (
                            <span key={tag} className="rounded bg-blue-900 px-2 py-1 text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 flex gap-4 text-sm">
                        <span>💰 {item.gold.total}g</span>
                        <span>Sell: {item.gold.sell}g</span>
                    </div>
                </div>
            </div>

            {/* DESCRIPTION */}
            <section className="mt-8">
                <h2 className="mb-2 text-xl font-semibold">Description</h2>

                {/* Data Dragon HTML → renderizzato */}
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: item.description }} />
            </section>

            {/* STATS */}
            {Object.keys(item.stats).length > 0 && (
                <section className="mt-8">
                    <h2 className="mb-2 text-xl font-semibold">Stats</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(item.stats).map(([stat, value]) => (
                            <div key={stat} className="rounded bg-zinc-700 p-3 text-sm">
                                <span className="font-medium">{stat}</span>: {value}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* BUILD PATH */}
            {(item.from || item.into) && (
                <section className="mt-8">
                    <h2 className="mb-4 text-xl font-semibold">Build Path</h2>

                    <div className="flex flex-col flex-wrap gap-6">
                        {item.from && (
                            <div>
                                <p className="mb-2 text-sm font-medium">Builds from</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.from.map((id) => (
                                        <Link key={id} href={`/items/${id}`}>
                                            <Image
                                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${id}.png`}
                                                width={48}
                                                height={48}
                                                alt={id}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {item.into && (
                            <div>
                                <p className="mb-2 text-sm font-medium">Builds into</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.into.map((id) => (
                                        <Link key={id} href={`/items/${id}`}>
                                            <Image
                                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${id}.png`}
                                                width={48}
                                                height={48}
                                                alt={id}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
}
