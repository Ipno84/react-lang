import { useCallback, useContext } from "react";

import { SET_MESSAGES } from "../constants";
import TranslationContext from "../context/TranslationContext";

/**
 * @typedef {Object} CurrentMessagesContext
 * @property {GenericObject} currentMessages - current localization messages
 * @property {Function} setMessages - a function to set the localization messages
 */

/**
 * A hook used to get the currently used messages.
 * It returns also a method to set messages.
 *
 * @export
 * @returns {CurrentMessagesContext}
 */
export default function useCurrentMessagesSelector() {
    const { state, dispatch } = useContext(TranslationContext);
    const setMessages = useCallback((m: GenericObject) => dispatch && dispatch({ type: SET_MESSAGES, m }), [dispatch]);
    return { currentMessages: state.m, setMessages };
}
