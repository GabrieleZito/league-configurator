import { getChampionList } from "@/lib/api/datadragon";

async function ChampionsPage() {
    const championList = await getChampionList();

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
                {championList.map((c) => (
                    <div>{c.id}</div>
                ))}
            </main>
        </div>
    );
}

export default ChampionsPage;
