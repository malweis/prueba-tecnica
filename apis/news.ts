import axios from 'axios';

const fetchTopHeadlines = async () => {
    try {
        const params = {
            country: 'us',           // Country code for Paraguay
            apiKey: process.env.EXPO_PUBLIC_NEWS_API_KEY, // Your API key
            pageSize: 5              // Limit the result to 5 headlines
        };

        console.log('Request Params:', params);

        if (!process.env.EXPO_PUBLIC_BASE_URL) {
            throw new Error('Base URL is not defined');
        }

        const response = await axios.get(process.env.EXPO_PUBLIC_BASE_URL, { params });

        console.log('Response Data:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching top headlines:', error);
        throw error;
    }
};

export default fetchTopHeadlines;