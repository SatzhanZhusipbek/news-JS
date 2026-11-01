import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_KEY;

        if (!apiUrl || !apiKey) {
            throw new Error('API_URL or API_KEY is missing');
        }

        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
