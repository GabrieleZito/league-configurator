// components/build/StatsRecap.tsx

import { Item } from "@/types/datadragon";

export default function StatsRecap({ build }: { build: (Item | null)[] }) {
    const totalStats = build.reduce<Record<string, number>>((acc, item) => {
        if (!item?.stats) return acc;

        for (const [key, value] of Object.entries(item.stats)) {
            acc[key] = (acc[key] ?? 0) + value;
        }
        return acc;
    }, {});

    return (
        <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold">Stats recap</h3>
            <div className="grid grid-cols-4 gap-2 text-sm">
                {Object.entries(totalStats).map(([stat, value]) => (
                    <div key={stat} className="rounded bg-zinc-100 p-2 dark:bg-zinc-800">
                        {stat}: <strong>{value}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}
