interface Weight {
    kind: "weight"
    unit: WeightUnits
}

interface Volume {
    kind: "volume"
    unit:VolumeUnits
}

export  enum VolumeUnits {
    MILLILITERS= "mL",
    LETTER= "L",
    GALLON = "gal",
    // Fluid Ounce
    FLUID_OUNCE= "fl oz",
    QUART = "qt",
}

export enum WeightUnits {
    MICROGRAM= "ug",
    MILLIGRAM= "mg",
    GRAM = "g",
    KILOGRAM = "kg",
    TONNE = "t",
    GRAIN =  "gr",
    OUNCE = "oz",
    POUND = "lb",
    SHORT_TON = "US",
    LONG_TON = "UK",
}

type Unit = Weight | Volume;
type ShippableUnits = WeightUnits | VolumeUnits;

interface Shippable {
    unit: Unit;
    calculateShipping(): number;
}


export type { Shippable, Unit, Volume, Weight, ShippableUnits};