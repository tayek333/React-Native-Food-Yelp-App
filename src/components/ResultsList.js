import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from '../components/ResultsDetail'
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results}) => {
    const navigation = useNavigation();

    if (!results.length) {
        return null
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("Results", { id: item.id})}>
                    <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
            showsHorizontalScrollIndicator={false}
        />
    </View>
    ) 
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 15,
    },
    container: {
        marginBottom: 10
    },
})

export default ResultsList