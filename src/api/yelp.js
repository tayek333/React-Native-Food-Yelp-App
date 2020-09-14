import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer [YOUR API KEY HERE]'
        //Find you API key here https://www.yelp.com/developers/v3/manage_app
    }
})
