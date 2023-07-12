export type Person = {
    name: string;
    lastName: string;
    age: number;
    techologies?: string[];
};

// Record

const object001: Record<string, string | number> = {
    name: 'Cláudia',
    lastName: 'Leite',
    age: 43,
};

console.log(object001);

// ---------------------------------------------------

// Required

type PersonRequired = Required<Person>;

const person001: PersonRequired = {
    name: 'Marcos',
    lastName: 'Bernando',
    age: 35,
    techologies: ['Vue', 'NodeJS', 'MongoDB', 'Microsserviços'],
};

console.log(person001);

// ---------------------------------------------------

// Partial

type PersonPartial = Partial<PersonRequired>;

const person002: PersonPartial = {
    name: 'David',
    lastName: 'Henrique',
    age: 42,
};

person002.age = 41;

console.log(person002);

// -----------------------------------------------------

// Readonly

type PersonReadonly = Readonly<PersonRequired>;

const person003: PersonReadonly = {
    name: 'Débora',
    lastName: 'Sanchez',
    age: 18,
    techologies: ['Java', 'Kotlin', 'Angular'],
};

console.log(person003);

// -----------------------------------------------------

// Pick

type PersonPick = Pick<PersonRequired, 'name' | 'age'>;

const person004: PersonPick = { name: 'João', age: 25 };

console.log(person004);

// -----------------------------------------------------

// Extract and Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type ExcludeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

//

type AccountMongo = {
    _id: string;
    name: string;
    age: number;
};

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };

const accountMongo: AccountMongo = {
    _id: 'askfduia5-askdnjas4-vnzjas',
    name: 'Roby',
    age: 22,
};

const mapAccount = (account: AccountMongo): AccountAPI => {
    const { _id, ...accountData } = account;

    return { id: _id, ...accountData };
};

const accountAPI = mapAccount(accountMongo);
console.log(accountAPI);
