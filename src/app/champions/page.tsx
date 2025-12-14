import { getChampionList } from "@/lib/api/datadragon";
import Image from "next/image";

async function ChampionsPage() {
    const championList = await getChampionList();

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-6xl flex-row flex-wrap items-center justify-between bg-zinc-50 px-16 py-32 sm:items-start dark:bg-black">
                {championList.map((c) => (
                    <div key={c.id}>
                        <Image
                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c.id}_0.jpg`}
                            width={150}
                            height={50}
                            alt="champion image"
                        />
                    </div>
                ))}
            </main>
        </div>
    );
}

export default ChampionsPage;
