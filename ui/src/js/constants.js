
const BASE_API_URL_LOCAL = 'http://localhost:8080/';
const BASE_API_URL = '/';

const apiUrls = {
    TEST_URL: 'api'
};

function buildApiUrls(urls) {
    return Object.keys(urls).reduce((acc, key) => {
        const baseUrl = process.env.NODE_ENV === 'development' ? BASE_API_URL_LOCAL : BASE_API_URL;
        acc[key] = `${baseUrl}${urls[key]}`;
        return acc;
    }, {});
}

export default {
    apiUrls: buildApiUrls(apiUrls),
    CDN_URL: 'https://homecinemaguru.nyc3.digitaloceanspaces.com'
};