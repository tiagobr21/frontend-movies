export interface IPassword {
    password: string;
}

export interface IUserSignIn extends IPassword {
    email: string | number;
}

export interface IRecoverPassword extends IPassword {
    token: string;
}
