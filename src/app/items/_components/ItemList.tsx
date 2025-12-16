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
    const [search, setSearch] = useState("");

    const filteredItems = itemlist.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
    );

    const isItemDisabled = (item: Item): boolean => {
        if (!usedGroups) return false;
        const group = ITEM_TO_GROUP[item.name];
        return !!group && usedGroups.has(group);
    };

    return (
        <div className="flex w-full max-w-6xl flex-col gap-6">
            {/* Search */}
            <input
                type="text"
                placeholder="Cerca un oggetto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                    w-full rounded-lg border border-zinc-300 px-4 py-2
                    focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none
                    dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400
                "
            />

            {/* Item grid */}
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
                            className={`
                                relative rounded-lg p-2 transition
                                ${
                                    disabled
                                        ? "cursor-not-allowed opacity-40 grayscale"
                                        : "cursor-pointer hover:scale-105 hover:bg-zinc-800"
                                }
                            `}
                            title={
                                disabled && group
                                    ? `Only one ${group} item allowed`
                                    : item.name
                            }
                        >
                            {/* Badge UNIQUE */}
                            {disabled && group && (
                                <span className="absolute right-1 top-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                                    UNIQUE
                                </span>
                            )}

                            {/* Link disabilitato logicamente */}
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
