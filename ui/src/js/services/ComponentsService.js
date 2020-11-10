import axios from 'axios';
import constants from '../constants';

export default class ComponentsService {
    getBrands() {
        return axios.get(`${constants.apiUrls.COMPONENTS_URL}/brands`);
    }
}