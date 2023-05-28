// Type Enum

export enum Colors {
    RED,
    BLUE,
    YELLOW,
    PINK,
    GREEN,
}

export const chooseColor = (color: Colors): void => {
    console.log(Colors[color]);
};

chooseColor(2);
