export default function Home() {
    const pages = [
        {
            name: "Champions",
            description:
                "Qui puoi vedere la lista completa dei campioni, esplorare le loro abilità e lore, e accedere ai dettagli di ciascun campione.",
        },
        {
            name: "Items",
            description: "In questa sezione puoi consultare tutti gli oggetti del gioco, con statistiche e costi.",
        },
        {
            name: "Builds",
            description:
                "Qui puoi creare e configurare le tue build personali, trascinando gli oggetti nella build e visualizzando le statistiche complessive.",
        },
    ];

    return (
        <main className="flex flex-col items-center gap-10 bg-zinc-50 px-6 py-12 dark:bg-black">
            <h1 className="mb-16 text-center text-4xl font-bold">Benvenuto nel League Configurator</h1>
            <div className="relative grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
                {pages.map((page) => (
                    <div key={page.name} className="relative flex flex-col items-center">
                        <div className="w-full rounded-xl bg-white p-6 text-center shadow dark:bg-zinc-900">
                            <h2 className="mb-4 text-2xl font-semibold">{page.name}</h2>
                            <p className="text-sm text-zinc-700 dark:text-zinc-300">{page.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
