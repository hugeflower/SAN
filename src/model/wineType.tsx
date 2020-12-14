export enum WineType{
    Red = 'Red',
    White = 'White',
    Rose = 'Rose',
    Orange = 'Orange',
    Sparkling = 'Sparkling'
}

export function everyWineType(): string[] {
    let wineTypes: string[] = [];
    for (let wineType in WineType) {
        wineTypes.push(wineType);
    }
    return wineTypes;
}