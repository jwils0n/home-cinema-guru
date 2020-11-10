import Brand from '../models/Brand';

async function getAll() {
    return await Brand.findAll({
        attributes: ['id', 'name', 'slug']
    });
}

export default {
    getAll
}