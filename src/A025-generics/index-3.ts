// Generics in interfaces and types

export interface Person<T = string, U = number> {
    name: T;
    lastName: T;
    year: U;
}

export type TypePerson<T = string, U = number> = {
    name: T;
    lastName: T;
    year: U;
};

const student: Person = {
    name: 'Luana',
    lastName: 'Martines',
    year: 19,
};

console.log(student);
