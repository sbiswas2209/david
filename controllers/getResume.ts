import database from "../common/database";
export default async function getRoles() {
    const resume = [];
    const rolesCursor = await (await database()).collection('config').find({});
    await rolesCursor.forEach((role) => {
        delete role['_id'];
        resume.push(role);
    });
    return resume[0].resume;
}
