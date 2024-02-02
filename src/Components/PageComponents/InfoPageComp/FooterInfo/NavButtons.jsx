import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {config} from "../../../../../config";
import {useNavigation} from "@react-navigation/native";

const NavButtons = ({text, route}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(route)}>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 12
            }}>
                <Text style={{
                    fontSize: config.fontMedium,
                    fontFamily: config.familyRegular,
                    lineHeight: config.lineMedium
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

export default NavButtons