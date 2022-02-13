import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID m3g0iOGR8U0rQSZFExMO_lHa2Q5ycoA2QiIKMU-96PA'
    }
});