const database = require('../../common/database');
export default async function getProjects() {
    return await (await database()).collection('projects').find({}).toArray()
};