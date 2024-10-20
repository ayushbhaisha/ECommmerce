import React from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { SvgXml } from "react-native-svg";
import { Close, Search } from "../assets/assets";

const SearchInput = ({ onChange, isVisible, onClose, inputValue, handleFilter }) => {
    const onCloseModalButton = () => {
        handleFilter('');
        onClose();
    };

    return (
        <View style={styles.container}>
            {!inputValue && <SearchIcon />}
            <View style={[
                styles.inputContainer,
                { borderTopRightRadius: !isVisible ? 16 : 0, borderBottomRightRadius: !isVisible ? 16 : 0 },
                { borderTopLeftRadius: isVisible ? 16 : 0, borderBottomLeftRadius: isVisible ? 16 : 0 }
            ]}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Search Product'
                    placeholderTextColor={'#86869E'}
                    value={inputValue}
                    onChangeText={onChange}
                    keyboardAppearance="default"
                />
            </View>
            {inputValue && <CloseButton onCloseModalButton={onCloseModalButton} />}
        </View>
    );
};

const SearchIcon = () => (
    <View style={[styles.iconContainer, { borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }]}>
        <SvgXml xml={Search} height={20} width={20} />
    </View>
);

const CloseButton = ({ onCloseModalButton }) => (
    <TouchableWithoutFeedback onPress={onCloseModalButton}>
        <View style={[styles.iconContainer, { borderTopRightRadius: 16, borderBottomRightRadius: 16, paddingRight: 15 }]} >
            <SvgXml xml={Close} height={20} width={20} />
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
        width: "80%",
    },
    inputContainer: {
        flex: 1,
        height: 60,
        backgroundColor: '#F3F4F9',
        justifyContent: 'center',
    },
    textInput: {
        height: 60,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
    },
    iconContainer: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F4F9',
        paddingLeft: 15,
        paddingRight: 5
    }
});

export default SearchInput;