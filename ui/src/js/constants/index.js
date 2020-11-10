
import QUESTIONNAIRE from './questionnaire';

const BASE_API_URL_LOCAL = 'http://localhost:8080/';
const BASE_API_URL = '/';

const apiUrls = {
    COMPONENTS_URL: 'api/components'
};

function buildApiUrls(urls) {
    return Object.keys(urls).reduce((acc, key) => {
        const baseUrl = process.env.NODE_ENV === 'development' ? BASE_API_URL_LOCAL : BASE_API_URL;
        acc[key] = `${baseUrl}${urls[key]}`;
        return acc;
    }, {});
}

export default {
    QUESTIONNAIRE,
    apiUrls: buildApiUrls(apiUrls),
    CDN_URL: 'https://homecinemaguru.nyc3.cdn.digitaloceanspaces.com'
};