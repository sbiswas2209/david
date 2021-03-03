const Roles = () => {
    const roles = [
        {
            name: 'SRMKZILLA',
            role: 'Technical Associate',
            duration: 'October 2020 - Present'
        },
        {
            name: 'Alexa Developers SRM',
            role: 'Technical Associate',
            duration: 'March 2020 - Present'
        },
        {
            name: 'Think Digital SRM',
            role: 'App Developer',
            duration: 'September 2020 - Present'
        },
        {
            name: 'IWSCSRM',
            role: 'Social Media Chair',
            duration: 'December 2019 - Present'
        },
        {
            name: 'Tech-Analogy',
            role: 'App Development Lead',
            duration: 'Oct 2020 - Present'
        },
        {
            name: 'Campus-Media',
            role: 'Full Stack Developer',
            duration: 'January 2021 - February 2021'
        },
        {
            name: 'Kaloory',
            role: 'Flutter Developer',
            duration: 'August 2020 - December 2020'
        },
        {
            name: 'Naaniz',
            role: 'Flutter Developer',
            duration: 'June 2020 - July 2020'
        },
    ]
    return ( 
        <div className='lg:grid grid-cols-2 gap-0 ml-11 lg:mr-44 mr-11'>
            <div>
                <h1 className='text-4xl transition ease-in duration-700 lg:text-center mt-11'>
                    Roles
                </h1>
            </div>
            <div className='grid grid-rows-8 gap-4'>
               {roles.map((role) => (
                    <div key={role.name} className='transition duration-500 hover:-transition container rounded-md p-5 hover:bg-yellow-400 group bg-transparent group-hover:border-5 group-hover:border-yellow-400'>
                    <h3 className='text-base group-hover:text-gray-900 text-gray-100'>
                        {role.role}
                    </h3>
                    <h3 className='text-lg group-hover:text-gray-900 text-gray-100'>{role.name}</h3>
                    <p className='text-sm group-hover:text-gray-900 text-gray-100'>{role.duration}</p>
                </div>
               ))}
            </div>
        </div>
     );
}
 
export default Roles;