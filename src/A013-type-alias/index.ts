export type Age = number;
export type ColorsRGB = 'Red' | 'Green' | 'Blue';
export type ColorsCMYK = 'Cian' | 'Purple' | 'Yellow' | 'Black';
export type FavoriteColor = ColorsRGB | ColorsCMYK;
export type Person = {
    firstName: string;
    lastName: string;
    age: Age;
    favoriteColor?: FavoriteColor;
};

export const person: Person = {
    firstName: 'Rafael',
    lastName: 'Henrique',
    age: 18,
    favoriteColor: 'Blue',
};

export const setFavoriteColor = (
    person: Person,
    color: FavoriteColor,
): Person => ({
    ...person,
    favoriteColor: color,
});

console.log(setFavoriteColor(person, 'Blue'));
