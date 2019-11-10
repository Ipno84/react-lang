import LanguageSelect from "./LanguageSelect";
import React from "react";
import TranslationProvider from "./../../src/providers/TranslationProvider";
import Translator from "./../../src/components/Translator";

const App: React.FC = () => {
    return (
        <TranslationProvider>
            <header>
                <h1>@ipno/react-lang</h1>
                <h2>Examples</h2>
                <LanguageSelect />
            </header>
            <main>
                <section>
                    <h3>Here's a plain translation</h3>
                    <Translator s="Translations.Plain" />
                </section>
                <section>
                    <h3>Here's a plain translation with forced language</h3>
                    <Translator s="Translations.Plain" l="es" />
                </section>
                <section>
                    <h3>Here's a translation with variables</h3>
                    <Translator s="Translations.WithVariables" vs={{ name: "Marco Abate" }} />
                </section>
                <section>
                    <h3>Here's a translation with variables and forced language</h3>
                    <Translator s="Translations.WithVariables" l="es" vs={{ name: "Marco Abate" }} />
                </section>
                <section>
                    <h3>Here's a translation with variables array</h3>
                    <Translator s="Translations.WithVariablesArray" vs={["Marco Abate"]} />
                </section>
                <section>
                    <h3>Here's a translation with variables array and forced language</h3>
                    <Translator s="Translations.WithVariablesArray" l="es" vs={["Marco Abate"]} />
                </section>
            </main>
        </TranslationProvider>
    );
};

export default App;
