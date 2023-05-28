// Intersection types

export type HasName = { name: string };
export type HasLastName = { lastName: string };
export type HasAge = { age: number };
export type Person = HasName & HasLastName & HasAge;
export type AB = 'A' | 'B';
export type AC = 'A' | 'C';
export type Intersection = AB & AC;

export const person: Person = {
    name: 'Rafael',
    lastName: 'Henrique',
    age: 18,
};

console.log(person);
