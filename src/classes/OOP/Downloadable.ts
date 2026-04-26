interface Downloadable {
    size: number;
    mimeType: string;
    filePath: string;
    download(): Promise<void>;
}

export type {Downloadable};