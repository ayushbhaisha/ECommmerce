import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { Cart, Menu } from "../assets/assets";

const Header = ({ cartItem }) => {
    const navigation = useNavigation();
    const cartItemCount = cartItem.reduce((acc, product) => acc + product.data.length, 0);

    return (
        <View style={styles.headerContainer}>
            <SvgXml xml={Menu} height={25} width={25} />
            <TouchableOpacity
                onPress={() => navigation.navigate('cartScreen')}
                style={styles.cartContainer}
            >
                <SvgXml xml={Cart} height={25} width={25} />
                {cartItemCount !== 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{cartItemCount}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        flex: 1,
        paddingVertical: 10
    },
    cartContainer: {
        position: 'relative',
        alignItems: 'center',
    },
    badge: {
        backgroundColor: '#FFA451',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        top: -5,
        right: -8,
        position: 'absolute'
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: '800',
    },
});

export default Header;