export type VerifyUserFn = (user: User, sentValue: User) => boolean;
export type User = { username: string; password: string };

export const verifyUser: VerifyUserFn = (user, sentValue): boolean => {
    return (
        user.username === sentValue.username &&
        user.password === sentValue.password
    );
};

export const bdUser = { username: 'soaresgg', password: '12345678' };
export const setUser = {
    username: 'soaresgg',
    password: '12345678',
};

export const loggedIn = verifyUser(bdUser, setUser);
console.log(loggedIn);
