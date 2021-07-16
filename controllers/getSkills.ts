import database from '../common/database';
export default async function getSkills() {
    const skills = [];
    const skillsCursor = await (await database()).collection('skills').find({}).toArray();
    (await skillsCursor[0]).skills.forEach((skill) => {
        skills.push(skill);
    });
    return skills;
};