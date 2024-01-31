import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import AccountSvg from '../../../../assets/icons/Footericons/account.svg'
import MenuSvg from '../../../../assets/icons/Footericons/menu.svg'
import CartSvg from '../../../../assets/icons/Footericons/cart.svg'

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
        width: 250,
        height: 60,
        backgroundColor: '#593780',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#E1E1E1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 30
    }
})

export default ButtonsInFooter