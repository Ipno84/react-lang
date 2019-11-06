import React, { memo, useMemo } from "react";

import { GenericObject } from "interfaces";
import useTranslationSelector from "../hooks/useTranslationSelector";

interface Props {
    s: string;
    l?: string;
    vs?: GenericObject;
}

const Translator: React.FC<Props> = ({ s, l, vs }) => {
    const translation = useTranslationSelector({ s, l, vs });
    return useMemo(() => {
        return <>{translation}</>;
    }, [translation]);
};

export default memo(Translator);
