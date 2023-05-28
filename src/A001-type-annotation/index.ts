/* eslint-disable */

// Type Annotation (Primitive)

export const language: string = 'JavaScript'; // "" '' ``
export const age: number = 0o7744; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
export const isType: boolean = true; // true and false
export const symbol: symbol = Symbol('$'); //symbol
// export const bigInt: bigint = 10n; // bigint

// Type Anottation (Reference)

// Arrays

export const numbers1Array: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const strings1Array: Array<string> = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
];

// OR

export const numbers2Array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const strings2Array: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
];

// Objects

export type Person = {
    name: string;
    idade: number;
    isAdult?: boolean; // Optional
};

export const person: Person = {
    name: 'Soares',
    idade: 18,
    isAdult: true,
};

// Functions

export function sum(x: number, y: number) {
    return x + y;
}
