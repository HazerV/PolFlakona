import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {config} from "../../../../config";

const UnderlineRouteText = ({text, route}) => {

    const navigation = useNavigation()
    route = 'HomePage'

    return (
        <TouchableOpacity onPress={() => navigation.navigate(route)}>
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium,
        textDecorationLine: 'underline'
    }
})

export default UnderlineRouteText
