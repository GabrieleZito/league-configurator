"use client";

import { ITEM_TO_GROUP, version } from "@/lib/const/const";
import { Item } from "@/types/datadragon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    itemlist: Item[];
    usedGroups?: Set<string>;
    onAddItem?: (item: Item, slot: number) => void;
}

function ItemList({ itemlist, usedGroups }: Props) {
    const [search, setSearch] = useState<string>("");
    const [completed, setCompleted] = useState<string>("");
    const [tag, setTag] = useState<string>("");

    const tags: Set<string> = itemlist.reduce((set, c) => {
        if (c.tags && c.tags.length > 0) {
            c.tags.forEach((element) => {
                set.add(element);
            });
        }
        return set;
    }, new Set<string>());

    const filteredItems = itemlist.filter((i) => {
        const searchMatch = i.name.toLowerCase().includes(search.toLowerCase());
        const completedMatch = !completed || !i.into;
        const tagMatch = !tag || i.tags.includes(tag);

        return searchMatch && completedMatch && tagMatch;
    });

    const isItemDisabled = (item: Item): boolean => {
        if (!usedGroups) return false;
        const group = ITEM_TO_GROUP[item.name];
        return !!group && usedGroups.has(group);
    };

    return (
        <div className="flex w-full max-w-6xl flex-col gap-6">
            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Cerca un oggetto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                />
                <div className="flex flex-row gap-2">
                    <select
                        name=""
                        id=""
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                        onChange={(e) => setCompleted(e.target.value)}
                    >
                        <option value="">Tutti</option>
                        <option value={"true"}>Item Completi</option>
                    </select>
                    <select
                        name=""
                        id=""
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                        onChange={(e) => setTag(e.target.value)}
                    >
                        <option value="">Tutti</option>
                        {Array.from(tags).map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pb-10">
                {filteredItems.map((item) => {
                    const disabled = isItemDisabled(item);
                    const group = ITEM_TO_GROUP[item.name];

                    return (
                        <div
                            key={item.id}
                            draggable={!disabled}
                            onDragStart={(e) => {
                                if (disabled) return;
                                e.dataTransfer.setData("item", JSON.stringify(item));
                            }}
                            className={`relative rounded-lg p-2 transition ${
                                disabled ? "cursor-not-allowed opacity-40 grayscale" : "cursor-pointer hover:scale-105 hover:bg-zinc-800"
                            } `}
                            title={disabled && group ? `Only one ${group} item allowed` : item.name}
                        >
                            {disabled && group && (
                                <span className="absolute top-1 right-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">UNIQUE</span>
                            )}

                            {disabled ? (
                                <Image
                                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                                    height={50}
                                    width={50}
                                    alt={item.name}
                                />
                            ) : (
                                <Link href={`/items/${item.id}`}>
                                    <Image
                                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                                        height={50}
                                        width={50}
                                        alt={item.name}
                                    />
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ItemList;
