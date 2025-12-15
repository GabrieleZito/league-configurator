import { getItemList } from "@/lib/api/datadragon";
import ItemList from "./_components/ItemList";

async function ItemsPage() {
    const itemlist = await getItemList();
    return <ItemList itemlist={itemlist} />;
}

export default ItemsPage;
