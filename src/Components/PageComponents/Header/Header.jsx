import {View, Text, StyleSheet, TouchableOpacity, Touchable} from "react-native";
import React, {useState, useContext} from "react";
import HeaderSvg from '../../../../assets/images/Header.svg'
import Search from '../../../../assets/icons/HeaderIcons/Search.svg'
import Navigation from '../../../../assets/icons/HeaderIcons/Navigation.svg'
import {config} from "../../../../config";
import ButtonComponents from "../../GoodsComponents/ButtonComponent/ButtonComponents";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";


const Header = ({city}) => {

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.block}>
                        <Navigation/>
                        <Text style={styles.textInBlock}>
                            {city}
                        </Text>
                    </View>
                </TouchableOpacity>
                <HeaderSvg/>
                <TouchableOpacity>
                    <View style={styles.block}>
                        <Search/>
                        <Text style={styles.textInBlock}>
                            Поиск
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.lowBlock}>
                <ButtonComponents text={'Оплата'} />
                <ButtonComponents text={'Доставка'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 32,
        justifyContent: 'center',
        width: wp(100),
        columnGap: 55,
        paddingBottom: 12,
        backgroundColor: 'white'
    },
    block: {
        height: 40,
        width: 88,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 4,
        alignItems: 'center'
    },
    textInBlock: {
        fontSize: config.fontSmall,
        lineHeight: config.lineSmall,
        fontFamily: config.familyRegular
    },
    boldText: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold
    },
    lowBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 24,
        backgroundColor: 'white'
    }
})

export default Header