"use client";
import { Item } from "@/types/datadragon";
import { useState } from "react";
import BuildSlots from "./BuildSlots";
import StatsRecap from "./StatsRecap";
import ItemList from "./ItemList";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface Props {
    items: Item[];
}

const MAX_BUILDS = 3;
const STORAGE_KEY = "lol_builds";

function BuildConfigurator({ items }: Props) {
    const [builds, setBuilds] = useLocalStorage<(Item | null)[][]>(STORAGE_KEY, Array(MAX_BUILDS).fill(Array(6).fill(null)));
    const [currentBuildIndex, setCurrentBuildIndex] = useState(0);

    const addItem = (item: Item, index: number) => {
        setBuilds((prev) => {
            const copy = [...prev];
            const buildCopy = [...copy[currentBuildIndex]];
            buildCopy[index] = item;
            copy[currentBuildIndex] = buildCopy;
            return copy;
        });
    };

    const removeItem = (index: number) => {
        setBuilds((prev) => {
            const copy = [...prev];
            const buildCopy = [...copy[currentBuildIndex]];
            buildCopy[index] = null;
            copy[currentBuildIndex] = buildCopy;
            return copy;
        });
    };

    const switchBuild = (index: number) => setCurrentBuildIndex(index);
    const currentBuild = builds[currentBuildIndex];

    return (
        <div className="flex flex-col gap-8">
            <div className="rounded-xl bg-white p-6 shadow dark:bg-zinc-900">
                {/* Selettore build */}
                <div className="mb-4 flex gap-4">
                    {Array(MAX_BUILDS)
                        .fill(null)
                        .map((_, i) => (
                            <div
                                key={i}
                                onClick={() => switchBuild(i)}
                                className={`flex h-15 w-15 cursor-pointer items-center justify-center rounded-lg border ${
                                    currentBuildIndex === i
                                        ? "border-amber-500 bg-amber-100 dark:bg-amber-900"
                                        : "border-zinc-400 bg-zinc-100 dark:bg-zinc-800"
                                }`}
                            >
                                {i + 1}
                            </div>
                        ))}
                </div>

                <BuildSlots build={currentBuild} onDrop={addItem} onRemove={removeItem} />
                <StatsRecap build={currentBuild} />
            </div>

            <ItemList items={items} />
        </div>
    );
}

export default BuildConfigurator;
