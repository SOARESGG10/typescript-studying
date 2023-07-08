export class Task {
    constructor(public name: string, public completed: boolean) {}
}

export class List<T> {
    private index = 0;
    private elements: { [K: number]: T } = {};

    add(element: T): void {
        this.elements[this.index] = element;
        this.index++;
    }

    pop(): T | void {
        if (this.index === 0) return undefined;

        this.index--;
        const element = this.elements[this.index];
        delete this.elements[this.index];
        return element;
    }

    length(): number {
        return this.index;
    }

    items(): void {
        for (const key in this.elements) {
            console.log(this.elements[key]);
        }
    }
}

const list = new List<Task>();

list.add(new Task('Fazer o dever de casa', false));
list.add(new Task('Fazer o almoço', true));

list.items();

console.log(list.length());

list.pop();

list.items();
