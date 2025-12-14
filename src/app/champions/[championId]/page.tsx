interface Props {
    championId: string;
}

export default async function page({ params }: { params: Props }) {
    const { championId } = await params;
    console.log(championId);
    return <div>page</div>;
}
