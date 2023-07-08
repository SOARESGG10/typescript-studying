// Espelhamento de chaves entre tipos

type Veiculo = {
    marca: string;
    ano: number;
};

type Car = {
    brand: Veiculo['marca'];
    year: Veiculo['ano'];
    name: string;
};

const car: Car = {
    brand: 'BMW',
    year: 2021,
    name: 'BMW Series 5',
};

console.log(car);
