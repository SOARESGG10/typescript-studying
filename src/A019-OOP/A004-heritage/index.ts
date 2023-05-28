export class Person {
    constructor(
        private firstName: string,
        private lastName: string,
        private age: number,
        protected CPF: string,
    ) {}

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAge(): number {
        return this.age;
    }

    getCPF(): string {
        return this.CPF;
    }

    getFullName(): string {
        return `[Person] ${this.firstName} ${this.lastName}`;
    }
}

export class Student extends Person {
    constructor(
        private _registration: string,
        fistName: string,
        lastName: string,
        age: number,
        CPF: string,
    ) {
        super(fistName, lastName, age, CPF);
    }

    get registration(): string {
        return this._registration;
    }

    getFullName(): string {
        return `[Student] ${this.getFirstName()} ${this.getLastName()}`;
    }
}

export class Client extends Person {
    constructor(
        fistName: string,
        lastName: string,
        private email: string,
        age: number,
        CPF: string,
    ) {
        super(fistName, lastName, age, CPF);
    }

    getEmail(): string {
        return this.email;
    }

    getFullName(): string {
        return `[Client] ${this.getFirstName()} ${this.getLastName()}`;
    }
}

export const persons: Person[] = [];

export const person001 = new Person(
    'Marcela',
    'Rodrigues',
    27,
    '726.541.856.99',
);
export const student001 = new Student(
    '254163.25.543.68',
    'Carlos',
    'Almeida',
    17,
    '843.621.954.21',
);

export const client001 = new Client(
    'Marcos',
    'Fernandes',
    'marcos.fernandes@gmail.com',
    37,
    '245.854.156.66',
);

persons.push(person001, student001, client001);

export const olderPerson = persons.filter(
    (person: Person) => person.getAge() < 18,
);
console.log(olderPerson);
