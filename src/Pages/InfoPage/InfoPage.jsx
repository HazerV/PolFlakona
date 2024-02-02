import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Image} from "react-native";
import HeaderForInfo from "../../Components/PageComponents/HeaderForInfo/HeaderForInfo";
import {config} from "../../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import ParfumeProduct from "../../Components/PageComponents/InfoPageComp/ParfumeProduct/ParfumeProduct";
import BrandsScroll from "../../Components/GoodsComponents/BrandsScroll/BrandsScroll";
import MapBanner from "../../Components/PageComponents/InfoPageComp/MapBanner/MapBanner";
import PaymentBlock from "../../Components/PageComponents/InfoPageComp/PaymentBlock/PaymentBlock";
import FooterInfo from "../../Components/PageComponents/InfoPageComp/FooterInfo/FooterInfo";
import LogoSvg from '../../../assets/Logo.svg'
import LogoPng from '../../../assets/Logo.png'
import Card1 from '../../../assets/images/CardExamples/Group 9949.png'
import Card2 from '../../../assets/images/CardExamples/Group 9971.png'
import Card3 from '../../../assets/images/CardExamples/Group 9951.png'


const DATA = [
    {
        id: 1,
        name: ParfumeProduct
    },
    {
        id: 2,
        name: Card1
    },
    {
        id: 3,
        name: Card2
    },
    {
        id: 4,
        name: Card3
    }
]


const InfoPage = () => {

    const renderItem = ({item}) => (
        <View>
            <Image source={item.name} />
        </View>
    )

    return (
        <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    height: '100%',
                    backgroundColor: 'white'
                }}>
                <HeaderForInfo/>
                <View style={styles.container}>
                    <View style={styles.mainBlock}>
                        <View>
                            <Text style={{
                                fontSize: config.fontLarge,
                                lineHeight: config.lineLarge,
                                fontFamily: config.familyBold,
                                alignSelf: 'center',
                                paddingBottom: 12
                            }}>
                                Парфюмерный бар
                            </Text>
                            <View style={styles.scrollProducts}>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                                <ParfumeProduct/>
                            </View>
                        </View>
                        <BrandsScroll/>
                        <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 32}}>
                            <MapBanner/>
                        </View>
                        <PaymentBlock/>
                        <FooterInfo/>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 100
                    }}>
                        <LogoSvg/>
                        <Text style={{
                            fontSize: config.fontMedium,
                            lineHeight: config.lineMedium,
                            fontFamily: config.familyRegular,
                            alignSelf: 'center'
                        }}>
                            ©2024. Платформа TrueStudio
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    mainBlock: {
        width: wp(95),
        paddingBottom: 16,
    },
    scrollProducts: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 24,
        gap: wp(3.05)
    }
})

export default InfoPage