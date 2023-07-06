export type PersonType = {
    name: string;
    lastName: string;
    fullName: () => string;
};

export class Person implements PersonType {
    constructor(public name: string, public lastName: string) {}
    fullName(): string {
        return `${this.name} ${this.lastName}`;
    }
}

const person001 = new Person('Maria', 'Fernanda da Silva');

console.log(person001.fullName());
