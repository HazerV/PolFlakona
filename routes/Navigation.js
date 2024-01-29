import React, {useContext} from "react";
import routes from './index'
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ThemeContext, PageContext} from "../src/Context/context";

const Stack = createNativeStackNavigator()
const Navigation = () => {

    const {route, setRoute} = useContext(PageContext)
    const navigationRef = useNavigationContainerRef()
    let {theme} = useContext(ThemeContext)

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                setRoute(navigationRef.getCurrentRoute().name)
            }}
            onStateChange={async () => {
                const previousRouteName = route
                const currentRouteName = navigationRef.getCurrentRoute().name
                if (previousRouteName !== currentRouteName) {
                    setRoute(currentRouteName)
                }
            }}
        >
            <Stack.Navigator
                screenOptions={{headerShown: false}} >
                {
                    Object.keys(routes).map((name) => (
                        <Stack.Screen name={name}
                                      component={routes[name]}
                                      options={{
                                          animation: 'none',
                                          headerShown: false,
                                          navigationBarHidden: true
                                      }} />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation