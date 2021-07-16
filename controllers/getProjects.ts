import database from '../common/database';
export default async function getProjects() {
    const projects = [];
    const projectsCursor = await (await database()).collection('projects').find({});
    await projectsCursor.forEach((project) => {
        delete project['_id'];
        projects.push(project);
    });
    console.log(projects);
    return projects
};