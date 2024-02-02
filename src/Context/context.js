import {createContext, useState} from "react";

const ThemeContext = createContext()
const PageContext = createContext()
const ValueContext = createContext()

const Context = ({children}) => {

    const [value, setValue] = useState(0)
    const {theme, setTheme} = useState('light')
    const theme_context = {
        theme,
        setTheme
    }

    const valCtx = {
        value,
        setValue
    }
    const [route, setRoute] = useState('')
    const page_context = {
        route,
        setRoute
    }
    console.log(value)

    return (
        <ThemeContext.Provider value={theme_context}>
            <PageContext.Provider value={page_context}>
                <ValueContext.Provider value={valCtx}>
                    {children}
                </ValueContext.Provider>
            </PageContext.Provider>
        </ThemeContext.Provider>
    )
}

export {
    Context,
    ThemeContext,
    PageContext,
    ValueContext
}