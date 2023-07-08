export type FilterCallback<T> = (value: T, index?: number, array?: T[]) => unknown;

function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
    const newArray = [];

    for (let index = 0; index < array.length; index++) {
        if (callbackfn(array[index])) {
            newArray.push(array[index]);
        }
    }

    return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arrat.filter() Javacript

const filterNumberArray = array.filter((value) => value > 5);
console.log(filterNumberArray);

// My filter

const myFilterNumberArray = myFilter(array, (value) => value > 5);
console.log(myFilterNumberArray);
