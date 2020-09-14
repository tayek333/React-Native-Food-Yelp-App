import React, { useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchAPI = () => {
        yelp.get('/search')
    }
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => console.log(term)}
            />
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen