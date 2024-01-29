import React, {useContext} from "react";
import {View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import {ThemeContext} from "../Context/context";
import Header from "../Components/PageComponents/Header/Header";

const HomePage = () => {

    const {theme, setTheme} = useContext(ThemeContext)
    const dynamicStyles = {

    }

    return (
        <SafeAreaView style={
            styles.areaView
        }>
            <ScrollView style={{}}>
                <View style={styles.container}>
                    <Header city={'Москва'} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    areaView: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    container: {

    }
})

export default HomePage