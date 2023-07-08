export class Calculator {
    constructor(public number: number) {}

    add(number: number): this {
        this.number += number;
        return this;
    }
    sub(number: number): this {
        this.number -= number;
        return this;
    }
    mult(number: number): this {
        this.number *= number;
        return this;
    }
    div(number: number): this {
        this.number /= number;
        return this;
    }
}

export class ScientificCalculator extends Calculator {
    constructor(public number: number) {
        super(number);
    }

    pow(number: number): this {
        this.number **= number;
        return this;
    }
}

const calculator = new ScientificCalculator(15);

const result = calculator.add(10).add(15).div(4).pow(2);

console.log(result);

// Builder = GoF
export class RequestBuilder {
    private method: 'GET' | 'POST' | null = null;
    private url: string | null = null;

    setMethod(method: 'GET' | 'POST'): this {
        this.method = method;
        return this;
    }
    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log(`Enviado dados via ${this.method} para ${this.url}`);
    }
}

const request = new RequestBuilder();

request.setMethod('GET').setUrl('https://www.google.com').send();
