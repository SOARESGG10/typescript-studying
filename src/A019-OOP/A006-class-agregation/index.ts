export class Product {
    constructor(public name: string, public price: number) {}
}

export class ShoppingCart {
    private readonly products: Product[] = [];

    addProduct(...products: Product[]): void {
        products.forEach((product) => this.products.push(product));
    }

    quantityProducts(): number {
        return this.products.length;
    }

    totalProducts(): number {
        return this.products.reduce((accumulator, product) => accumulator + product.price, 0);
    }
}

const myShoppingCart = new ShoppingCart();
const product01 = new Product('Xbox Series X', 3899.99);
const product02 = new Product('Playstation 5', 5999.99);
const product03 = new Product('Processador AMD Ryzen 5800x', 1899.99);

myShoppingCart.addProduct(product01, product02, product03);

console.log(myShoppingCart.quantityProducts());
console.log(myShoppingCart.totalProducts().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
