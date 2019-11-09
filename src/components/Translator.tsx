import React, { memo, useMemo } from "react";

import { GenericObject } from "interfaces";
import useTranslationSelector from "../hooks/useTranslationSelector";

interface Props {
    /**
     * Property that indicates a dotted string from the messages object.
     * So, if you want to get property value bar from the object below
     * {
     *      foo: {
     *          bar: 'fooBar'
     *      }
     * }
     * you need to pass 'foo.bar'
     */
    s: string;
    /**
     * Indicates the language string (i.e. 'en').
     * You can pass this param if you want to get a translation from a language different from the current one
     */
    l?: string;
    /**
     * A localized string can contains variables.
     * If you want to replace one of them with a specific value you need to pass that value in this param
     */
    vs?: GenericObject;
    fs?: string;
}
/**
 * A component for getting localizated string
 *
 * @param {*} { s, l, vs, fs }
 */
const Translator: React.FC<Props> = ({ s, l, vs, fs }) => {
    const translation = useTranslationSelector({ s, l, vs, fs });
    return useMemo(() => {
        return <>{translation}</>;
    }, [translation]);
};

export default memo(Translator);
