import { getChampionList } from "@/lib/api/datadragon";
import ChampionList from "../../components/ChampionList";

async function ChampionsPage() {
    const championList = await getChampionList();

    return (
        <main className="flex w-6xl flex-row flex-wrap">
            <ChampionList championList={championList} />
        </main>
    );
}

export default ChampionsPage;
