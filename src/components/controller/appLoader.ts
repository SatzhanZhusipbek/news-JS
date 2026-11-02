import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const isProduction = process.env.NODE_ENV === 'production';

        const apiUrl = isProduction ? 'https://rss-news-api.onrender.com/mocks/' : process.env.API_URL;

        const apiKey = isProduction ? undefined : process.env.API_KEY;

        if (!apiUrl || (!isProduction && !apiKey)) {
            throw new Error('API_URL or API_KEY is missing');
        }

        super(apiUrl, apiKey ? { apiKey } : {});
    }
}

export default AppLoader;
