import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from "react-native";
import {config} from "../../../config";
import HeaderForProduct from "../../Components/PageComponents/HeaderForProduct/HeaderForProduct";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import ChooseValue from "../../Components/PageComponents/ProductPageComp/ChooseValue";
import ButtonsInFooter from "../../Components/GoodsComponents/ButtonsInFooter/ButtonsInFooter";

const ProductPage = ({id}) => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}
                        style={{height: '100%', backgroundColor: 'white'}}>
                <HeaderForProduct/>
                <View style={styles.container}>
                    <Text style={styles.nameText}>
                        Pierre Balmain Carbone de Balmain туалетная вода
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.photoSlider}>
                            <Image
                                style={styles.image}
                                source={{uri: 'https://s3-alpha-sig.figma.com/img/6d29/9b1f/3013dd1f1752ec90a44a39afa2806cd1?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXFJaDdOw-dt8y60040Lzy11X30y~Vc7RzAiOIb6DJ0ctao7kAd8c~aeTnIADPUwfGSU0UMdRJzHHHJ6H98M8-YrffrcXm-CPFuA4rtd42pNeSNXyZ7k4j6DTruVMO9HGCKlTegowYodNezLwGzWiBYSKW2Chkr5aKNsmcTvCiluVAleDg-D0WICQr4PB6BTJdir-fUuY6TutMZ849v8Swd3TfUz1-HM9q-SuB0SQnPX~BjOAD4CwOTOs0JYTdh9l~DJ-C1e4dIMz-DntDMUMUKY5igShx~PoorCCdzvzGIRSF9G1QQzctA-3Ye8~wnGKExIJkt2FNWN2ZSeumPpGg__'}}/>
                            <Image
                                style={styles.image}
                                source={{uri: 'https://s3-alpha-sig.figma.com/img/6d29/9b1f/3013dd1f1752ec90a44a39afa2806cd1?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXFJaDdOw-dt8y60040Lzy11X30y~Vc7RzAiOIb6DJ0ctao7kAd8c~aeTnIADPUwfGSU0UMdRJzHHHJ6H98M8-YrffrcXm-CPFuA4rtd42pNeSNXyZ7k4j6DTruVMO9HGCKlTegowYodNezLwGzWiBYSKW2Chkr5aKNsmcTvCiluVAleDg-D0WICQr4PB6BTJdir-fUuY6TutMZ849v8Swd3TfUz1-HM9q-SuB0SQnPX~BjOAD4CwOTOs0JYTdh9l~DJ-C1e4dIMz-DntDMUMUKY5igShx~PoorCCdzvzGIRSF9G1QQzctA-3Ye8~wnGKExIJkt2FNWN2ZSeumPpGg__'}}/>
                            <Image
                                style={styles.image}
                                source={{uri: 'https://s3-alpha-sig.figma.com/img/6d29/9b1f/3013dd1f1752ec90a44a39afa2806cd1?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXFJaDdOw-dt8y60040Lzy11X30y~Vc7RzAiOIb6DJ0ctao7kAd8c~aeTnIADPUwfGSU0UMdRJzHHHJ6H98M8-YrffrcXm-CPFuA4rtd42pNeSNXyZ7k4j6DTruVMO9HGCKlTegowYodNezLwGzWiBYSKW2Chkr5aKNsmcTvCiluVAleDg-D0WICQr4PB6BTJdir-fUuY6TutMZ849v8Swd3TfUz1-HM9q-SuB0SQnPX~BjOAD4CwOTOs0JYTdh9l~DJ-C1e4dIMz-DntDMUMUKY5igShx~PoorCCdzvzGIRSF9G1QQzctA-3Ye8~wnGKExIJkt2FNWN2ZSeumPpGg__'}}/>
                            <Image
                                style={styles.image}
                                source={{uri: 'https://s3-alpha-sig.figma.com/img/6d29/9b1f/3013dd1f1752ec90a44a39afa2806cd1?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXFJaDdOw-dt8y60040Lzy11X30y~Vc7RzAiOIb6DJ0ctao7kAd8c~aeTnIADPUwfGSU0UMdRJzHHHJ6H98M8-YrffrcXm-CPFuA4rtd42pNeSNXyZ7k4j6DTruVMO9HGCKlTegowYodNezLwGzWiBYSKW2Chkr5aKNsmcTvCiluVAleDg-D0WICQr4PB6BTJdir-fUuY6TutMZ849v8Swd3TfUz1-HM9q-SuB0SQnPX~BjOAD4CwOTOs0JYTdh9l~DJ-C1e4dIMz-DntDMUMUKY5igShx~PoorCCdzvzGIRSF9G1QQzctA-3Ye8~wnGKExIJkt2FNWN2ZSeumPpGg__'}}/>
                        </View>
                    </ScrollView>
                    <ChooseValue/>
                    <View style={styles.descBlock}>
                        <Text style={styles.descriptionHead}>
                            Описание
                        </Text>
                        <Text style={styles.descriptionText}>
                            Carbone de Balmain Eau de Toilette Balmain (в России известен как «Бальман Карбон»), выпущенный в 2010 году, классифицируется как аромат для мужчин и принадлежит семействам Пряные и Древесные.
                        </Text>
                    </View>
                    <View style={{paddingBottom: wp(6)}}>
                        <Text style={styles.descriptionHead}>
                            Ноты
                        </Text>
                        <Text style={styles.descriptionText}>
                            Композицию составляют следующие ноты и аккорды: Бензоин, Благовония, Бурбон, Элеми, Инжир, Лист фиалки, Мускус, Плющ и Ветивер.
                        </Text>
                    </View>
                    <View style={{paddingBottom: wp(4)}}>
                        <Text style={{
                            paddingBottom: wp(2),
                            fontSize: config.fontMedium,
                            lineHeight: config.lineMedium,
                            fontFamily: config.familyBold
                        }}>
                            Характеристики:
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            columnGap: wp(1),

                        }}>
                            <Text style={{
                                fontSize: config.fontMedium,
                                lineHeight: config.lineMedium,
                                fontFamily: config.familyRegular
                            }}>
                                Бренд
                            </Text>
                            <View style={{
                                borderWidth: 2,
                                borderTopColor: 'white',
                                borderLeftColor: 'white',
                                borderRightColor: 'white',
                                borderBottomColor: '#CCCCCC',
                                width: wp(65)
                            }}>
                            </View>
                            <Text style={{
                                fontSize: config.fontMedium,
                                lineHeight: config.lineMedium,
                                fontFamily: config.familyRegular,

                            }}>
                                Bruno Banani

                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
            <View style={{
                position: 'absolute',
                bottom: 0,
                alignItems: 'center',
                left: 0,
                right: 0,
                paddingBottom: wp(5)
            }}>
                <ButtonsInFooter />
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: wp(2.5),
        backgroundColor: 'white',
        paddingBottom: 250
    },
    image: {
        resizeMode: 'cover',
        width: wp(33),
        height: wp(47),
        overflow: 'hidden',
        borderRadius: wp(2),
        borderWidth: wp(0.5),
        borderColor: config.backgroundIcons,
    },
    photoSlider: {
        flexDirection: 'row',
        gap: wp(3),
        paddingBottom: wp(6)
    },
    nameText: {
        fontSize: config.fontLarge,
        fontFamily: config.familyBold,
        lineHeight: config.lineLarge,
        paddingBottom: wp(4),
        paddingTop: wp(4)
    },
    descBlock: {
        paddingTop: wp(6),
        paddingBottom: wp(6)
    },
    descriptionHead: {
        fontSize: config.fontMedium,
        fontFamily: config.familyBold,
        lineHeight: config.lineMedium,
        paddingBottom: wp(2)
    },
    descriptionText: {
        fontSize: config.fontMedium,
        fontFamily: config.familyRegular,
        lineHeight: config.lineMedium
    }
})

export default ProductPage