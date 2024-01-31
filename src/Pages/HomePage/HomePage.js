import React, {useContext} from "react";
import {View, Text, ScrollView, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity} from "react-native";
import {ThemeContext} from "../../Context/context";
import Header from "../../Components/PageComponents/Header/Header";
import SliderBox from './SliderBox.png'
import {config} from "../../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import RectangleEx from '../../../assets/images/RectangleEx.svg'
import ArrowSvg from '../../../assets/icons/Arrow.svg'
import Footer from "../../Components/PageComponents/Footer/Footer";
import Parfum from '../../../assets/images/Parfum.png'

const HomePage = () => {

    // const {theme, setTheme} = useContext(ThemeContext)
    // const dynamicStyles = {}

    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Header city={'Москва'}/>
                </View>
                <View style={styles.blockSize}>
                    <View style={styles.mainBlock}>
                        <View style={styles.sliderBox}>
                            <Image source={SliderBox}/>
                        </View>
                        <Text style={styles.blockText}>
                            Истории
                        </Text>
                        <View style={styles.alignBlock}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                indicatorStyle={'black'}
                                style={styles.horisontalScroll}
                            >
                                <View style={styles.alignImgs}>
                                    <TouchableOpacity>
                                        <RectangleEx/>
                                    </TouchableOpacity>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                    <RectangleEx/>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.mainBlock}>
                        <Text style={styles.blockText}>
                            Категории
                        </Text>
                        <View style={styles.category}>
                            <Image source={Parfum} />
                            <Image source={Parfum} />
                            <Image source={Parfum} />
                            <Image source={Parfum} />
                        </View>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    areaView: {
        height: '100%',
        backgroundColor: 'white'
    },
    sliderBox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 46
    },
    blockSize: {
        height: hp('100'),
        width: wp('100')
    },
    alignImgs: {
        columnGap: 12,
        flexDirection: 'row',
        borderColor: 'green',
        // borderWidth: 2
    },
    horisontalScroll: {
        // height: hp(100),
        width: wp(85),
        columnGap: 12
    },
    alignBlock: {
        flexDirection: 'row',
        columnGap: 12,
        // borderWidth: 2,
        borderColor: 'tomato',
        paddingBottom: 16
    },
    allButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        flexDirection: 'row',
        columnGap: 7
    },
    mainBlock: {
        alignSelf: 'center',
        flexDirection: 'column',
        // borderWidth: 2,
        width: wp('85'),
    },
    header: {
        paddingBottom: 12
    },
    blockText: {
        paddingBottom: 8,
        fontSize: config.fontLarge,
        lineHeight: config.lineLarge,
        fontFamily: config.familyBold
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        // gap: wp(3),
        width: wp(85)
        // width: wp(85)
    }
})

export default HomePage