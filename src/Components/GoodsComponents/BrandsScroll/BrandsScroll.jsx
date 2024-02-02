import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity} from "react-native";
import BrandEx from '../../../../assets/images/BrandEx.png'
import ArrowSvg from '../../../../assets/icons/Arrow.svg'
import {config} from "../../../../config";

const BrandsScroll = ({img}) => {

    img = BrandEx

    return (
        <View style={{paddingBottom: 32}}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                <View style={{
                    columnGap: 12,
                    flexDirection: 'row',
                    paddingBottom: 12,

                }}>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                    <Image source={img}/>
                </View>
            </ScrollView>
            <TouchableOpacity>
                <View style={{
                    width: 130,
                    height: 40,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    columnGap: 4
                }}>
                    <Text style={{
                        fontSize: config.fontMedium,
                        fontFamily: config.familyBold,
                        lineHeight: config.lineMedium,
                    }}>
                        Все бренды
                    </Text>
                    <ArrowSvg/>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({})

export default BrandsScroll