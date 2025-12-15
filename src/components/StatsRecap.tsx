import { Item } from "@/types/datadragon";

interface Props {
    build: (Item | null)[];
}

export default function StatsRecap({ build }: Props) {
    // somma stats e gold
    const { totalStats, totalGold } = build.reduce(
        (acc, item) => {
            if (!item) return acc;

            // somma le stats
            if (item.stats) {
                for (const [key, value] of Object.entries(item.stats)) {
                    acc.totalStats[key] = (acc.totalStats[key] ?? 0) + value;
                }
            }

            // somma il gold
            if (item.gold?.total) {
                acc.totalGold += item.gold.total;
            }

            return acc;
        },
        { totalStats: {} as Record<string, number>, totalGold: 0 },
    );

    return (
        <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold">Build recap</h3>

            {/* Gold totale */}
            <div className="mb-2 rounded bg-amber-100 p-2 font-semibold dark:bg-amber-900">
                Gold totale: <strong>{totalGold}</strong>
            </div>

            {/* Stats */}
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
