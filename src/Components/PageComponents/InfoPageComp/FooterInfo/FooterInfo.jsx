import React from "react";
import {View, Text, StyleSheet} from "react-native";
import NavButtons from "./NavButtons";
import LogoSvg from '../../../../../assets/Logo.svg'
import {config} from "../../../../../config";

const FooterInfo = () => {

    return (
        <View style={{
            alignSelf: 'center',
            justifyContent: 'center'
        }}>
            <NavButtons text={'Контакты'} />
            <NavButtons text={'Оферта'} />
            <NavButtons text={'Пользовательское соглашение'} />
            <NavButtons text={'Политика конфиденциальности'} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default FooterInfo

