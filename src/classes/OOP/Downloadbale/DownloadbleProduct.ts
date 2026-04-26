import Product from "../Product.js";
import type {Downloadable} from "../Downloadable.js";

class DownloadbaleProduct extends  Product implements Downloadable{


    constructor(
        protected _name: string,
        protected _price: number,
        protected _description: string,
        protected _image: string,
        protected _tags: string[],
        protected _quantity: number,

        readonly _size: number,
        readonly _mimeType: string,
        readonly _filePath: string
    ) {
        super( _name, _price, _description, _image, _tags, _quantity);
    }

    get size(): number {
        return this._size;
    }

    get mimeType(): string {
        return this._mimeType;
    }

    get filePath(): string {
        return this._filePath;
    }

    async download(): Promise<void> {
        return await this.startDownloadable(this._filePath)
    }

    getQuantity(): Promise<number> {
        return Promise.resolve(0);
    }

    private async startDownloadable(filePath: string): Promise<void> {
        // Download Handling
    }

}

export default DownloadbaleProduct;