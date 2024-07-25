import axios from 'axios';

const fetchTopHeadlines = async () => {
    try {
        const params = {
            country: 'us',           // Country code for Paraguay
            pageSize: 50,            // Limit the result to 50 headlines
        };

        console.log('API Key:', process.env.EXPO_PUBLIC_NEWS_API_KEY);
console.log('Base URL:', process.env.EXPO_PUBLIC_BASE_URL);
        console.log('Request Params:', params);

        if (!process.env.EXPO_PUBLIC_BASE_URL) {
            throw new Error('Base URL is not defined');
        }

        if (!process.env.EXPO_PUBLIC_NEWS_API_KEY) {
            throw new Error('API Key is not defined');
        }

        const response = await axios.get(process.env.EXPO_PUBLIC_BASE_URL, {
            params,
            headers: {
                'Authorization': `Bearer ${process.env.EXPO_PUBLIC_NEWS_API_KEY}`
            }
        });

        console.log('Response Data:', response.data);

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error response:', error.response?.data);
        } else {
            console.error('Error fetching top headlines:', error);
        }
        throw error;
    }
};

export default fetchTopHeadlines;