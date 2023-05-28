// Type Void

export const noReturn = (...args: string[]): void => {
    console.log(args.join(' '));
};

noReturn('Luiz', 'Matheus', 'Rafael');
