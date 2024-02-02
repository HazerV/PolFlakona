import React from "react";
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import {config} from "../../../../../config";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import TrashSvg from '../../../../../assets/icons/Trash 3.svg'
import ButtonsInFilter from "./ButtonsInFilter";

const Filtering = () => {

    return (
        <View style={{flexDirection: 'row', paddingLeft: wp(2.5)}}>
            <TouchableOpacity>
                <View style={{
                    width: wp(10),
                    height: wp(10),
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: config.backgroundIcons
                }}>
                    <TrashSvg/>
                </View>
            </TouchableOpacity>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    <ButtonsInFilter text={'0 - 2000 р'}/>
                    <ButtonsInFilter text={'Верхние ноты: цитрусовые'}/>
                    <ButtonsInFilter text={'100 р'}/>
                    <ButtonsInFilter text={'null'}/>
                    <ButtonsInFilter text={'Верхние ноты: не цитрусовые'}/>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        columnGap: wp(3.05),
        flexDirection: 'row',
        paddingBottom: wp(4.1),
        paddingLeft: wp(4)
    }
})

export default Filtering