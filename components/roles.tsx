import { DateFormatter } from "../lib/date";

const Roles = ({roles}) => {
    return ( 
        <div className='lg:grid grid-cols-2 gap-0 ml-11 lg:mr-44 mr-11'>
            <div>
            <h3 className="text-4xl text-center mt-11 mb-11">Roles</h3>
            </div>
            <div className='grid grid-rows-8 gap-4'>
               {roles.map((role) => (
                    <a href={role.companyWebsite ?? role.link} target="__blank" key={role.companyName ?? role.clubName}>
                        <div  className='transition duration-500 hover:-transition container rounded-md p-5 hover:bg-yellow-400 group bg-transparent group-hover:border-5 group-hover:border-yellow-400'>
                    <h3 className='text-base group-hover:text-gray-900 text-gray-100'>
                        {role.companyName ?? role.clubName}
                    </h3>
                    <h3 className='text-lg group-hover:text-gray-900 text-gray-100'>{role.companyRole ?? role.role}</h3>
                    <p className='text-sm group-hover:text-gray-900 text-gray-100'>{DateFormatter.format(role.startDate)} - {role.endDate  === null ? "Present" : DateFormatter.format(role.endDate)}</p>
                </div>
                    </a>
               ))}
            </div>
        </div>
     );
}
 
export default Roles;