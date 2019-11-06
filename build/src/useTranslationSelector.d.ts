import { GenericObject } from "interfaces";
interface Args {
    s: string;
    l?: string;
    vs?: GenericObject;
}
export default function useTranslationSelector({ s, l, vs }: Args): any;
export {};
