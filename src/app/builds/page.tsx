import BuildConfigurator from "@/components/BuildConfigurator";
import { getItemList } from "@/lib/api/datadragon";

export default async function BuildsPage() {
    const itemList = await getItemList();
    return (
        <div className="min-h-screen w-6xl bg-zinc-50 p-6 dark:bg-black">
            <BuildConfigurator items={itemList} />
        </div>
    );
}
