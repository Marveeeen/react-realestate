import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a8e2c852ffmshcf9b5c4d20824a8p14af2djsn9d16ce30bb5c'
        }
    });

    return data
}