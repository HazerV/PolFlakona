import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {config} from "../../../../config";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import AvailableValues from "./AvailableValues";
import {ValueContext} from "../../../Context/context";

const ChooseValue = ({id}) => {

    const {value} = useContext(ValueContext)

    return (
        <View style={styles.container}>
            <View style={styles.elements}>
                <Text style={styles.chooseText}>
                    Выберите объем:
                </Text>
                <View style={styles.values}>
                    <AvailableValues count={2}/>
                    <AvailableValues count={5}/>
                    <AvailableValues count={15}/>
                    <AvailableValues count={30}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: config.backgroundIcons,
        borderRadius: 8,
        width: wp(372),
        height: wp(43)
    },
    values: {
        flexDirection: 'row',
        columnGap: wp(2)
    },
    elements: {
        padding: wp(4),
        flexDirection: 'column'
    },
    chooseText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        paddingBottom: wp(2)
    }
})

export default ChooseValue