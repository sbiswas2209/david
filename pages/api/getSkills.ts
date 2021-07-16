const database = require('../../common/database');
export default async function getSkills() {
    return await (await database()).collection('skills').find({}).toArray()[0];
};