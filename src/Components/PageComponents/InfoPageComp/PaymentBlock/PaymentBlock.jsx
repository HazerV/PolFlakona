import React from "react";
import {View, StyleSheet, Text, Image, Linking, TouchableOpacity} from "react-native";
import ButtonComponents from "../../../GoodsComponents/ButtonComponent/ButtonComponents";
import WhatsApp from '../../../../../assets/images/SocNetworks/WhatApp.png'
import Telegram from '../../../../../assets/images/SocNetworks/Telegram.png'

const PaymentBlock = () => {

    const my_link = 'https://t.me/vcvkkk777'

    return (
        <View style={styles.container}>
            <ButtonComponents text={'Оплата'} />
            <ButtonComponents text={'Доставка'} />
            <TouchableOpacity onPress={() => Linking.openURL(my_link)}>
                <Image source={WhatsApp}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(my_link)}>
                <Image source={Telegram} />
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 12,
        paddingBottom: 74
    }
})

export default PaymentBlock