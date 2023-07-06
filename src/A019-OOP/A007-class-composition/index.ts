export class Motor {
    on(): void {
        console.log('Motor está ligando...');
    }

    speed(): void {
        console.log('Motor está acelerando...');
    }

    stop(): void {
        console.log('Motor está parando...');
    }
}

export class Car {
    private readonly motor: Motor = new Motor();

    on(): void {
        this.motor.on();
    }

    speed(): void {
        this.motor.speed();
    }

    stop(): void {
        this.motor.stop();
    }
}

const car001 = new Car();

car001.on();
