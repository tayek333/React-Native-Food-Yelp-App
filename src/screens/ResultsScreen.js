import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

const ResultsScreen = ({ route }) => {
 const { id } = route.params;
 const [result, setresult] = useState(null)

 const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setresult(response.data)
 }
 useEffect(() => {
     getResult(id)
 }, [])

 if (!result) {
     return null
 }

 console .log(id)
    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
            data= {result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item}} />
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    image: {
        height: 200,
        width: 300,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default ResultsScreen