import { Item } from "@/types/datadragon";

interface Props {
    build: (Item | null)[];
    onDrop: (item: Item, index: number) => void;
    onRemove: (index: number) => void;
}

export default function BuildSlots({ build, onDrop, onRemove }: Props) {
    return (
        <div className="grid grid-cols-6 gap-4">
            {build.map((item, i) => (
                <div
                    key={i}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        const data = e.dataTransfer.getData("item");
                        if (!data) return;
                        onDrop(JSON.parse(data), i);
                    }}
                    className="flex h-24 items-center justify-center rounded-lg border border-dashed border-zinc-400 bg-zinc-100 dark:bg-zinc-800"
                >
                    {item ? (
                        <>
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/15.24.1/img/item/${item.id}.png`}
                                alt={item.name}
                                className="h-16 w-16 cursor-pointer"
                                onClick={() => onRemove(i)}
                            />

                            {/* ❌ overlay */}
                            <button
                                onClick={() => onRemove(i)}
                                className="absolute top-1 right-1 rounded-full bg-black/70 px-2 py-1 text-xs text-white hover:bg-red-600"
                            >
                                ✕
                            </button>
                        </>
                    ) : (
                        <span className="text-sm text-zinc-500">Empty</span>
                    )}
                </div>
            ))}
        </div>
    );
}
