[![install size](https://badgen.net/bundlephobia/minzip/@ipno/react-lang)](https://bundlephobia.com/result?p=@ipno/react-lang)
[![license](https://badgen.net/github/license/Ipno84/react-lang)](https://github.com/Ipno84/react-lang)
[![license](https://badgen.net/github/stars/Ipno84/react-lang)](https://github.com/Ipno84/react-lang)
[![license](https://badgen.net/github/forks/Ipno84/react-lang)](https://github.com/Ipno84/react-lang)
[![license](https://badgen.net/github/issues/Ipno84/react-lang)](https://github.com/Ipno84/react-lang)
[![version](https://badgen.net/npm/v/@ipno/react-lang)](https://www.npmjs.com/package/@ipno/react-lang)
[![version](https://badgen.net/npm/dw/@ipno/react-lang)](https://www.npmjs.com/package/@ipno/react-lang)
[![version](https://badgen.net/npm/dm/@ipno/react-lang)](https://www.npmjs.com/package/@ipno/react-lang)
[![version](https://badgen.net/npm/dy/@ipno/react-lang)](https://www.npmjs.com/package/@ipno/react-lang)
[![version](https://badgen.net/npm/dt/@ipno/react-lang)](https://www.npmjs.com/package/@ipno/react-lang)

React library for manage app localization.

# Installation

    npm install --save @ipno/react-lang

# Documentation

This module is based on react hooks so you need react@16.8.0 at least to make it works.

## Getting Started

### Step 1 - Include Provider

Wrap your application with the [Provider](#translationprovider)

### Step 2 - Set data

If you don't set translation data (current language and translation messages) you won't have nothing to show to your user. You can choose to load default data or you can set them later.
At the application bootstrap default data will be set as you can see in the object below if you don't set default ones.

```js
{
    l: "en",
    m: {
        en: {}
    }
}
```

> **_l_**: is a string and indicates the current language (en, english by default)
> **_m_**: is an object that contains nested objects with the localized strings your application need. As you can see in the default object,
> all the root members of this object have to be string indicating the
> current language.

To set default data you can choose between two paths.

1. **Global Variable** - You can insert all the data you need at application bootstrap into a global variable named **_reactLang_** under _window_ object.
2. **TranslationProvider initialState** - you can pass a prop as an object (formatted like the default one) named initialState.

If you don't want to set data using the methods above you can also use the hooks provided in the _Hooks Section_ of this documentation.

### Step 3 - Translator Component

The [_Translator_](#translator) Component is the most easiest way to render localized strings because it's ready to use and already optimized, but you can use your own ways. The library expose all the methods you need to implements your own hooks and components.

## Components

### TranslationProvider

TranslationProvider allow you to create you application translation context and to set initial data. It can be included in your app entry point using the imports below

```jsx
import { TranslationProvider } from "react-lang";
import TranslationProvider from "react-lang/providers/TranslationProvider";
```

You can also pass an initial state to your TranslationProvider in order to start your application with everything you need to localize your strings.

```jsx
import initialTranslationState from "path/to/initialTranslationState";

const App = ({ children }) => {
    return <TranslationProvider initialState={initialTranslationState}>{children}</TranslationProvider>;
};
```

### Translator

If you choose the Translator Component way to render you localized strings, here's how you can include it into you react application.

```jsx
import Translator from "react-lang/components/Translator";
import Translator from "react-lang";
```

Translator component accepts 3 props

1. **_s_** - [string - mandatory] - It indicates a dotted string from the messages object. So, if you want to get property value bar from the object below
   { foo: { bar: 'fooBar' } }
   you need to pass 'foo.bar'
2. **_l_** - [string] - Indicates the language string (i.e. 'en'). You can pass this param if you want to get a translation from a language different from the current one
3. **_vs_** - [object|array] - A localized string can contains variables. If you want to replace one of them with a specific value you need to pass that value in this param
4. **_fs_** - [string|Translator] - It represent a fallback. It will be rendered in case the translation is missing or not well formatted

Below you can see how to use Translator Component using this state

```js
{
    l: "en",
    m: {
        en: {
            Translations: {
                Plain: "Plain Translation",
                WithVariables: "Translation with variable for {name}",
                WithVariablesArray: "Translation with variable array for {0}"
            }
        },
        es: {
        Translations: {
            Plain: "Plana Traduccion",
            WithVariables: "Traduccion con variable por {name}",
            WithVariablesArray: "Traduccion con variable array por {0}"
        }
    }
}
```

**Plain Translation**

```jsx
<Translator s="Translations.Plain" />
```

**Plain translation with forced language**

```jsx
<Translator s="Translations.Plain" l="es" />
```

**With variables as Object**

```jsx
<Translator s="Translations.WithVariables" vs={{ name: "Marco" }} />
```

**With variables as Array**

```jsx
<Translator s="Translations.WithVariablesArray" vs={["Marco"]} />
```

**Plain translation with fallback**

```jsx
<Translator s="Translations.PlainE" fs="Plain Translation" />
```

# Hooks

## useAvailableLanguagesSelector

A hook that implements a selector from TranslationContext. It is used to get all available languages. It returns an array of strings representing all the available languages for your app. You can use it to implement a language switcher.

## useCurrentLanguageSelector

A hook used to get the currently used language. It returns also a method to set current language. It returns an object containing _currentLanguage_ property and setLang, a method that you can use to set a new language

```jsx
const LanguageSelect = () => {
    const availableLanguages = useAvailableLanguagesSelector();
    const { currentLanguage, setLang } = useCurrentLanguageSelector();
    return (
        <select value={currentLanguage} onChange={e => setLang(e.target.value)}>
            {availableLanguages.map(lang => (
                <option key={lang} value={lang}>
                    {lang}
                </option>
            ))}
        </select>
    );
};
```

## useCurrentMessagesSelector

A hook used to get the currently used messages. It returns also a method to set messages.

```jsx
const MessagesSetter = ({ messages }) => {
    const { currentMessages, setMessages } = useCurrentMessagesSelector();
    return (
        <Button type="button" onClick={() => setMessages(messages)}>
            Set Messages
        </Button>
    );
};
```

## useTranslationReducer

A reducer hook for handling localization data. It is used in [TranslationProvider](#translationprovider) component and accept initialState as argument. It returns [state, dispatch]

## useTranslationSelector

A hook for getting the translation for a specific message. It works exactly as the Translator Component and accept the same arguments. You can use this hook if you want to implement your own Translator component.

# Why??!??!??

Someone of you is asking to himself "why do I have to use this library for managing my app translations?".

-   It's powerful
-   It's lightweight
-   It's simple

I will accept any contribute in terms of coding or any suggestion about how to improve this module.
