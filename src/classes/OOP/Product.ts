import {randomUUID} from "crypto";

abstract  class Product {
    protected readonly  _id: string = randomUUID().toString();
    public  constructor(
        protected _name: string,
        protected _price: number,
        protected _description: string,
        protected _image: string,
        protected _tags: string[],
        protected _quantity: number,
        protected _shippingCost?: number
    ) { }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get tags(): string[] {
        return this._tags;
    }

    set tags(value: string[]) {
        this._tags = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    abstract getQuantity(): Promise<number>;
}

export default  Product;