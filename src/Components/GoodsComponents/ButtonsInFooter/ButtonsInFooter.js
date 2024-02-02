import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import AccountSvg from '../../../../assets/icons/Footericons/account.svg'
import MenuSvg from '../../../../assets/icons/Footericons/menu.svg'
import CartSvg from '../../../../assets/icons/Footericons/cart.svg'
import {config} from "../../../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";


const ButtonsInFooter = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <CartSvg/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('InfoPage')
            }}>
                <MenuSvg/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('InfoPage')
            }}>
                <AccountSvg/>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: wp(64),
        height: wp(15),
        backgroundColor: config.accentColor,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#E1E1E1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: wp(8),
    }
})

export default ButtonsInFooter