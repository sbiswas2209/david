const database = require('../../common/database');
export default async function getRoles() {
    return await (await database()).collection('roles').find({}).toArray()
};