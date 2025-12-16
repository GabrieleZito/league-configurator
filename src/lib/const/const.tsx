import { ItemStats } from "@/types/datadragon";

export const version = "15.24.1";
export const language = "en_US";

export const STAT_LABELS: Partial<Record<keyof ItemStats, string>> = {
    FlatHPPoolMod: "Health",
    FlatArmorMod: "Armor",
    FlatPhysicalDamageMod: "Attack Damage",
    PercentAttackSpeedMod: "Attack Speed %",
    FlatMovementSpeedMod: "Move Speed",
    FlatMagicDamageMod: "Ability Power",
    FlatCritChanceMod: "Crit Chance %",
    FlatMPPoolMod: "Mana",
    FlatSpellBlockMod: "Magic Resist",
    PercentLifeStealMod: "Life Steal %",
    FlatHPRegenMod: "Health Regen",
    PercentMovementSpeedMod: "Move Speed %",
};

export const ITEM_GROUPS: Record<string, string[]> = {
    Annul: ["Verdant Barrier", "Banshee's Veil", "Edge of Night"],
    Blight: ["Abyssal Mask", "Blighting Jewel", "Bloodletter's Curse", "Cryptbloom", "Terminus", "Void Staff"],
    Boot: [
        "Berserker's Greaves",
        "Boots",
        "Boots of Swiftness",
        "Ionian Boots of Lucidity",
        "Mercury's Treads",
        "Plated Steelcaps",
        "Slightly Magical Boots",
        "Sorcerer's Shoes",
        "Symbiotic Soles",
        "Synchronized Souls",
        "Zephyr",
    ],
    Dirk: ["Serrated Dirk"],
    Elixir: ["Elixir of Iron", "Elixir of Sorcery", "Elixir of Wrath"],
    Eternity: ["Catalyst of Aeons", "Rod of Ages"],
    Fatality: ["Last Whisper", "Black Cleaver", "Lord Dominik's Regards", "Mortal Reminder", "Serylda's Grudge", "Terminus"],
    Glory: ["Dark Seal", "Mejai's Soulstealer"],
    Guardian: ["Guardian's Blade", "Guardian's Hammer", "Guardian's Horn", "Guardian's Orb"],
    Hydra: ["Tiamat", "Profane Hydra", "Ravenous Hydra", "Stridebreaker", "Titanic Hydra"],
    Immolate: ["Bami's Cinder", "Sunfire Aegis", "Hollow Radiance"],
    JungleSupport: [
        "Bounty of Worlds",
        "Bloodsong",
        "Celestial Opposition",
        "Dream Maker",
        "Gustwalker Hatchling",
        "Mosstomper Seedling",
        "Scorchclaw Pup",
        "Solstice Sleigh",
        "Zaz'Zak's Realmspike",
    ],
    Lifeline: ["Archangel's Staff", "Hexdrinker", "Immortal Shieldbow", "Maw of Malmortius", "Seraph's Embrace", "Sterak's Gage"],
    Manaflow: ["Archangel's Staff", "Fimbulwinter", "Manamune", "Muramana", "Seraph's Embrace", "Tear of the Goddess", "Winter's Approach"],
    Momentum: ["Dead Man's Plate", "Trailblazer"],
    Potion: ["Health Potion", "Refillable Potion"],
    Quicksilver: ["Mercurial Scimitar", "Quicksilver Sash"],
    Sightstone: ["Watchful Wardstone", "Vigilant Wardstone"],
    Spellblade: ["Sheen", "Bloodsong", "Iceborn Gauntlet", "Lich Bane", "Trinity Force"],
    Starter: [
        "Doran's Blade",
        "Doran's Ring",
        "Doran's Shield",
        "Gustwalker Hatchling",
        "Mosstomper Seedling",
        "Scorchclaw Pup",
        "World Atlas",
        "Runic Compass",
    ],
    Stasis: ["Seeker's Armguard", "Shattered Armguard", "Zhonya's Hourglass"],
    Trinket: ["Stealth Ward", "Oracle Lens", "Farsight Alteration"],
};

export const ITEM_TO_GROUP: Record<string, string> = Object.entries(ITEM_GROUPS).reduce(
    (acc, [group, items]) => {
        items.forEach((itemName) => {
            acc[itemName] = group;
        });
        return acc;
    },
    {} as Record<string, string>,
);
