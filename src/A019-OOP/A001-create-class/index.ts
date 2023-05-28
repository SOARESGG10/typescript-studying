export abstract class Animal {
    constructor(public name: string) {}
    abstract makeNoise(): void;
}

export class Dog extends Animal {
    makeNoise(): void {
        console.log(`${this.name} fazendo AU AU...`);
    }
}
export class Cat extends Animal {
    makeNoise(): void {
        console.log(`${this.name} fazendo MIAU...`);
    }
}

export class AnimalSounds {
    public static playSound(animal: Animal): void {
        animal.makeNoise();
    }
}

export const dog: Animal = new Dog('Rex');
export const cat: Animal = new Cat('David');
AnimalSounds.playSound(dog);
AnimalSounds.playSound(cat);
