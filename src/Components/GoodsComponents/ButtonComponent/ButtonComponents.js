import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import {useNavigation} from "@react-navigation/native";
import HomePage from "../../../Pages/HomePage/HomePage";

const ButtonComponents = ({text, route}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(HomePage)}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 80,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 4,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium
    }
})

export default ButtonComponents