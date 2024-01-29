import {createContext, useState} from "react";

const ThemeContext = createContext()
const PageContext = createContext()

const Context = ({children}) => {

    const {theme, setTheme} = useState('light')
    const theme_context = {
        theme,
        setTheme
    }

    const [route, setRoute] = useState('')
    const page_context = {
        route,
        setRoute
    }

    return (
        <ThemeContext.Provider value={theme_context}>
            <PageContext.Provider value={page_context}>
                {children}
            </PageContext.Provider>
        </ThemeContext.Provider>
    )
}

export {
    Context,
    ThemeContext,
    PageContext
}