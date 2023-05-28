// Type Object

export const objectA: {
    keyA: string;
    keyB: string;
    keyC?: string;
    [key: string]: unknown;
} = {
    keyA: 'Value A',
    keyB: 'Value B',
};

objectA.keyC = 'Value C';
objectA.keyD = 'Value D';

console.log(objectA);
