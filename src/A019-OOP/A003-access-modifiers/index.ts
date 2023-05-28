export class Collaborator {
    constructor(private name: string, private age: number) {}

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    toString(): string {
        return `Name: ${this.name} | Age: ${this.age}`;
    }
}

export class Company {
    private readonly collaborators: Collaborator[] = [];
    constructor(private name: string, private cnpj: string) {}

    getName(): string {
        return this.name;
    }
    getCnpj(): string {
        return this.cnpj;
    }

    addCollaborator(collaborator: Collaborator): void {
        this.collaborators.push(collaborator);
    }

    showCollaborators(): void {
        this.collaborators.forEach((collaborator) =>
            console.log(collaborator.toString()),
        );
    }
}

export const facebook = new Company('Facebook', '13.347.016/0001-17');
export const collaborator_1 = new Collaborator('Matheus', 26);
export const collaborator_2 = new Collaborator('Fernanda', 22);
export const collaborator_3 = new Collaborator('Carlos', 48);
export const collaborator_4 = new Collaborator('Marcia', 48);

facebook.addCollaborator(collaborator_1);
facebook.addCollaborator(collaborator_2);
facebook.addCollaborator(collaborator_3);
facebook.addCollaborator(collaborator_4);

facebook.showCollaborators();
console.log(facebook.getCnpj());
