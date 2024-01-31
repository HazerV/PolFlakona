import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {config} from "../../../../config";
import ButtonComponents from "../../GoodsComponents/ButtonComponent/ButtonComponents";
import UnderlineRouteText from "../../GoodsComponents/UnderlineRouteText/UnderlineRouteText";
import ButtonsInFooter from "../../GoodsComponents/ButtonsInFooter/ButtonsInFooter";


const Footer = () => {

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'column',
                paddingBottom: 16
            }}>
                <View style={styles.topButtons}>
                    <View style={styles.topButton}>
                        <ButtonComponents text={'Оплата'} />
                        <ButtonComponents text={'Доставка'} />
                        <ButtonComponents text={'О нас'} />
                    </View>
                </View>
                <View style={styles.lowBlock}>
                    <UnderlineRouteText text={'Контакты'} />
                    <UnderlineRouteText text={'Оферта'} />
                    <UnderlineRouteText text={'Пользовательское соглашения'} />
                    <UnderlineRouteText text={'Политика конфиденциальности'} />
                </View>
                <Text style={[styles.companyName, {alignSelf: 'center'}]}>
                    © 2023 – 2024. «Полфлакона». Все права защищены.
                </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
                <ButtonsInFooter />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(40),
        borderWidth: 2,
        // borderColor: 'black',
        borderColor: '#F5F5F5',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
    topButtons: {
        flexDirection: 'row',
        rowGap: 16,
        paddingTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 16,
        paddingBottom: 28
    },
    lowBlock: {
        flexDirection: 'column',
        rowGap: 12,
        alignItems: 'center',
        paddingBottom: 28
    },
    topButton: {
        height: 40,
        width: 80,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 12,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyBold
    },
    companyName: {
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular
    }
})

export default Footer