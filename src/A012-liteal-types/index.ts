// Liteal types

export let x = 10;
x = 0b1111;

export const y = 20; // Type value (20)

export let a = 100 as const; // eslint-disable-line

export const person = {
    firstName: 'João' as const,
    lastName: 'Bernado',
};

export const chooseColor = (color: 'Red' | 'Blue' | 'Green'): string => {
    return color;
};

console.log(chooseColor('Blue'));

// Module mode
export default 1;
