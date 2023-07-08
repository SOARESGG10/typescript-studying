type Adder = {
    (x: number): number;
    (x: number, y: number): number;
    (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]): number => {
    if (args.length > 0) return args.reduce((sum, number) => sum + number) + x + (y || 0);
    return x + (y || 0);
};

console.log(adder(5));
console.log(adder(5, 15));
console.log(adder(5, 7, 9, 3, 6));
