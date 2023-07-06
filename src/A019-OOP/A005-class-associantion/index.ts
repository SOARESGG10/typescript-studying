export abstract class Tool {
    constructor(private _name: string) {}

    get name(): string {
        return this._name;
    }

    abstract writer(): void;
}

export class Pen extends Tool {
    writer(): void {
        console.log(`O escritor(a) está escrevendo com uma ${this.name}...`);
    }
}

export class Typerwriter extends Tool {
    writer(): void {
        console.log(`O escritor(a) está escrevendo com uma ${this.name}...`);
    }
}

export class Writer {
    constructor(private _name: string, private _tool?: Tool) {}

    get name(): string {
        return this._name;
    }

    get tool(): Tool {
        return this._tool ? this._tool : null;
    }

    set tool(tool: Tool) {
        this._tool = tool;
    }

    writer(): void {
        if (!this._tool) {
            console.log('O escritor(a) não consegue escrever sem uma ferramenta...');
            return;
        }

        this._tool.writer();
    }
}

const writer001 = new Writer('Machado de Assis', new Pen('Caneta'));
const writer002 = new Writer('Mário de Andrade', new Typerwriter('Máquina de escrever'));

writer001.writer();
writer002.writer();
