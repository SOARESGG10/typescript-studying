export type MapStringsCallback = (value: string) => string;

export function mapStrings(
    array: string[],
    callbackfn: MapStringsCallback,
): string[] {
    const newArray: string[] = [];

    for (const string of array) {
        newArray.push(callbackfn(string));
    }

    return newArray;
}

export const abc = ['a', 'b', 'c'];

export const abcMapped = mapStrings(abc, (value) => value.toUpperCase());

console.log(abc);
console.log(abcMapped);
