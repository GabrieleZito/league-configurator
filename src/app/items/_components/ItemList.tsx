"use client";
import { version } from "@/lib/const/const";
import { Item } from "@/types/datadragon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    itemlist: Item[];
}

function ItemList({ itemlist }: Props) {
    const [search, setSearch] = useState<string>("");

    const filteredItems = itemlist.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className="flex w-6xl flex-col gap-6">
            <input
                type="text"
                placeholder="Cerca un oggetto..."
                className="w-full rounded-lg border border-zinc-300 px-4 py-2 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex max-w-6xl flex-row flex-wrap justify-center gap-4 pb-10">
                {filteredItems.map((i) => (
                    <div key={i.id}>
                        <Link href={`/items/${i.id}`}>
                            <Image
                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${i.image.full}`}
                                height={50}
                                width={50}
                                alt={i.name}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;
