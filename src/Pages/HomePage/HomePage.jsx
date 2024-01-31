import React, {useContext} from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList, Pressable
} from "react-native";
import Header from "../../Components/PageComponents/Header/Header";
import SliderBox from './SliderBox.png'
import {config} from "../../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import RectangleEx from '../../../assets/images/RectangleEx.svg'
import ArrowSvg from '../../../assets/icons/Arrow.svg'
import Footer from "../../Components/PageComponents/Footer/Footer";
import Parfum from '../../../assets/images/Parfum.png'
import Productitem from "../../Components/GoodsComponents/Productitem/Productitem";

const HomePage = () => {

    // const {theme, setTheme} = useContext(ThemeContext)
    // const dynamicStyles = {}

    return (
        <SafeAreaView>
            <ScrollView style={{
                height: '100%',
            }}>
                <Header city={'Оренбург'}/>
                <View style={styles.container}>
                    <View style={styles.mainBlock}>
                        <View style={styles.sliderBox}>
                            <Image
                                style={{
                                    resizeMode: 'contain',
                                    height: hp(30),
                                    width: wp(95)
                                }}
                                source={SliderBox}/>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.textCommon}>
                                    Истории
                                </Text>
                                <View style={styles.allArrow}>
                                    <Pressable hitSlop={20} onPress={() => console.log('a')}>
                                    <Text style={styles.textCommon}>
                                        Все
                                    </Text>
                                    </Pressable>
                                    <View style={{paddingTop: 5}}>
                                    <ArrowSvg/>
                                    </View>
                                </View>
                            </View>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <View style={styles.commonBlock}>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                </View>
                            </ScrollView>
                        </View>
                            <Text style={styles.textCommon}>
                                Категории
                            </Text>
                        <View style={styles.categoryBlock}>
                            <Image source={Parfum}/>
                            <Image source={Parfum}/>
                            <Image source={Parfum}/>
                            <Image source={Parfum}/>
                        </View>
                        <View>
                            <Text style={styles.textCommon}>
                                Лидер продаж
                            </Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false} >
                                <View style={styles.commonBlock}>
                                    <Productitem description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450} name={'Духи AMOUAGE Beach Hut (на распив)' } />
                                    <Productitem description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450} name={'Духи AMOUAGE Beach Hut (на распив)' } />
                                    <Productitem description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450} name={'Духи AMOUAGE Beach Hut (на распив)' } />
                                    <Productitem description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450} name={'Духи AMOUAGE Beach Hut (на распив)' } />
                                    <Productitem description={'Доступен от 3 мл'} price={'1890'} firstPrice={2450} name={'Духи AMOUAGE Beach Hut (на распив)' } />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <Footer/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    mainBlock: {
        width: wp(95),
        paddingBottom: 16,
        paddingTop: 12
    },
    sliderBox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 16
    },
    commonBlock: {
        columnGap: 12,
        flexDirection: 'row',
        paddingBottom: 16,
    },
    textCommon: {
        paddingBottom: 16,
        fontFamily: config.familyBold,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge
    },
    categoryBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        paddingBottom: 34
    },
    allArrow: {
        flexDirection: 'row',
        columnGap: 4,
        position: 'absolute',
        alignContent: 'center',
        right: 2,
    },
})

export default HomePage