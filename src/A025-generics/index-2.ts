const timeout = () => Math.floor(Math.random() * (1 + 10)) * 1000;

const numbersArray: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(numbersArray);

async function promiseAsync() {
    return 1;
}

function myPromise(): Promise<number> {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve(1);
        }, timeout());
    });
}

promiseAsync().then((data) => console.log(data + 1));
myPromise().then((result) => console.log(result + 20));
