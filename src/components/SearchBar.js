/* eslint-disable react/prop-types */
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'; 
import { Feather } from '@expo/vector-icons'
import yelp from '../api/yelp'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
            style={styles.inputStyle}
            value={term}
            onChangeText={onTermChange}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        height: 50,
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
})

export default SearchBar;
