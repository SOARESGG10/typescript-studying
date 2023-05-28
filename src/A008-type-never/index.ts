// Type never

export function createError(error: string): never {
    throw new Error(error);
}

createError('ERROR');
