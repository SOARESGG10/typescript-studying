export function getDate(this: Date): string {
    return this.toLocaleString();
}

export const NOW_DATE = getDate.call(new Date());
console.log(NOW_DATE);
