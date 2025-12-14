import { getChampionDetails } from "@/lib/api/datadragon";
import { notFound } from "next/navigation";

interface Props {
    championId: string;
}

export default async function page({ params }: { params: Props }) {
    const { championId } = await params;
    const championDetails = await getChampionDetails(championId);
    console.log(championDetails);

    if (!championDetails) {
        return notFound();
    }

    return <main className="flex max-w-6xl flex-row flex-wrap justify-center">{championDetails.id}</main>;
}
