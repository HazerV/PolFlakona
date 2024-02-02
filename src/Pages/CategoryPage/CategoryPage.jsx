import React from "react";
import {View, Dimensions, Text, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import ButtonComponents from "../../Components/GoodsComponents/ButtonComponent/ButtonComponents";
import CategoryHeader from "../../Components/PageComponents/CategoryPageComp/CategoryHeader/CategoryHeader";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {config} from "../../../config";
import PodCategoryButton from "../../Components/PageComponents/CategoryPageComp/PodCategory/PodCategoryButton";
import Footer from "../../Components/PageComponents/Footer/Footer";
import Filtering from "../../Components/PageComponents/CategoryPageComp/Filtering/Filtering";
import GoodsInCategory from "../../Components/GoodsComponents/GoodsInCategory/GoodsInCategory";

const CategoryPage = () => {

    return (
        <SafeAreaView>
            <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
                <CategoryHeader/>
                <View style={styles.container}>
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>
                            Lorem ipsum dolor sit amet, Carbone de Balmain Eau de Toilette Balmain (в России
                            известен как «Бальман Карбон»), выпущенный в 2010 году, классифицируется как аромат для
                            мужчин и принадлежит семействам Пряные и Древесные. adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        paddingTop: wp(3.05),
                        gap: wp(3.05),
                        paddingBottom: wp(4)
                    }}>
                        <PodCategoryButton text={'Подкатегория '}/>
                        <PodCategoryButton text={'Подкатегория вторая'}/>
                        <PodCategoryButton text={'Подкатегория 2333'}/>
                        <PodCategoryButton text={'Парфюм 7'}/>
                        <PodCategoryButton text={'Духи'}/>
                    </View>
                    {/*<View style={{paddingLeft: wp(5)}}>*/}
                    {/*</View>*/}
                    <Filtering />
                </View>
                <View style={styles.mainBlock}>
                    <GoodsInCategory />
                    <GoodsInCategory />
                    <GoodsInCategory />
                    <GoodsInCategory />
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    mainBlock: {
        paddingLeft: wp(2.5),
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: wp(5),
    },
    description: {
        width: wp(95),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingBottom: wp(3.5),
        alignItems: 'center',
        justifyContent: 'center',

    },
    descriptionText: {
        textAlign: 'center',
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular,
        paddingTop: wp(3.05)
    }
})

export default CategoryPage