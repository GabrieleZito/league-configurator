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
