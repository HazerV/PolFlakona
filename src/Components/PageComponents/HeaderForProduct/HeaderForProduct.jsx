import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import GoBackArrow from '../../../../assets/icons/HeaderIcons/BackArrowBlack.svg'
import ArrowSvg from "../../../../assets/icons/CategoryHeader/GoBackBold.svg";
import {useNavigation} from "@react-navigation/native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import AddToFavorite from "./AddToFavorite";

const HeaderForProduct = ({id, name}) => {

    name = 'Bruno Banani'
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('CategoryPage')}>
                <View style={styles.go_back}>
                    <ArrowSvg/>
                </View>
            </TouchableOpacity>
            <Text style={styles.text_head}>
                {name}
            </Text>
            <AddToFavorite />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 32,
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        // columnGap: wp(30),
        paddingBottom: 12,
    },
    go_back: {
        width: wp(10),
        height: wp(10),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_head: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge
    }
})

export default HeaderForProduct