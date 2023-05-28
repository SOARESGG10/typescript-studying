// ---= Recommended =-----

// Check is exists body (conditional)
export const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion (as)
export const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

export const input = document.querySelector('.input') as HTMLInputElement;

input.value = 'TESTE';

// ---= Not Recommended =-----

// Non-null assertion (!)
export const body2 = document.querySelector('body')!;
body2.style.background = 'red';

export const body4 = document.querySelector('body') as unknown as number;
