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
    PercentMovementSpeedMod: "Move Speed %"
};
