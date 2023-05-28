// Type Tuple

/**
 * tuple + readonly = immutable
 * tuple[x] + ? = optional
 */

// tuples

export const clientData1: readonly [number, string] = [2, 'Soares'];
export const clientData2: [number, string, string] = [2, 'Matheus', 'Henrique'];
export const clientData3: [number, string, string?] = [
    2,
    'Matheus',
    'Henrique',
]; // clientData3[2] Optional
export const clientData4: [number, string, ...string[]] = [
    2,
    'Matheus',
    'Henrique',
];

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);
console.log(clientData4);
