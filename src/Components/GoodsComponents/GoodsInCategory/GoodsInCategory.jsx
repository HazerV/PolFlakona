import React from "react";
import {View, Image, Text, ScrollView, SafeAreaView, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {config} from "../../../../config";

const GoodsInCategory = ({id, name, description, quantity, imageSrc}) => {

    return (
        <View style={styles.container}>
                <Image
                    style={{
                        resizeMode: 'cover',
                        width: wp(45),
                        height: wp(34),
                        overflow: 'hidden',
                        borderRadius: 8,
                        borderWidth: wp(0.5),
                        borderColor: config.backgroundIcons
                    }}
                    source={{
                        uri: 'https://s3-alpha-sig.figma.com/img/fd1d/793f/7419a8bfb34be304ca51ab84ee3a6076?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vtguw4QeMqQKRsCpAxWgg0fCKTvEup5SdeuUrIML-4P1sGiixeJob0jIs7lct0W~YVsbx2tL2POocr3m3uE6mAII2A~Ute~~CR5g1jduf1k8bfcXA-DRHudD0IZ6BDn~VYoaPm2U3VduyWtiAgs3M8rZROCjwQQWRsZr4qfyRO~QcA6Jm-dACo1VeKBsr8ZRVfIdgdIisQv-sFn8nlKn52BN5qIclfuVHsvfXocJgT7HzMAWV0-r~p6uhedOjZbq3b9W0FNSpIB7cv~5gt7D6-p3QeWpPhH0D7e4VVqqjT3UC-vYeRCjugb1yhtX6wVjyo9wXjXrs~T8xV-lbcnbKw__'
                    }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {}
})

export default GoodsInCategory