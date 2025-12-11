export interface DDResponse<T> {
    type: string;
    format: string;
    version: string;
    data: Record<string, T>;
}

export interface ChampionSummary {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    image: Image;
    tags: string[];
    partype: string;
    stats: Stats;
}

export interface ChampionDetails {
    id: string;
    key: string;
    name: string;
    title: string;
    image: Image;
    skins: Skin[];
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    partype: string;
    stats: Stats;
    spells: Spell[];
    passive: Passive;
    recommend: undefined[];
}

interface Image {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

interface Skin {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}

interface Stats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

interface Spell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: Leveltip;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: Datavalues;
    effect: number[] | undefined[];
    effectBurn: string | undefined[];
    vars: any[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: Image;
    resource: string;
}
interface Leveltip {
    label: string[];
    effect: string[];
}
interface Datavalues {}

interface Passive {
    name: string;
    description: string;
    image: Image;
}
