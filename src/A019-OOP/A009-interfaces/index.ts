export interface IPerson {
    name: string;
    lastName: string;
    fullName(): string;
}

export class Person implements IPerson {
    constructor(public name: string, public lastName: string) {}
    fullName(): string {
        return `${this.name} ${this.lastName}`;
    }
}
