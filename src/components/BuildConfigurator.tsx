"use client";
import { Item } from "@/types/datadragon";
import { useState } from "react";
import BuildSlots from "./BuildSlots";
import StatsRecap from "./StatsRecap";
import ItemList from "./ItemList";

interface Props {
    items: Item[];
}

function BuildConfigurator({ items }: Props) {
    const [build, setBuild] = useState<(Item | null)[]>(Array(6).fill(null));

    const addItem = (item: Item, index: number) => {
        setBuild((prev) => {
            const copy = [...prev];
            copy[index] = item;
            return copy;
        });
    };

    const removeItem = (index: number) => {
        setBuild((prev) => {
            const copy = [...prev];
            copy[index] = null;
            return copy;
        });
    };

    return (
        <div className="flex flex-col gap-8">
            {/* TOP */}
            <div className="rounded-xl bg-white p-6 shadow dark:bg-zinc-900">
                <BuildSlots build={build} onDrop={addItem} onRemove={removeItem}/>
                <StatsRecap build={build} />
            </div>

            {/* BOTTOM */}
            <ItemList items={items} />
        </div>
    );
}

export default BuildConfigurator;
