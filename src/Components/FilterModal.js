import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import FilterOption from "./FilterOption";

const FilterModal = ({ isVisible, closeModal, applyFilter, handleFilter }) => {
    const [filterType, setFilterType] = useState('');
    const filterOptions = [
        { text: 'Lowest first', value: 'lowestToHighest' },
        { text: 'Highest first', value: 'highestToLowest' },
        { text: 'Ascending', value: 'ascending' },
        { text: 'Descending', value: 'descending' }
    ];

    const resetFilter = () => {
        setFilterType('');
        handleFilter('');
        closeModal();
    };

    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.lineContainer}>
                        <View style={styles.lineContent} />
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Price</Text>
                        {filterOptions.slice(0, 2).map(option => (
                            <FilterOption
                                key={option.value}
                                option={option}
                                filterType={filterType}
                                onPress={() => setFilterType(option.value)}
                            />
                        ))}
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Name</Text>
                        {filterOptions.slice(2).map(option => (
                            <FilterOption
                                key={option.value}
                                option={option}
                                filterType={filterType}
                                onPress={() => setFilterType(option.value)}
                            />
                        ))}
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={resetFilter} style={styles.button}>
                            <Text style={styles.buttonText}>Clear all</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => applyFilter(filterType)} style={[styles.button, { backgroundColor: '#FFA451' }]}>
                            <Text style={[styles.buttonText, { color: 'white' }]}>Show</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalContent: {
        backgroundColor: 'white',
        flex: Platform.OS === 'android' ? 0.55 : 0.5,
        paddingHorizontal: 15
    },
    lineContainer: {
        alignItems: 'center',
        height: 24
    },
    lineContent: {
        height: 6,
        borderRadius: 8,
        width: 50,
        backgroundColor: '#DBDBDB',
        marginVertical: 8
    },
    section: {
        justifyContent: 'center',
        paddingVertical: 10
    },
    sectionTitle: {
        fontWeight: '800',
        fontSize: 20,
        color: '#B0B0B0',
        marginBottom: 10,
        paddingLeft: 10
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#EBEBEB',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingVertical: 20, 
    },
    button: {
        height: 50,
        width: 160,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFA451'
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600',
        color: '#FFA451'
    }
});

export default FilterModal;