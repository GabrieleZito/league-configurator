export default async function page({ params }: { params: { championId: string } }) {
    const { championId } = params;
    console.log(championId);
    return <div>page</div>;
}
