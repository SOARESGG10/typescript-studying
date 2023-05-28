// Type Array (Array<T> - T[])

export function argsMultiply(...args: Array<number>): number {
    return args.reduce((acc, value) => acc * value, 1);
}

export function stringConcat(...args: string[]): string {
    return args.reduce((acc, value) => acc + value);
}

export function stringUpperCase(...args: string[]): string[] {
    return args.map((value) => value.toUpperCase());
}

export const outputArgsNumber = argsMultiply(2, 4, 6, 8, 10);
export const outputArgsString = stringConcat('R', 'a', 'f', 'a', 'e', 'l');
export const outputArgsStringUpperCase = stringUpperCase(
    'r',
    'a',
    'f',
    'a',
    'e',
    'l',
);

console.log(outputArgsNumber);
console.log(outputArgsString);
console.log(outputArgsStringUpperCase);
