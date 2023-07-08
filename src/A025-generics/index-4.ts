export interface Person {
    name: string;
    lastName: string;
    year: number;
    tecnologies: string[];
}
type GetKeyFn = <E, K extends keyof E>(object: E, key: K) => E[K];

const getObjectValue: GetKeyFn = (object, key) => object[key];

const person: Person = {
    name: 'Ângela',
    lastName: 'Marques da Silva',
    year: 21,
    tecnologies: ['Typescript', 'Java', 'Angular'],
};

const tecnologies = getObjectValue(person, 'tecnologies');
console.log(tecnologies);
