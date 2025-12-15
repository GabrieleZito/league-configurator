import { Item } from "@/types/datadragon";

export default function ItemList({ items }: { items: Item[] }) {
    return (
        <div className="grid grid-cols-8 gap-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData("item", JSON.stringify(item))}
                    className="flex cursor-grab items-center justify-center rounded-lg bg-white p-2 shadow hover:scale-105 dark:bg-zinc-900"
                >
                    <img src={`https://ddragon.leagueoflegends.com/cdn/15.24.1/img/item/${item.id}.png`} alt={item.name} className="w-24" />
                </div>
            ))}
        </div>
    );
}
