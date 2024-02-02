import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import ArrowSvg from '../../../../../assets/icons/HeaderIcons/BackArrowBlack.svg'
import {useNavigation} from "@react-navigation/native";
import MoonSvg from '../../../../../assets/icons/HeaderIcons/Moon.svg'

function GoBack() {

    const navigation = useNavigation()


    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('HomePage')
        }}>
            <View style={styles.container}>
                <ArrowSvg/>
            </View>
        </TouchableOpacity>
    )

}


function SwitchTheme() {
    return (
        <TouchableOpacity>
            <View style={[styles.container, {backgroundColor: '#474747'}]}>
                <MoonSvg />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export {
    GoBack,
    SwitchTheme
}