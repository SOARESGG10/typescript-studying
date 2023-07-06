export function sum(a: unknown, b: unknown): number | string {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

const output01 = sum(2, 3);
console.log(output01);
