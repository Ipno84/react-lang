import React from "react";
import { State } from "interfaces";
import TranslationContext from "./../context/TranslationContext";
import { defaultState } from "./../hooks/useTranslationReducer";
import useTranslationReducer from "./../hooks/useTranslationReducer";

interface Props {
    initialState?: State;
}
/**
 * The Translation Provider.
 * It has to wrap the application in order to manage app localization
 * You can pass an initialState to set default localization data
 *
 * @param {*} { children, initialState }
 */
const TranslationProvider: React.FC<Props> = ({ children, initialState }) => {
    const [state, dispatch] = useTranslationReducer(initialState ? initialState : defaultState);
    return <TranslationContext.Provider value={{ state, dispatch }}>{children}</TranslationContext.Provider>;
};

export default TranslationProvider;
