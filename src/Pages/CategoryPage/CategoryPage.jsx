import React from "react";
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import ButtonComponents from "../../Components/GoodsComponents/ButtonComponent/ButtonComponents";
import CategoryHeader from "../../Components/PageComponents/CategoryPageComp/CategoryHeader/CategoryHeader";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {config} from "../../../config";


const CategoryPage = () => {

    return (
        <SafeAreaView>
            <ScrollView style={{ height: '100%', backgroundColor: 'white' }}>
                <CategoryHeader />
                <View style={styles.container}>
                    <View style={styles.underHeader}>
                        <View style={styles.description}>
                            <Text style={styles.descriptionText}>
                                Lorem ipsum dolor sit amet, Carbone de Balmain Eau de Toilette Balmain (в России известен как «Бальман Карбон»), выпущенный в 2010 году, классифицируется как аромат для мужчин и принадлежит семействам Пряные и Древесные. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </View>
                    <View style={styles.mainBlock}>

                    </View>
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
        // borderWidth: 1
    },
    underHeader: {

    },
    description: {
        width: wp(95),
        height: wp(27.5),
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        // alignItems: 'center',
        // justifyContent: 'center'
        // borderWidth: 2
    },
    descriptionText: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: config.fontMedium,
        lineHeight: config.lineMedium,
        fontFamily: config.familyRegular,
        width: wp(93),
        height: wp(77),
        padding: wp(3)
    }
})

export default CategoryPage