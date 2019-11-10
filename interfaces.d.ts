import { Dispatch, SetStateAction } from "react";

declare global {
    interface GenericObject {
        [s: string]: any;
    }
    interface State {
        l: string;
        m: GenericObject;
    }
    interface Context {
        state: State;
        dispatch: Dispatch<SetStateAction<any>> | undefined;
    }
}
