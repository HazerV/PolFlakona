import React, {useState} from 'react'
import useFonts from "./assets/fonts/fonts";
import AppLoading from "expo-app-loading";
import Navigation from "./routes/Navigation";
import * as SplashScreen from 'expo-splash-screen';
import {ThemeContext, Context} from "./src/Context/context";


const App = () => {

    const [IsReady, setIsReady] = useState(false)
    const Load = async () => {
        await useFonts()
    }
    if (!IsReady) {
        return (
            <AppLoading
                startAsync={Load}
                onFinish={() => {
                    setIsReady(true)
                }}
                onError={(err) => console.warn(err)}
            />
        );
    }


    return (
        <Context>
            <Navigation />
        </Context>
    )
}

export default App