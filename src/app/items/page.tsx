import { getItemList } from "@/lib/api/datadragon";
import { version } from "@/lib/const/const";
import Image from "next/image";
import Link from "next/link";

async function ItemsPage() {
    const itemlist = await getItemList();
    return (
        <div className="flex max-w-6xl flex-row flex-wrap justify-center">
            {itemlist.map((i) => (
                <div key={i.id}>
                    <Link href={`/items/${i.id}`}>
                        <Image
                            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${i.image.full}`}
                            height={50}
                            width={50}
                            alt={i.name}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ItemsPage;
