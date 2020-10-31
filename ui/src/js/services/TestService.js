import axios from 'axios';
import constants from '../constants';
console.log(constants);
export default class TestService {
    get() {
        return axios.get(constants.apiUrls.TEST_URL);
    }
}