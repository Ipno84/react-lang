import { SET_LANG, SET_MESSAGES } from "../constants";

import { State } from "interfaces";
import { useReducer } from "react";

export const defaultState =
    (window as any).reactLang && (window as any).reactLang.l && (window as any).reactLang.m ? (window as any).reactLang : { l: "en", m: { en: {} } };

/**
 * A reducer hook for handling localization data
 *
 * @export
 * @param {State} [initialState=defaultState]
 * @returns {[State, Dispatch<SetStateAction<any>> | undefined]}
 */
export default function useTranslationReducer(initialState: State) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case SET_LANG:
                return {
                    ...state,
                    l: action.l
                };
            case SET_MESSAGES:
                return {
                    ...state,
                    m: action.m
                };
            default:
                return state;
        }
    }, initialState);
    return [state, dispatch];
}
