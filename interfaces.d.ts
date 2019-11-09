import { Dispatch, SetStateAction } from "react";

export interface GenericObject {
    [s: string]: any;
}

export interface State {
    l: string;
    m: GenericObject;
}

export interface Context {
    state: State;
    dispatch: Dispatch<SetStateAction<any>> | undefined;
}
