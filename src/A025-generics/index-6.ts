export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
    const value = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);

    return value;
}

console.log(sum<number | string>('10', 'A', 20, 'B', '30', 40));
