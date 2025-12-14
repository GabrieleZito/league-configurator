import { getChampionList } from "@/lib/api/datadragon";
import ChampionList from "./_components/ChampionList";

async function ChampionsPage() {
    const championList = await getChampionList();

    return (
        <main className="flex max-w-6xl flex-row flex-wrap justify-center">
            <ChampionList championList={championList} />
        </main>
    );
}

export default ChampionsPage;
