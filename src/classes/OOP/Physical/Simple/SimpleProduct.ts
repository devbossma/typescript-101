import Product from "../../Product.js";
import {type Shippable, type ShippableUnits, type Unit, VolumeUnits, WeightUnits} from "../../Shippable.js";

class SimpleProduct extends Product implements Shippable{
    unit: Unit;

    constructor(
        protected _name: string,
        protected _price: number,
        protected _description: string,
        protected _image: string,
        protected _tags: string[],
        protected _quantity: number,
        protected _shippingCost: number,
        unit: Unit,
        ) {
        super( _name, _price, _description, _image, _tags, _quantity, _shippingCost);
        this.unit = unit;
    }
    calculateShipping(): number {
        return  this._shippingCost * this._quantity;
    }

    getQuantity(): Promise<number> {
        return Promise.resolve(0);
    }

    private getShippingUnit(unit: Unit): ShippableUnits {
        switch (unit.kind) {
            case "weight":
                return WeightUnits.GRAIN
            case "volume":
                return VolumeUnits.FLUID_OUNCE
            default:
                return unit;
        }

    }

}

export default SimpleProduct;