import Speaker from '../models/Speaker';
import Brand from '../models/Brand';

async function getAll() {
    return await Speaker.findAll({
        attributes: ['id', 'name', 'slug', 'price'],
        include: [{
            model: Brand
        }]
    });
}

export default {
    getAll
}