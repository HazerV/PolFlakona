import React from "react";
import {View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import HeaderForInfo from "../../Components/PageComponents/HeaderForInfo/HeaderForInfo";

const InfoPage = () => {

    return (
        <SafeAreaView>
            <ScrollView style={{height: '100%'}}>
                <HeaderForInfo/>
                <View style={styles.container}>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})

export default InfoPage