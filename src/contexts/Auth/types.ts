import { Dispatch, SetStateAction } from "react";

import { IUser } from "../../types/User";

export interface ISignIn {
    email: string | number;
    password: string;
}

export interface IProvider {
    children?: React.ReactNode;
}

export interface IContext {
    signOut: () => void;
    signIn: ({ email, password }: ISignIn) => Promise<void>;
    user: IUser;
    token: string | null;
    signed: boolean;
    isGlobalLoading: boolean;
    setIsGlobalLoading: Dispatch<SetStateAction<boolean>>;
}
