// Type Null and Undefined

export let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function CreatePerson(
    firstName: string,
    lastName?: string,
): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

export function squareOf(x: any) {
    if (typeof x === 'number') return x * x;
    return null;
}

export const person1 = CreatePerson('Rafael');
console.log(person1);
