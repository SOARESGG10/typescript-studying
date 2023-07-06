interface Person {
    readonly name: string;
}

interface Person {
    readonly lastName: string;
    address: Address;
    techologies: string[];
}

interface Address {
    city: string;
    state: string;
    street: string;
    number: number;
}

// Merging intefaces

const person: Person = {
    name: 'Débora',
    lastName: 'Gomes',
    address: { city: 'Salvador', state: 'Bahia', street: 'Alameda das Espatódeas', number: 6 },
    techologies: ['Typescript', 'Java'],
};

console.log(person);
