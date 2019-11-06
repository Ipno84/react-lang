import { SET_LANG, SET_MESSAGES } from "../constants";

import { State } from "interfaces";
import { useReducer } from "react";

let defaultState =
    (window as any).reactLang && (window as any).reactLang.l && (window as any).reactLang.m ? (window as any).reactLang : { l: "en", m: { en: {} } };

export default function useTranslationReducer(initialState: State = defaultState) {
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
